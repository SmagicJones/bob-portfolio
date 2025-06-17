import { products, type Product } from "../data/products";
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
  const product = data as Product | undefined;
  if (!product) {
    return [
      { title: "Bob Holland Product Build" },
      {
        name: "description",
        content: "An exciting product page build",
      },
    ];
  }
  return [
    { title: product.title },
    {
      name: "description",
      content: product.comment,
    },
  ];
};

export default function Product() {
  const product = useLoaderData();

  return (
    <main className="pb-4 h-full">
      <header className="p-4 text-center">
        <Link to="/products" className="flex justify-center items-center p-4">
          <Button>All Products</Button>
        </Link>
        <h1 className="text-2xl">{product.title}</h1>
      </header>
      <section className="m-2">
        <Card>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.intro}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex-justify-center items-center p-4 m-2">
              <img
                src={product.img_url}
                alt={product.img_alt}
                className="rounded"
              />
            </div>
            <p>{product.comment}</p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </main>
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  const slug = await params.slug;
  const product = await products.find((item) => item.slug === slug);
  return product;
}
