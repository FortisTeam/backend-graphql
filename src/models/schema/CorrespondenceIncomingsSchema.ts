import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * CorrespondenceIncoming schema
 * @constructor CorrespondenceIncoming model constructor
 * @classdesc CorrespondenceIncoming have interesting properties.
 */
const CorrespondenceIncomingsSchema = new Schema({
  client_letter_ref: {
    type: String,
  },
  date: {
    type: Date,
  },
  attachment: {
    type: String,
  },
  site_access: {
    type: Schema.Types.ObjectId,
    ref: "site_access",
  },
  variation_notification: {
    type: Schema.Types.ObjectId,
    ref: "variation_notification",
  },
  ifc: {
    type: Schema.Types.ObjectId,
    ref: "ifc",
  },
  shop_drawing: {
    type: Schema.Types.ObjectId,
    ref: "shop_drawing",
  },
  rfi: {
    type: Schema.Types.ObjectId,
    ref: "rfi",
  },
  material_submittal: {
    type: Schema.Types.ObjectId,
    ref: "material_submittal",
  },
  engineer_instruction: {
    type: Schema.Types.ObjectId,
    ref: "engineer_instruction",
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

export { CorrespondenceIncomingsSchema };
