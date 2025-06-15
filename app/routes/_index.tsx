import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import bobCoffee from "../images/coffee-bob.jpg";

import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Bob Holland Software Developer" },
  {
    name: "description",
    content: "Bob Holland's Portfolio Site, Software Developer",
  },
];

export default function Home() {
  return (
    <main>
      <section className="grid md:grid-cols-2 gap-4 m-2">
        <Card>
          <CardHeader>
            <CardTitle>Bob Holland</CardTitle>
            <CardDescription>Software Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to my portfolio site - This has been built with React
              Router v7, tailwind, and shadcn. Here is a space where you can see
              some examples of things I have worked on and what I am working on.
            </p>
            <p className="pt-2">
              Here's a list of things that I believe a bring to the table in in
              development team:
            </p>
            <ul>
              <li>Determination</li>
              <li>Creativity</li>
            </ul>
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
