import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { products, type Product } from "../data/products";
import { Link } from "react-router";

import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Product page builds" },
  {
    name: "description",
    content: "Product pages I have built",
  },
];

export default function Products() {
  return (
    <section className="pb-4 h-full">
      <header className="p-4 text-center">
        <h1 className="text-2xl">Product Examples</h1>
      </header>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 m-2">
        {/* iterate here */}

        {products.map((product: Product) => (
          <Card>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              {/* <CardDescription>{product.intro}</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>{product.comment}</p>
            </CardContent>
            <CardFooter className="grid grid-cols-1 gap-4">
              <Link
                to={product.slug}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  Detail
                </Button>
              </Link>
              <Link
                to={product.link}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  Build
                </Button>
              </Link>
              <Link
                to={product.comparison_link}
                target="_blank"
                className="flex justify-center items-center"
              >
                <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                  Manufacturer Page
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
