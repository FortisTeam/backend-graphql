import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * WIR schema
 * @constructor WIR model constructor
 * @classdesc WIR have interesting properties.
 */
const WIRsSchema = new Schema({
  wir_ref: {
    type: String,
  },
  attachment: {
    type: String,
  },
  description: {
    type: String,
  },
  revision: {
    type: Number,
  },
  shop_drawing: {
    type: Schema.Types.ObjectId,
    ref: "shop_drawing",
  },
  rfi: {
    type: Schema.Types.ObjectId,
    ref: "rfi",
  },
  material_inspection: {
    type: Schema.Types.ObjectId,
    ref: "material_inspection",
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
  client_transmittal_no: {
    type: String,
  },
  actual_submission_date: {
    type: Date,
  },
  contract_due_date: {
    type: Date,
  },
  inspection_date: {
    type: Date,
  },
  return_date: {
    type: Date,
  },
  review_period_duration: {
    type: Number,
  },
  overdue: {
    type: Number,
  },
  approval_status: {
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

export { WIRsSchema };
