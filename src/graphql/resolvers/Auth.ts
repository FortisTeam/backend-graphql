import { UserInputError } from "apollo-server-express";
import bcrypt from "bcrypt";

import { isValidEmail, isStrongPassword } from "../../helpers/validations";
import { QueryResolvers, MutationResolvers } from "../../typeDefs/resolvers";

interface Resolvers {
  Mutation: MutationResolvers;
  Query: QueryResolvers;
}

const resolvers: Resolvers = {
  Mutation: {
    registerUser: async (
      parent,
      { name, email, password, isAdmin },
      context
    ) => {
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

      await new context.db.Users({ name, email, password, isAdmin }).save();

      const user = await context.db.Users.findOne({ email });

      return {
        token: context.jwt.createAuthToken(
          user.email,
          user.isAdmin,
          user.isActive,
          user._id
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
          user._id
        ),
      };
    },
    deleteMyUserAccount: async (parent, args, context) => {
      context.auth.ensureThatUserIsLogged(context);

      const user = await context.auth.getUser(context);

      return context.db.Users.deleteOne({ _id: user._id });
    },
  },
  Query: {
    currentUser: async (parent, args, context) => {
      context.auth.ensureThatUserIsLogged(context);

      const user = await context.auth.getUser(context);

      return user;
    },
  },
};

export default resolvers;
