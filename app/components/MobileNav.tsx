import { NavLink } from "react-router";

import { MenuIcon, X } from "lucide-react";

import DarkModeToggle from "./DarkModeToggle";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { projects, type Project } from "~/data/projects";
import { products, type Product } from "~/data/products";
import { landingPages, type LandingPage } from "~/data/landingpages";

export default function MobileNav() {
  return (
    <main>
      <div className="mobile w-[100%] flex justify-between">
        <NavLink to="/" className="flex justify-center items-center p-4">
          <p className="text-md font-bold hover:text-purple-600">Bob Holland</p>
        </NavLink>
        <div className="p-4">
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon className="z-10" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerClose className="flex justify-end">
                  <X />
                </DrawerClose>
                <ul className="">
                  <li>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="cursor-pointer hover:text-slate-400">
                          About
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <li>
                              <NavLink
                                to="/contact"
                                className="cursor-pointer hover:text-slate-400"
                              >
                                <DrawerClose className="pb-2 cursor-pointer">
                                  Contact
                                </DrawerClose>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="https://github.com/smagicjones"
                                target="_blank"
                                className="cursor-pointer hover:text-slate-400"
                              >
                                <DrawerClose className="cursor-pointer">
                                  Connect on Github
                                </DrawerClose>
                              </NavLink>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="cursor-pointer hover:text-slate-400">
                          <NavLink to="/products">Products</NavLink>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            {products.map((product: Product) => (
                              <li>
                                <NavLink
                                  to={`/products/${product.slug}`}
                                  className="cursor-pointer hover:text-slate-400"
                                >
                                  <DrawerClose className="cursor-pointer">
                                    {product.title}
                                  </DrawerClose>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="cursor-pointer hover:text-slate-400">
                          <NavLink to="/pages">Pages</NavLink>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            {landingPages.map((landingPage: LandingPage) => (
                              <li>
                                <NavLink
                                  to={`/landingpages/${landingPage.slug}`}
                                  className="cursor-pointer hover:text-slate-400"
                                >
                                  <DrawerClose className="cursor-pointer">
                                    {landingPage.title}
                                  </DrawerClose>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <NavLink to="/projects">Projects</NavLink>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            {projects.map((project: Project) => (
                              <li key={project.id}>
                                <NavLink
                                  to={`/projects/${project.slug}`}
                                  className="cursor-pointer hover:text-slate-400"
                                >
                                  <DrawerClose className="cursor-pointer">
                                    {project.title}
                                  </DrawerClose>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                </ul>
              </DrawerHeader>
              <div className="p-4">
                <DarkModeToggle />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </main>
  );
}
