import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * IFCDrawing schema
 * @constructor IFCDrawing model constructor
 * @classdesc IFCDrawing have interesting properties.
 */
const IFCDrawingsSchema = new Schema({
  ref: {
    type: String,
  },
  attachment: {
    type: String,
  },
  revision: {
    type: Number,
  },
  description: {
    type: String,
  },
  ifc_drawing_ref: {
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
  drawing_date: {
    type: Date,
  },
  orignal_tender: {
    type: String,
  },
  transmittal: {
    type: String,
  },
  variation: {
    type: String,
  },
  variation_letter_reference: {
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

export { IFCDrawingsSchema };
