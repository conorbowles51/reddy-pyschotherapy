"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

  const senderEmail = formData.get("email");
  const formMessage = formData.get("message");
  const phone = formData.get("phone");
  const name = formData.get("name");

  const message = formMessage + "\n\n" + 
                  "Name: " + name + "\n" +
                  "Email: " + senderEmail + "\n" +
                  "Phone: " + phone + "\n";


  if(!formMessage || typeof formMessage !== "string"){
    return {
      error: "Invalid message"
    }
  }

  if(!senderEmail || typeof senderEmail !== "string"){
    return {
      error: "Invalid email address"
    }
  }

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'conorbowles2000@gmail.com',
    subject: 'Message from www.reddypyschotherapy.ie',
    reply_to: senderEmail as string,
    text: message as string
  });
}