// import { projects } from "../data/projects";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

export default function About({ loaderData }) {
  const project = loaderData;

  return (
    <main>
      <header className="p-4 text-center">
        <h1 className="text-2xl text-slate-300"></h1>
      </header>
      <section className="m-2">
        <div className="grid md:grid-cols-2 p-4">
          <Card>
            <CardHeader>
              <CardTitle>Hi I'm Bob</CardTitle>
              <CardDescription>
                I want to grow and develop as a developer and work on exciting
                projects!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I want to connect with you and build awesome UI and incredible
                apps
              </p>
            </CardContent>
            <CardFooter>
              {/* <Link to={`/projects/${project.slug}`}>
            <Button>Learn More</Button>
          </Link> */}
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

// export async function loader({ params }) {
//   const slug = await params.slug;

//   const project = await projects.find((item) => item.slug === slug);
//   console.log(project);
//   return project;
// }
