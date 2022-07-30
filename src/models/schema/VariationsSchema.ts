import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Variation schema
 * @constructor Variation model constructor
 * @classdesc Variation have interesting properties.
 */
const VariationsSchema = new Schema({
  variation_no: {
    type: String,
  },
  our_ref: {
    type: String,
  },
  date: {
    type: Date,
  },
  attachment: {
    type: String,
  },
  employer_response_ref: {
    type: String,
  },
  emp_date: {
    type: Date,
  },
  description: {
    type: String,
  },
  submitted_cost: {
    type: Number,
  },
  agreed_cost: {
    type: Number,
  },
  status: {
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

export { VariationsSchema };
