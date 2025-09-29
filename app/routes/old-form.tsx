import { Form, type ActionFunctionArgs, useNavigate } from "react-router";
import { useRef } from "react";
import nodemailer from "nodemailer";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

import { toast } from "sonner";

import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Get in Touch" },
  {
    name: "description",
    content: "Send me a message and I will get straight back to you",
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  if (formRef.current) {
    formRef.current.reset();
  }

  return (
    <main className="flex justify-center mt-2">
      <section className="grid grid-cols-1 gap-4 w-[90%] md:w-[70%] lg:w-[40%]">
        <Card className="">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
            <CardDescription>Get in touch with the form below</CardDescription>
          </CardHeader>
          <CardContent>
            <Form
              id="contact-form"
              method="post"
              ref={formRef}
              onSubmit={() => {
                toast("Thanks for the message!", {
                  description:
                    "I look forward to reading it and getting back to you",
                  action: {
                    label: "home",
                    onClick: () => navigate("/"),
                  },
                });
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="e.g. Joe Bloggs"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="email">email</Label>
                  </div>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="e.g. joe@bloggs.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message">message</label>
                  <Textarea
                    name="message"
                    required
                    placeholder="e.g. I really love your website..."
                  ></Textarea>
                </div>
              </div>
            </Form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" form="contact-form" className="w-full">
              Send
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}




// export async function action({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const formEntry = Object.fromEntries(formData);
//   const name = formEntry.name as string;
//   const email = formEntry.email as string;
//   const message = formEntry.message as string;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     const info = await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: process.env.EMAIL_USER,
//       subject: `Contact Form Submission from ${name}`,
//       text: message,
//       html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
//     });
//     console.log("email sent", info.messageId);
//     return { success: true };
//   } catch (err) {
//     console.error("Failed to send email", err);
//     return { success: false, error: "Failed to send" };
//   }
// }
