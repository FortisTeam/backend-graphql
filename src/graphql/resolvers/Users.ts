import { QueryResolvers, MutationResolvers } from "../../typeDefs/resolvers";

interface Resolvers {
  Query: QueryResolvers;
}

const resolvers: Resolvers = {
  Query: {
    listAllUsers: async (parent, args, context) => {
      context.auth.ensureThatUserIsLogged(context);

      context.auth.ensureThatUserIsAdministrator(context);

      return context.db.Users.find({});
    },
  },
};

export default resolvers;
