import mongoose from "mongoose";

import {
  UsersSchema,
  ProjectsSchema,
  ContractDocumentsSchema,
  ProgressSchema,
  ClaimBuildersSchema,
  MinutesOfMeetingsSchema,
  ProductivitySchema,
} from "./schema";

export default {
  Users: mongoose.model("users", UsersSchema, "users"),
  Projects: mongoose.model("projects", ProjectsSchema, "projects"),
  ContractDocuments: mongoose.model(
    "contractDocuments",
    ContractDocumentsSchema,
    "contractDocuments"
  ),
  Progress: mongoose.model("progress", ProgressSchema, "progress"),
  ClaimBuilder: mongoose.model(
    "claimBuilder",
    ClaimBuildersSchema,
    "claimBuilder"
  ),
  MinutesOfMeeting: mongoose.model(
    "minutesOfMeeting",
    MinutesOfMeetingsSchema,
    "minutesOfMeeting"
  ),
  Productivity: mongoose.model(
    "productivity",
    ProductivitySchema,
    "productivity"
  ),
};
