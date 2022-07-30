import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * VariationNotification schema
 * @constructor VariationNotification model constructor
 * @classdesc VariationNotification have interesting properties.
 */
const VariationNotificationsSchema = new Schema({
  notification_ref: {
    type: String,
  },
  variation: {
    type: Schema.Types.ObjectId,
    ref: "variation",
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
  proposed_cost: {
    type: Number,
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

export { VariationNotificationsSchema };
