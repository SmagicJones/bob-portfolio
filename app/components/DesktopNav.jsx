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
    <div className="desk w-[100vw] flex justify-center bg-white">
      <NavigationMenu>
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] "'>
                <li>
                  <NavLink
                    to="/buses"
                    className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Buses
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/emergency-vehicles"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Emergency Vehicles
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/vehicles"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      All Vehicles
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pages"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Pages
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/posts"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Posts
                    </div>
                  </NavLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavLink to="/about">About</NavLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavLink to="/collections">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Web Developer
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Enjoying creating better software
                        </p>
                      </div>
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <ul>
                  <li>
                    <NavLink
                      to="/contact"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Contact
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Get in touch
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/photocentric"
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
                  <li>
                    <NavLink
                      to="/collections/raise3d"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Social Media
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        You can also find me here
                      </p>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavLink to="/work">Work</NavLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavLink to="/products">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Live Examples
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Have a look at some recent examples of pages and
                          content produced for clients
                        </p>
                      </div>
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <ul>
                  <li>
                    <NavLink
                      to="/products"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Product pages
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        View some examples of recent product pages
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/photocentric"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Landing Pages
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Recent examples of landing page builds for clients
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/raise3d"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Functional and Stylistic Changes
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Examples of responses to requests for displaying content
                      </p>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavLink to="/projects">Projects</NavLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavLink to="/projects">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Projects
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Here you can find a few things I have built
                        </p>
                      </div>
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <ul>
                  <li>
                    <NavLink
                      to="/projects/mongo-remix-movies"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Remix / MongoDB Movie App
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Find out more about this exciting project I build using
                        Remix and MongoDB
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/projects/darwen-masters-swimming"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Charity Website Build
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        A simple website hosted with github pages for a charity
                        swimming organisation
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/raise3d"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        That other one
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        American 3D Printing award winners
                      </p>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Materials</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] "'>
                <li>
                  <NavLink
                    to="/filaments"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Forward AM
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Filaments Forward into the future
                      </p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/filaments"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Raise 3D Filaments
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Filaments Forward into the future
                      </p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/filaments"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      UltiMaker Filament
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Filaments Forward into the future
                      </p>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
