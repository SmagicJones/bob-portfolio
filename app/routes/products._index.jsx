import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";

import { products } from "../data/products";
import { Link } from "react-router";

export default function Products() {
  return (
    <section className="m-2 p-2 h-screen">
      <header className="p-4 text-center">
        <h1 className="text-2xl">Product Examples</h1>
      </header>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4 m-2">
        {/* iterate here */}

        {products.map((product) => (
          <Card className="w">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.intro}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.comment}</p>
              {/* <div className="flex-justify-center items-center p-4 m-2">
                <img
                  src={product.img_url}
                  alt={product.img_alt}
                  className="rounded"
                />
              </div> */}
            </CardContent>
            <CardFooter>
              {/* <Link to={`/product/${product.slug}`}>
                <Button>Find Out More</Button>
              </Link> */}

              <Link to={product.link} target="_blank" className="pr-2">
                <Button>View My Build</Button>
              </Link>
              <Link
                to={product.comparison_link}
                target="_blank"
                className="pl-2"
              >
                <Button>View Manufacturer Page</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
