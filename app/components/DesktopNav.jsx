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
    <div className="desk w-[100vw] flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Vehicles</NavigationMenuTrigger>
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
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>3D Printers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavLink to="/collections">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Our Brands
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Specially selected after years of experience
                        </p>
                      </div>
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <ul>
                  <li>
                    <NavLink
                      to="/collections/ultimaker"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        UltiMaker
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Fantastic 3D Printing innovation from Holland
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/photocentric"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Photocentric
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Resin 3D Printing Specialists
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/raise3d"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Raise 3D
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
          <NavigationMenuItem>
            <NavigationMenuTrigger>3D Scanners</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavLink to="/collections">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Our Brands
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Specially selected after years of experience
                        </p>
                      </div>
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <ul>
                  <li>
                    <NavLink
                      to="/collections/ultimaker"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Shining 3D
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Fantastic 3D Printing innovation from Holland
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/collections/photocentric"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        GOM
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Resin 3D Printing Specialists
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
          <NavigationMenuItem>
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
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
