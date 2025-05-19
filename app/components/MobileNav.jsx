import { useState, useRef } from "react";
import { NavLink } from "react-router";

import { MenuIcon, X, ChevronRight } from "lucide-react";

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
    <main class="sort-out">
      <div className="mobile w-[100%] flex justify-between">
        <NavLink to="/" className="logo" onClick={handleMenu}>
          {/* <img
            width="83.5"
            height="48"
            src="https://www.teamleyland.com/wp-content/themes/ilab/img/team-leyland-logo.png"
          /> */}
          {/* <div className="flex justify-center items-center">
            <h1 className="text-2xl">Bob Holland</h1>
          </div> */}
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
                <ul className="link-list">
                  <li>
                    <NavLink to="/">
                      <DrawerClose>Home</DrawerClose>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      <DrawerClose>About</DrawerClose>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">
                      <DrawerClose>Products</DrawerClose>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects">
                      <DrawerClose>Projects</DrawerClose>
                    </NavLink>
                  </li>
                  <li>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Links</AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            <li>
                              <NavLink to="/pages">
                                <DrawerClose>Pages</DrawerClose>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/">
                                <DrawerClose>Home</DrawerClose>
                              </NavLink>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                </ul>
              </DrawerHeader>

              <DrawerFooter>{/* <Button>Submit</Button> */}</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <ul className={`mobile-options ${menuOpen ? "open" : "close"}`}>
        <li>
          <NavLink to="/pages" onClick={handleMenu}>
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" onClick={handleMenu}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleMenu}>
            Contact
          </NavLink>
        </li>
        <li className="details-wrapper">
          <NavLink to="/vehicles" onClick={handleMenu}>
            Vehicles
          </NavLink>
        </li>
        <li>
          <NavLink to="/addpost" onClick={handleMenu}>
            Make a Post
          </NavLink>
        </li>
      </ul>
    </main>
  );
}
