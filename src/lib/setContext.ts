import { validateAuthToken, createAuthToken } from "./jwt";
import { environmentVariablesConfig } from "../config/appConfig";
import { authValidations } from "./authValidations";
import { ENVIRONMENT } from "../config/environment";
import { logger } from "../helpers/logger";
import models from "../models";

/**
 * Context function from Apollo Server
 */
export const setContext = async ({ req }: any) => {
  const context: any = {
    db: {
      ...models,
    },
    auth: {
      ...authValidations,
    },
    jwt: {
      createAuthToken: createAuthToken,
    },
  };

  let token = req.headers["authorization"];

  if (token && typeof token === "string") {
    try {
      const authenticationScheme = "Bearer ";
      if (token.startsWith(authenticationScheme)) {
        token = token.slice(authenticationScheme.length, token.length);
      }
      const user = await validateAuthToken(token);
      context.user = user;
    } catch (error: any) {
      if (environmentVariablesConfig.enviroment !== ENVIRONMENT.PRODUCTION) {
        logger.debug(error.message);
      }
    }
  }

  return context;
};
