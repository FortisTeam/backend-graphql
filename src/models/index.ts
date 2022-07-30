import mongoose from "mongoose";

import {
  UsersSchema,
  ProjectsSchema,
  ContractDocumentsSchema,
  ProgressSchema,
  ClaimBuildersSchema,
  MinutesOfMeetingsSchema,
  ProductivitySchema,
  DelayNotificationsSchema,
  CorrespondenceIncomingsSchema,
  CorrespondenceOutgoingsSchema,
  VariationsSchema,
  VariationNotificationsSchema,
  ShopDrawingsSchema,
  RFIsSchema,
  MaterialInspectionsSchema,
  MaterialSubmittalsSchema,
  SiteAccessSchema,
  IFCDrawingsSchema,
  EngineersInstructionsSchema,
  WIRsSchema,
} from "./schema";

export default {
  Users: mongoose.model("users", UsersSchema, "users"),
  Projects: mongoose.model("projects", ProjectsSchema, "projects"),
  ContractDocuments: mongoose.model(
    "contract_document",
    ContractDocumentsSchema,
    "contract_document"
  ),
  Progress: mongoose.model("progress", ProgressSchema, "progress"),
  ClaimBuilder: mongoose.model(
    "claim_builder",
    ClaimBuildersSchema,
    "claim_builder"
  ),
  MinutesOfMeeting: mongoose.model(
    "minutes_of_meeting",
    MinutesOfMeetingsSchema,
    "minutes_of_meeting"
  ),
  Productivity: mongoose.model(
    "productivity",
    ProductivitySchema,
    "productivity"
  ),
  DelayNotification: mongoose.model(
    "delay_notification",
    DelayNotificationsSchema,
    "delay_notification"
  ),
  CorrespondenceIncoming: mongoose.model(
    "correspondence_incoming",
    CorrespondenceIncomingsSchema,
    "correspondence_incoming"
  ),
  CorrespondenceOutgoing: mongoose.model(
    "correspondence_outgoing",
    CorrespondenceOutgoingsSchema,
    "correspondence_outgoing"
  ),
  Variation: mongoose.model("variation", VariationsSchema, "variation"),
  VariationNotification: mongoose.model(
    "variation_notification",
    VariationNotificationsSchema,
    "variation_notification"
  ),
  ShopDrawing: mongoose.model(
    "shop_drawing",
    ShopDrawingsSchema,
    "shop_drawing"
  ),
  RFI: mongoose.model("rfi", RFIsSchema, "rfi"),
  MaterialInspection: mongoose.model(
    "material_inspection",
    MaterialInspectionsSchema,
    "material_inspection"
  ),
  MaterialSubmittal: mongoose.model(
    "material_submittal",
    MaterialSubmittalsSchema,
    "material_submittal"
  ),
  SiteAccess: mongoose.model("site_access", SiteAccessSchema, "site_access"),
  IFCDrawing: mongoose.model("ifc", IFCDrawingsSchema, "ifc"),
  EngineerInstruction: mongoose.model(
    "engineer_instruction",
    EngineersInstructionsSchema,
    "engineer_instruction"
  ),
  WIR: mongoose.model("wir", WIRsSchema, "wir"),
};
