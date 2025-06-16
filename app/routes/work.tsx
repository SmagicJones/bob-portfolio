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
import { landingPages, type LandingPage } from "../data/landingpages";
import { Link } from "react-router";

export default function Work() {
  return (
    <main>
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
                <CardDescription>{product.intro}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{product.comment}</p>
                <div className="flex-justify-center items-center p-4 m-2">
                  <img
                    src={product.img_url}
                    alt={product.img_alt}
                    className="rounded"
                  />
                </div>
              </CardContent>
              <CardFooter className="grid grid-cols-1 gap-4">
                <Link
                  to={product.link}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                    View My Build
                  </Button>
                </Link>
                <Link
                  to={product.comparison_link}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <Button className="w-[100%] md:w-[70%] lg:w-[50%]">
                    View Manufacturer Page
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
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
    </main>
  );
}
