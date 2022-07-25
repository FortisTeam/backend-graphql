import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Projects schema
 * @constructor Users model constructor
 * @classdesc User have interesting properties.
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
  current_completed_percentage: {
    type: Number,
    required: true,
  },
  forecast_time_completion: {
    type: Date,
    required: true,
  },
  eot_revised_date: {
    type: Date,
    required: true,
  },
});

export { ProjectsSchema };
