import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuGroups = [
  {
    title: "Introduction",
    items: [
      { title: "Cover", href: "/slide/1" },
      { title: "About Unite Solar", href: "/slide/2" },
    ],
  },
  {
    title: "Feasibility",
    items: [
      { title: "Site Visit Assessment", href: "/slide/3" },
      { title: "Land Availability", href: "/slide/4" },
      { title: "Power Infrastructure", href: "/slide/5" },
      { title: "CMD Enhancement", href: "/slide/6" },
      { title: "Power Evacuation", href: "/slide/7" },
    ],
  },
  {
    title: "BOOT Model",
    items: [
      { title: "Project Structuring", href: "/slide/8" },
      { title: "BOOT Overview", href: "/slide/9" },
      { title: "BOOT Scope", href: "/slide/10" },
      { title: "Post-Transfer O&M", href: "/slide/11" },
    ],
  },
  {
    title: "PPA Model",
    items: [
      { title: "PPA Overview", href: "/slide/12" },
      { title: "Commercial Terms", href: "/slide/13" },
      { title: "PPA Scope", href: "/slide/14" },
    ],
  },
  {
    title: "Conclusion",
    items: [
      { title: "Key Benefits", href: "/slide/15" },
      { title: "Strategic Advantages", href: "/slide/16" },
      { title: "Way Forward", href: "/slide/17" },
      { title: "Thank You", href: "/slide/18" },
    ],
  },
];

const SlideMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        {menuGroups.map((group) => (
          <NavigationMenuItem key={group.title}>
            <NavigationMenuTrigger className="h-9 px-3 text-sm bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10">
              {group.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[220px] gap-1 p-2 bg-card border border-border shadow-lg rounded-md">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors",
                          "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                          currentPath === item.href && "bg-primary/15 text-primary font-medium"
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default SlideMenu;
