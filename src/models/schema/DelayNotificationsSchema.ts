import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * DelayNotification schema
 * @constructor DelayNotification model constructor
 * @classdesc DelayNotification have interesting properties.
 */
const DelayNotificationsSchema = new Schema({
  ref: {
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
  area: {
    type: String,
  },
  cause: {
    type: String,
  },
  effect: {
    type: String,
  },
  reason: {
    type: String,
  },
  estimated_impact_days: {
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

export { DelayNotificationsSchema };
