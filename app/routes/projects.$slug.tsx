import { Link, useLoaderData } from "react-router";

import { projects, type Project } from "../data/projects";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";
import type { Route } from "../+types/root";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = ({ data }) => {
  const project = data as Project | undefined;
  if (!project) {
    return [
      { title: "Bob Holland Project" },
      {
        name: "description",
        content: "An exciting project I have worked on",
      },
    ];
  }

  return [
    { title: project.title },
    { name: "description", content: project.short_content },
  ];
};

export default function Project() {
  const project = useLoaderData();
  return (
    <main className="pb-4 h-full">
      <header className="p-4 text-center">
        <Link to="/projects" className="flex justify-center items-center p-4">
          <Button>All Projects</Button>
        </Link>
        <h1 className="text-2xl">{project.title}</h1>
      </header>
      <section className="m-2">
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.short_content}</p>
            <p>{project.long_content}</p>
            <Link
              to={`${project.hosted_link}`}
              target="_blank"
              className="flex justify-center items-center p-4"
            >
              <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                Hosted Project
              </Button>
            </Link>
            <Link
              to={`${project.github_link}`}
              target="_blank"
              className="flex justify-center items-center p-4"
            >
              <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                Github Repository
              </Button>
            </Link>
          </CardContent>
          <CardFooter className="grid grid-cols-1 gap-4 p-4"></CardFooter>
        </Card>
      </section>
    </main>
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  const slug = await params.slug;
  const project = await projects.find((item) => item.slug === slug);
  return project;
}
