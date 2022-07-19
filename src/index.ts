import mongoose from 'mongoose';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import { UserInputError } from 'apollo-server-errors';
import { ENVIRONMENT } from './config/environment';
import { environmentVariablesConfig } from './config/appConfig';
import { logger, endLogger } from './helpers/logger';
import { requestDevLogger } from './helpers/requestDevLogger';
import { setContext } from './lib/setContext';
import schema from './graphql'
import { getListOfIPV4Address } from './helpers/getListOfIPV4Address';
import routesManager from './routes/routesManager';
import throng from 'throng';

async function start(id: any) {

	if (environmentVariablesConfig.formatConnection === 'DNSseedlist' && environmentVariablesConfig.mongoDNSseedlist !== '') {
		mongoose.connect(environmentVariablesConfig.mongoDNSseedlist);
	} else {
		if (environmentVariablesConfig.mongoUser !== '' && environmentVariablesConfig.mongoPass !== '') {
			mongoose.connect(`mongodb://${environmentVariablesConfig.mongoUser}:${environmentVariablesConfig.mongoPass}@${environmentVariablesConfig.dbHost}:${environmentVariablesConfig.dbPort}/${environmentVariablesConfig.database}`);
		} else {
			mongoose.connect(`mongodb://${environmentVariablesConfig.dbHost}:${environmentVariablesConfig.dbPort}/${environmentVariablesConfig.database}`);
		}
	}

	const db = mongoose.connection;
	db.on('error', (err) => {
		logger.error(`Connection error with database. ${err}`);
	});

	db.once('open', () => {
		if (environmentVariablesConfig.enviroment !== ENVIRONMENT.DEVELOPMENT) {
			logger.info(`Connected with MongoDB service (${ENVIRONMENT.PRODUCTION} mode)`);
		} else {
			if (environmentVariablesConfig.formatConnection === 'DNSseedlist' && environmentVariablesConfig.mongoDNSseedlist !== '') {
				logger.info(`Connected with MongoDB service at "${environmentVariablesConfig.mongoDNSseedlist}" using database "${environmentVariablesConfig.database}" (${ENVIRONMENT.DEVELOPMENT} mode)`);
			} else {
				logger.info(`Connected with MongoDB service at "${environmentVariablesConfig.dbHost}" in port "${environmentVariablesConfig.dbPort}" using database "${environmentVariablesConfig.database}" (${ENVIRONMENT.DEVELOPMENT} mode)`);
			}
		}

		initApplication();
	});

	const initApplication = async () => {
		const app = express();

		if (environmentVariablesConfig.enviroment === ENVIRONMENT.PRODUCTION) {
			app.use(helmet());
		} else {
			app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
		}

		app.use(cors({ credentials: true }));
		app.use('/', routesManager);

		const server = new ApolloServer({ 
			schema,
			context: setContext,
			introspection: (environmentVariablesConfig.enviroment === ENVIRONMENT.PRODUCTION) ? false : true,
			plugins: (environmentVariablesConfig.enviroment === ENVIRONMENT.PRODUCTION) ? [ApolloServerPluginLandingPageDisabled()] : [requestDevLogger, ApolloServerPluginLandingPageGraphQLPlayground()],
			formatError (error) {
				if ( !(error.originalError instanceof UserInputError) ) {
					logger.error(error.message);
				}

				return error;
			},
			logger
		});

		await server.start();

		server.applyMiddleware({ app });

		app.use((req, res) => {
			res.status(404).send('404');
		});

		app.listen(environmentVariablesConfig.port, () => {
			logger.info(`Worker ${id}`);
			getListOfIPV4Address().forEach(ip => {
				logger.info(`🚀 Application running on: http://${ip}:${environmentVariablesConfig.port}`);
				if (environmentVariablesConfig.enviroment !== ENVIRONMENT.PRODUCTION) {
					logger.info(`GraphQL Playground running on: http://${ip}:${environmentVariablesConfig.port}${server.graphqlPath}`);
				}
			});
		});

	}
}

if (![ENVIRONMENT.PRODUCTION, ENVIRONMENT.DEVELOPMENT].includes('test')) {
	throng({
		workers: environmentVariablesConfig.workers,
		lifetime: Infinity,
		start,
	});
}

process.on('SIGINT', () => {
	logger.info('Stopping application...');
	endLogger();
	process.exit();
})
