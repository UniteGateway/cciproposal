import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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

// Desktop Menu
const DesktopMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavigationMenu className="hidden lg:flex">
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

// Mobile Menu
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2">
            <div className="w-8 h-8 solar-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">U</span>
            </div>
            Unite Solar
          </SheetTitle>
        </SheetHeader>
        <div className="py-4 overflow-y-auto max-h-[calc(100vh-80px)]">
          {menuGroups.map((group) => (
            <Collapsible
              key={group.title}
              open={openGroups.includes(group.title)}
              onOpenChange={() => toggleGroup(group.title)}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium hover:bg-primary/5 transition-colors">
                {group.title}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openGroups.includes(group.title) && "rotate-180"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-4 pb-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 text-sm rounded-md mx-2 transition-colors",
                        "hover:bg-primary/10 hover:text-primary",
                        currentPath === item.href && "bg-primary/15 text-primary font-medium"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const SlideMenu = () => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
};

export default SlideMenu;
