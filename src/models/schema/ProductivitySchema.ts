import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Productivity schema
 * @constructor Productivity model constructor
 * @classdesc Productivity have interesting properties.
 */
const ProductivitySchema = new Schema({
  month_year: {
    type: Date,
    required: true,
  },
  commulative_earned_value: {
    type: Number,
    required: false,
  },
  commulative_spent_value: {
    type: Number,
    required: false,
  },
  mth_earned_value: {
    type: Number,
    required: false,
  },
  mth_spent_value: {
    type: Number,
    required: false,
  },
  progress_achieved_commulative: {
    type: Number,
    required: false,
  },
  progress_achieved_monthly: {
    type: Number,
    required: false,
  },
  productivity_ratio: {
    type: Number,
    required: false,
  },
  loss_disruption: {
    type: Number,
    required: false,
  },
  disruption_reason: {
    type: String,
    required: false,
  },
  substantiation: {
    type: String,
    required: false,
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

export { ProductivitySchema };
