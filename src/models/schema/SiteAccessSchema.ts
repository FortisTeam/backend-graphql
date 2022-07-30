import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * SiteAccess schema
 * @constructor SiteAccess model constructor
 * @classdesc SiteAccess have interesting properties.
 */
const SiteAccessSchema = new Schema({
  site_access_ref: {
    type: String,
  },
  date: {
    type: Date,
  },
  attachment: {
    type: String,
  },
  description: {
    type: String,
  },
  discipline: {
    type: String,
  },
  location: {
    type: String,
  },
  level: {
    type: String,
  },
  area: {
    type: String,
  },
  cause: {
    type: String,
  },
  effect: {
    type: String,
  },
  reason: {
    type: String,
  },
  response_required: {
    type: String,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "projects",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export { SiteAccessSchema };
