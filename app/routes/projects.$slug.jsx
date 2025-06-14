import { Link } from "react-router";

import { projects } from "../data/projects";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { bobCoffee } from "../images/coffee-bob.jpg";

export default function Project({ loaderData }) {
  const project = loaderData;

  return (
    <main className="m-2 p-2 h-[100%]">
      <header className="p-4 text-center">
        <h1 className="text-2xl">{project.title}</h1>
      </header>
      <section className="m-2">
        <Card>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.short_content}</p>
            <p>{project.long_content}</p>
            <div className="flex flex-row gap-4 mt-2">
              <Link
                to={project.hosted_link}
                target="_blank"
                className="hover:font-bold"
              >
                Hosted Project
              </Link>
              <Link
                to={project.github_link}
                target="_blank"
                className="hover:font-bold"
              >
                Github
              </Link>
            </div>
          </CardContent>
          <CardFooter className="grid grid-cols-1 gap-4 p-4"></CardFooter>
        </Card>
      </section>
    </main>
  );
}

export async function loader({ params }) {
  const slug = await params.slug;
  const project = await projects.find((item) => item.slug === slug);
  return project;
}
