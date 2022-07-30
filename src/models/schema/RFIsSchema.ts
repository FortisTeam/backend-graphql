import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * RFI schema
 * @constructor RFI model constructor
 * @classdesc RFI have interesting properties.
 */
const RFIsSchema = new Schema({
  rfi_ref: {
    type: String,
  },
  ifc: {
    type: Schema.Types.ObjectId,
    ref: "ifc",
  },
  shop_drawing: {
    type: Schema.Types.ObjectId,
    ref: "shop_drawing",
  },
  material_submittal: {
    type: Schema.Types.ObjectId,
    ref: "material_submittal",
  },
  material_inspection: {
    type: Schema.Types.ObjectId,
    ref: "material_inspection",
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

export { RFIsSchema };
