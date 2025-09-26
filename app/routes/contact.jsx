import { Form } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useActionData } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { useEffect, useRef } from "react";

export default function Home() {
  const actionData = useActionData();
  const formRef = useRef();

  useEffect(() => {
    // Reset the form when actionData changes
    if (actionData?.success) {
      formRef.current.reset();
    }
  }, [actionData]);

  return (
    <main className="flex justify-center mt-2">
      <section className="grid grid-cols-1 gap-4 w-[90%] md:w-[70%] lg:w-[40%]">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below to get in touch with us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form method="post" ref={formRef}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="firstname">First Name:</Label>
                  <Input type="text" id="firstname" name="firstname" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastname">Last Name:</Label>
                  <Input type="text" id="lastname" name="lastname" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email:</Label>
                  <Input type="email" id="email" name="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message:</Label>
                  <Textarea name="message" id="message"></Textarea>
                </div>
              </div>

              <Button type="submit" className="mt-2">
                Submit
              </Button>
            </Form>
            {/* Show messages from the action */}
            {actionData?.success && (
              <p className="mt-4 text-green-600">Thanks! Form submitted.</p>
            )}
            {actionData && actionData.success === false && (
              <p className="mt-4 text-red-600">
                Sorry, there was a problem:
                {actionData.error?.message || "Unknown error"}
              </p>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const formEntry = Object.fromEntries(formData);

  const payload = {
    fields: [
      { name: "firstname", value: formEntry.firstname },
      { name: "lastname", value: formEntry.lastname },
      { name: "email", value: formEntry.email },
      { name: "message", value: formEntry.message },
    ],
  };

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/146967651/63003af8-e6ac-4e3b-a054-0bd35856330f`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    // Handle non-2xx responses explicitly
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        status: response.status,
        error: errorData,
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (err) {
    // Network error, unexpected failure, etc.
    return {
      success: false,
      status: 500,
      error: err.message || "Unexpected error",
    };
  }
}
