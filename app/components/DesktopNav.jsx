import { NavLink } from "react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

export default function DesktopNav() {
  return (
    <div className="desk w-[100vw] flex justify-center items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavLink to="/about">About</NavLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li>
                  <NavLink
                    to="/contact"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Contact
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Fill in my lovely form and I will get straight back to you
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/smagicjones"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Connect on Github
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Lets follow each other and build great things!
                    </p>
                  </NavLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavLink to="/work">Work</NavLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li>
                  <NavLink
                    to="/products"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Products
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      See some examples of product pages I've built
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/landingpages"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Landing pages
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Some landing pages built by me
                    </p>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/projects"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Wider Changes
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      More Global site changes
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/music"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Music and Music Lessons
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      I'm always there for music
                    </p>
                  </NavLink>
                </li> */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavLink to="/projects">Projects</NavLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li>
                  <NavLink
                    to="/projects/mongo-remix-movies"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      MongoDB and Remix
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      A link between mongoDB and Remix - using movies!
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="projects/darwen-masters-swimming"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Charity Website Build
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      A site I have built and host
                    </p>
                  </NavLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
