import { QueryResolvers, MutationResolvers } from '../../typeDefs/resolvers';

interface Resolvers {
    Query: QueryResolvers
}

const resolvers: Resolvers = {
    Query: {
        listAllUsers: async (parent, args, context) => {
            context.di.authValidation.ensureThatUserIsLogged(context);

            context.di.authValidation.ensureThatUserIsAdministrator(context);

            return context.di.model.Users.find({});
        },
    }
}

export default resolvers
