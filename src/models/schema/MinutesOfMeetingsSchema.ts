import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * MinutesOfMeeting schema
 * @constructor MinutesOfMeeting model constructor
 * @classdesc MinutesOfMeeting have interesting properties.
 */
const MinutesOfMeetingsSchema = new Schema({
  meeting_date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  attachment: {
    type: String,
    required: false,
  },
  mom_key_issue: [
    {
      description: String,
    },
  ],
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

export { MinutesOfMeetingsSchema };
