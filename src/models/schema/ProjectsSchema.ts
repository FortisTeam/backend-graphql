import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Projects schema
 * @constructor Projects model constructor
 * @classdesc Projects have interesting properties.
 */
const ProjectsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  start_date: {
    type: Date,
    required: true,
  },
  completion_date: {
    type: Date,
    required: true,
  },
  forecast_time_completion: {
    type: Date,
    required: true,
  },
  forecast_overrun: {
    type: Number,
    required: true,
  },
  current_completed: {
    type: Number,
    required: true,
  },
  planned_completed: {
    type: Number,
    required: true,
  },
  variance: {
    type: Number,
    required: true,
  },
  eot_revised_date: {
    type: Date,
    required: true,
  },
  eot_end_date: {
    type: Date,
    required: true,
  },
  delay_exposure_revised_date: {
    type: Date,
    required: true,
  },
  delay_exposure_unapproved_date: {
    type: Date,
    required: true,
  },
  project_access: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export { ProjectsSchema };
