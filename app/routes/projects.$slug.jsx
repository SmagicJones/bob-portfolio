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
            <p>{project.long_content}</p>
          </CardContent>
          <CardFooter>
            {/* <Link to={`/projects/${project.slug}`}>
            <Button>Learn More</Button>
          </Link> */}
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

export async function loader({ params }) {
  const slug = await params.slug;

  const project = await projects.find((item) => item.slug === slug);
  console.log(project);
  return project;
}
