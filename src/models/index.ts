import mongoose from "mongoose";

import { UsersSchema, ProjectsSchema } from "./schema";

export default {
  Users: mongoose.model("users", UsersSchema),
  Projects: mongoose.model("projects", ProjectsSchema),
};
