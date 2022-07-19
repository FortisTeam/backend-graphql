import { UserInputError } from "apollo-server-express";
import bcrypt from "bcrypt";

import { isValidEmail, isStrongPassword } from "../../helpers/validations";
import { QueryResolvers, MutationResolvers } from "../../typeDefs/resolvers";

interface Resolvers {
  Mutation: MutationResolvers;
}

const resolvers: Resolvers = {
  Mutation: {
    registerUser: async (parent, { email, password }, context) => {
      if (!email || !password) {
        throw new UserInputError("Data provided is not valid");
      }

      if (!isValidEmail(email)) {
        throw new UserInputError("The email is not valid");
      }

      if (!isStrongPassword(password)) {
        throw new UserInputError("The password is not secure enough");
      }

      const registeredUsersCount =
        await context.db.Users.find().estimatedDocumentCount();

      context.auth.ensureLimitOfUsersIsNotReached(registeredUsersCount);

      const isAnEmailAlreadyRegistered = await context.db.Users.findOne({
        email,
      });

      if (isAnEmailAlreadyRegistered) {
        throw new UserInputError("Data provided is not valid");
      }

      await new context.db.Users({ email, password }).save();

      const user = await context.db.Users.findOne({ email });

      return {
        token: context.jwt.createAuthToken(
          user.email,
          user.isAdmin,
          user.isActive,
          user.uuid
        ),
      };
    },
    authUser: async (parent, { email, password }, context) => {
      if (!email || !password) {
        throw new UserInputError("Invalid credentials");
      }

      const user = await context.db.Users.findOne({ email, isActive: true });

      if (!user) {
        throw new UserInputError("User not found or login not allowed");
      }

      const isCorrectPassword = await bcrypt.compare(password, user.password);

      if (!isCorrectPassword) {
        throw new UserInputError("Invalid credentials");
      }

      await context.db.Users.findOneAndUpdate(
        { email },
        { lastLogin: new Date().toISOString() },
        { new: true }
      );

      return {
        token: context.jwt.createAuthToken(
          user.email,
          user.isAdmin,
          user.isActive,
          user.uuid
        ),
      };
    },
    deleteMyUserAccount: async (parent, args, context) => {
      context.auth.ensureThatUserIsLogged(context);

      const user = await context.auth.getUser(context);

      return context.db.Users.deleteOne({ uuid: user.uuid });
    },
  },
};

export default resolvers;
