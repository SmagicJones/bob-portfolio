import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { features, type Feature } from "~/data/features";
import { Link } from "react-router";

import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Features" },
  {
    name: "description",
    content: "Features I have built",
  },
];

export default function Features() {
  return (
    <section className="pb-4 h-full">
      <header className="p-4 text-center">
        <h1 className="text-2xl">Feature Examples</h1>
      </header>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 m-2">
        {/* iterate here */}

        {features.map((feature: Feature) => (
          <Card>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              {/* <CardDescription>{product.intro}</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>{feature.intro}</p>
            </CardContent>
            <CardFooter className="grid grid-cols-1 gap-4">
              <Link
                to={feature.slug}
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  Detail
                </Button>
              </Link>
              <Link
                to={feature.link1}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  on the Finance page
                </Button>
              </Link>
              <Link
                to={feature.link2}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  On the product page
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
