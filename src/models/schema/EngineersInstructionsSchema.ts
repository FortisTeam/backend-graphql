import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * EngineersInstruction schema
 * @constructor EngineersInstruction model constructor
 * @classdesc EngineersInstruction have interesting properties.
 */
const EngineersInstructionsSchema = new Schema({
  engineer_instructions_ref: {
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
  correspondence_type: {
    type: String,
  },
  critical_delay: {
    type: String,
  },
  delay_event: {
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

export { EngineersInstructionsSchema };
