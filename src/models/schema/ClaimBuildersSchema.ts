import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * ClaimBuilders schema
 * @constructor ClaimBuilders model constructor
 * @classdesc ClaimBuilders have interesting properties.
 */
const ClaimBuildersSchema = new Schema({
  description: {
    type: String,
    required: true,
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

export { ClaimBuildersSchema };
