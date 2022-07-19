import { logger } from './logger';

export const requestDevLogger = {
	// Fires whenever a GraphQL request is received from a client
	requestDidStart (requestContext: any) {

		/* List of regex to filter queries from logger */
		const excludeThisQueryFromLogger = [/query IntrospectionQuery/];

		const avoidLog = excludeThisQueryFromLogger.some(excludedQuery => requestContext.request.query.match(excludedQuery));

		if (avoidLog) {
			return;
		}

		logger.debug('Query:');
		logger.debug(`\n${requestContext.request.query}`);

		logger.debug('Variables:');
		logger.debug(requestContext.request.variables);

		return {
			// Fires whenever Apollo Server is about to send a response for a GraphQL operation
			willSendResponse (requestContext: any) {
				logger.debug('Response data:');
				logger.debug(requestContext.response.data);

				if (requestContext.response.errors) {
					logger.debug(`Response errors (number of errors: ${requestContext.response.errors.length}):`);
					requestContext.response.errors.forEach((err: any) => logger.debug(err.message));
				}
			}
		};
	}
};
