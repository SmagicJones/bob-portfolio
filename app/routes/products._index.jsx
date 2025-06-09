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
    <section className="m-2 p-2">
      <header className="p-4 text-center">
        <h1 className="text-2xl text-slate-300">Product Examples</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-4 m-2 min-w-sm">
        {/* iterate here */}

        {products.map((product) => (
          <Card className="">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.intro}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.comment}</p>
              <img src={product.img_url} alt={product.img_alt} />
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
