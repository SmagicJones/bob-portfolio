import { Link, useLoaderData } from "react-router";

import { landingPages, type LandingPage } from "~/data/landingpages";

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
  const landingPage = data as LandingPage | undefined;
  if (!landingPage) {
    return [
      { title: "Bob Holland Landing page build" },
      {
        name: "description",
        content: "a landing page I have built",
      },
    ];
  }

  return [
    { title: landingPage.title },
    { name: "description", content: landingPage.intro },
  ];
};

export default function LandingPage() {
  const landingPage = useLoaderData();
  return (
    <main className="pb-4 h-full">
      <header className="p-4 text-center">
        <Link
          to="/landingpages"
          className="flex justify-center items-center p-4"
        >
          <Button>All Pages</Button>
        </Link>
        <h1 className="text-2xl">{landingPage.title}</h1>
      </header>
      <section className="m-2">
        <Card key={landingPage.id}>
          <CardHeader>
            <CardTitle>{landingPage.title}</CardTitle>
            <CardDescription>{landingPage.intro}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{landingPage.comment}</p>
          </CardContent>
          <CardFooter className="grid grid-cols-1 gap-4 p-4"></CardFooter>
        </Card>
      </section>
    </main>
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  const slug = await params.slug;
  const landingPage = await landingPages.find((page) => page.slug === slug);
  return landingPage;
}
