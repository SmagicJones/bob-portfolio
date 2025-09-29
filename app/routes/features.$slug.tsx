import { features, type Feature } from "../data/features";
import { Link, useLoaderData } from "react-router";

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
  const feature = data as Feature | undefined;
  if (!feature) {
    return [
      { title: "Bob Holland Product Build" },
      {
        name: "description",
        content: "An exciting product page build",
      },
    ];
  }
  return [
    { title: feature.title },
    {
      name: "description",
      content: feature.comment,
    },
  ];
};

export default function Feature() {
  const feature = useLoaderData();

  return (
    <main className="pb-4 h-full">
      <header className="p-4 text-center">
        <Link to="/products" className="flex justify-center items-center p-4">
          <Button>All Features</Button>
        </Link>
        <h1 className="text-2xl">{feature.title}</h1>
      </header>
      <section className="m-2">
        <Card>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.intro}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center p-4 m-2">
              <img
                src={feature.img_url}
                alt={feature.img_alt}
                className="rounded"
              />
            </div>
            <p>{feature.comment}</p>
          </CardContent>
          <CardFooter>
            <Link
              to={feature.link1}
              target="_blank"
              className="flex justify-center items-center p-4"
            >
              <Button>View Build</Button>
            </Link>
            <Link
              to="/features"
              target="_blank"
              className="flex justify-center items-center p-4"
            >
              <Button>View other examples</Button>
            </Link>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  const slug = await params.slug;
  const feature = await features.find((item) => item.slug === slug);
  return feature;
}
