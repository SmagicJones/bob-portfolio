import { products } from "../data/products";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

export default function Product({ loaderData }) {
  const product = loaderData;

  return (
    <main className="m-2 p-2">
      <header className="p-4 text-center">
        <h1 className="text-2xl">{product.title}</h1>
      </header>
      <section className="m-2">
        <Card>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.intro}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{product.comment}</p>
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

  const product = await products.find((item) => item.slug === slug);
  console.log(product);
  return product;
}
