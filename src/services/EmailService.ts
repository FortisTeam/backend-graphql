import SendGridMailer from "@sendgrid/mail";
import { environmentVariablesConfig } from "../config/appConfig";
import { logger } from "../helpers/logger";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
  templateID?: string | number;
}

export default class EmailService {
  protected SET_SENDGRID_API() {
    SendGridMailer.setApiKey(environmentVariablesConfig.sendGridApi);
  }

  async sendEmail(
    to: string,
    subject: string,
    text: string,
    html?: string,
    templateID?: string | number
  ) {
    this.SET_SENDGRID_API();
    const mailObject = {
      from: "info@fortismena.com",
      to,
      subject,
      text,
      ...(html ? { html } : null),
    };
    try {
      await SendGridMailer.send(mailObject);
    } catch (error: any) {
      logger.error("Error! ");
      logger.error(error);
      if (error.response) {
        logger.error(error.response.body);
      }
    }
  }
}
