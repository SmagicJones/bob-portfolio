import { Form, type ActionFunctionArgs } from "react-router";
import { useRef } from "react";
import nodemailer from "nodemailer";

import { Button } from "~/components/ui/button";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  if (formRef.current) {
    formRef.current.reset();
  }

  return (
    <main>
      <h1 className="text-center text-2xl p-4">Contact Me</h1>
      <div className="flex items-center justify-center">
        <Form
          method="post"
          ref={formRef}
          className="grid md:grid-cols2 gap-4 w-[300px] p-4 bg-slate-300 rounded text-slate-900"
        >
          <input type="text" name="name" required placeholder="Your name" />
          <input type="email" name="email" required placeholder="Your Email" />
          <textarea
            name="message"
            required
            placeholder="Your message"
          ></textarea>
          <Button>Send</Button>
        </Form>
      </div>
    </main>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const formEntry = Object.fromEntries(formData);
  const name = formEntry.name as string;
  const email = formEntry.email as string;
  const message = formEntry.message as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });
    console.log("email sent", info.messageId);
    return { success: true };
  } catch (err) {
    console.error("Failed to send email", err);
    return { success: false, error: "Failed to send" };
  }
}
