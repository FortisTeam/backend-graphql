import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * MaterialSubmittal schema
 * @constructor MaterialSubmittal model constructor
 * @classdesc MaterialSubmittal have interesting properties.
 */
const MaterialSubmittalsSchema = new Schema({
  material_submittal_ref: {
    type: String,
  },
  shop_drawing: {
    type: Schema.Types.ObjectId,
    ref: "shop_drawing",
  },
  rfi: {
    type: Schema.Types.ObjectId,
    ref: "rfi",
  },
  attachment: {
    type: String,
  },
  revision: {
    type: Number,
  },
  date_raised: {
    type: Date,
  },
  response_date: {
    type: Date,
  },
  review_period: {
    type: Number,
  },
  description: {
    type: String,
  },
  engineer_response: {
    type: String,
  },
  required_response_delay: {
    type: Date,
  },
  delay_days: {
    type: Number,
  },
  status: {
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

export { MaterialSubmittalsSchema };
