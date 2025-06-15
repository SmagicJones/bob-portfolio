import { useState, useRef } from "react";
import { NavLink } from "react-router";

import { MenuIcon, X, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";

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

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const checkboxRef = useRef();

  function handleMenu() {
    setMenuOpen(false);
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  }
  return (
    <main>
      <div className="mobile w-[100%] flex justify-between">
        <NavLink
          to="/"
          className="flex justify-center items-center p-4"
          onClick={handleMenu}
        >
          <h1 className="text-md hover:text-slate-800">Bob Holland</h1>
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
                {/* <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>Get to where you want to be</DrawerDescription> */}
                <ul className="">
                  <li>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>About</AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <li>
                              <NavLink to="/contact">
                                <DrawerClose>Contact</DrawerClose>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="https://github.com/smagicjones"
                                target="_blank"
                              >
                                <DrawerClose>Connect on Github</DrawerClose>
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
                        <AccordionTrigger>Work</AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <li>
                              <NavLink to="/work">
                                <DrawerClose>All Examples</DrawerClose>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/products">
                                <DrawerClose>Products</DrawerClose>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/landingpages">
                                <DrawerClose>Landing pages</DrawerClose>
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
                        <AccordionTrigger>Projects</AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <li>
                              <NavLink to="/projects">
                                <DrawerClose>All Projects</DrawerClose>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/projects/mongo-remix-movies">
                                <DrawerClose>MongoDB & Remix</DrawerClose>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/products/darwen-masters-swimming">
                                <DrawerClose>Charity Website Build</DrawerClose>
                              </NavLink>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                </ul>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </main>
  );
}
