import fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { print } from 'graphql';

const typesArray = loadFilesSync(path.join(__dirname, './types'));
const typeDefs = mergeTypeDefs(typesArray);

const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));
const resolvers = mergeResolvers(resolversArray);

fs.writeFileSync('src/typeDefs/schema.graphql', print(typeDefs), { flag: 'w+'});

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});
