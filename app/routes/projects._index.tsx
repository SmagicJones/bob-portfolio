import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { projects, type Project } from "../data/projects";
import { Link } from "react-router";

export default function Projects() {
  return (
    <main className="m-2 p-2 h-[100%]">
      <header className="p-4 text-center">
        <h1 className="text-2xl">Projects</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-4 m-2">
        {/* iterate here */}

        {projects.map((project: Project) => (
          <Card>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.short_content}</p>
            </CardContent>
            <CardFooter className="grid grid-cols-1 gap-4 p-4">
              <Link
                to={project.slug}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  More detail
                </Button>
              </Link>
              <Link
                to={`${project.hosted_link}`}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  Hosted Project
                </Button>
              </Link>
              <Link
                to={`${project.github_link}`}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  Github Repository
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
