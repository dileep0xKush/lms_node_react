import nodemailer, { Transporter } from 'nodemailer';

export const mailer: Transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.ETHEREAL_USER as string,
    pass: process.env.ETHEREAL_PASS as string,
  },
});
