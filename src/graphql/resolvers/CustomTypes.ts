import { Date, JSON } from "graphql-tools-types";

const resolvers = {
  Date: Date({ name: "Date" }),
  JSON: JSON({ name: "JSON" }),
};

export default resolvers;
