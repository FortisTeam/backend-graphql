import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * ShopDrawing schema
 * @constructor ShopDrawing model constructor
 * @classdesc ShopDrawing have interesting properties.
 */
const ShopDrawingsSchema = new Schema({
  shop_drawing_ref: {
    type: String,
  },
  ifc: {
    type: Schema.Types.ObjectId,
    ref: "ifc",
  },
  attachment: {
    type: String,
  },
  submittal_ref: {
    type: String,
  },
  revision: {
    type: Number,
  },
  drawing_title: {
    type: String,
  },
  rfi: {
    type: Schema.Types.ObjectId,
    ref: "rfi",
  },
  variation: {
    type: Schema.Types.ObjectId,
    ref: "variation",
  },
  variation_notification: {
    type: Schema.Types.ObjectId,
    ref: "variation_notification",
  },
  correspondence_outgoing: {
    type: Schema.Types.ObjectId,
    ref: "correspondence_outgoing",
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
  actual_date: {
    type: Date,
  },
  review_period_duration: {
    type: Date,
  },
  actual_return_date: {
    type: Date,
  },
  delay_review: {
    type: String,
  },
  client_return_transmittal: {
    type: String,
  },
  approval_status: {
    type: String,
  },
  status: {
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

export { ShopDrawingsSchema };
