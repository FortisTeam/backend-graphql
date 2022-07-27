import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Progress schema
 * @constructor Progress model constructor
 * @classdesc Progress have interesting properties.
 */
const ProgressSchema = new Schema({
  data_date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  project_end_date: {
    type: Date,
  },
  date_after_impact: {
    type: Date,
    required: false,
  },
  eot: {
    type: Number,
  },
  attachment: {
    type: String,
  },
  critical_delay: [
    {
      description: String,
    },
  ],
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

export { ProgressSchema };
