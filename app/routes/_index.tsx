import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import bobCoffee from "../images/coffee-bob.jpg";

import { Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Bob Holland Software Developer" },
  {
    name: "description",
    content: "Bob Holland's Portfolio Site, Software Developer",
  },
];

export default function Home() {
  return (
    <main className="mb-4">
      <section className="grid md:grid-cols-2 gap-4 m-2">
        <Card>
          <CardHeader>
            <CardTitle>Bob Holland</CardTitle>
            <CardDescription>Software Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to my portfolio site - This has been built with React
              Router v7, typescript, tailwind, and shadcn.
            </p>
            <p className="pt-2">
              Here is a space where you can see some examples of things I have
              worked on and what I am working on.
            </p>

            <p className="pt-2">
              I'm a musician and Qualified Teacher turned coder and have now
              been working in the industry for nearly two years.
            </p>
            <p className="pt-2 pb-2">
              I enjoy the challenge and enjoy the new learning everyday.
            </p>
            <Link to="/contact" className="pt-4">
              <Button>Contact Me</Button>
            </Link>
          </CardContent>
          {/* <CardFooter>
            <p>Now and into the future</p>
          </CardFooter> */}
        </Card>
        <Card>
          <CardContent>
            <img className="rounded" src={bobCoffee} alt="I like coffee too!" />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
