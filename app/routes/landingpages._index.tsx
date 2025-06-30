import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { landingPages, type LandingPage } from "../data/landingpages";
import { Link } from "react-router";

import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Landing page builds" },
  {
    name: "description",
    content: "Landing pages I have built",
  },
];

export default function LandingPages() {
  return (
    <section className="pb-4 h-full">
      <header className="p-4 text-center">
        <h1 className="text-2xl">Landing Pages</h1>
      </header>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 m-2">
        {/* iterate here */}

        {landingPages.map((page: LandingPage) => (
          <Card>
            <CardHeader>
              <CardTitle>{page.title}</CardTitle>
              <CardDescription>{page.intro}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{page.comment}</p>
              <div className="flex-justify-center items-center p-4 m-2">
                <img
                  src={page.img_url}
                  alt={page.img_alt}
                  className="rounded"
                />
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-1 gap-4">
              <Link
                to={page.link}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  View My Build
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
