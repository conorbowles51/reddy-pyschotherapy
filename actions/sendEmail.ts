"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log(formData.get("name"));

  const message = formData.get("message")?.toString();

  if(message){
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jliudoyle@gmail.com',
      subject: 'Message from www.reddypyschotherapy.ie',
      text: message
    });
  }
}