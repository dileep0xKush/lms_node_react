import { mailer } from "./mailer";
import nodemailer from "nodemailer";
import { resetPasswordTemplate } from "./templates/reset-password.template";

class MailService {
  async sendPasswordResetEmail(email: string, resetUrl: string) {
    const info = await mailer.sendMail({
      from: `"LMS Auth" <no-reply@example.com>`,
      to: email,
      subject: "Reset your password",
      html: resetPasswordTemplate(resetUrl), // 👈 uses template
    });

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
    return info;
  }
}

export const mailService = new MailService();
