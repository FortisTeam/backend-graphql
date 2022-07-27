import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * ContractDocuments schema
 * @constructor ContractDocuments model constructor
 * @classdesc ContractDocuments have interesting properties.
 */
const ContractDocumentsSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  employer: {
    type: String,
    required: true,
  },
  client: {
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

export { ContractDocumentsSchema };
