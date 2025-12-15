import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import uniteLogo from "@/assets/unite-logo.png";
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

// Import thumbnail images
import cciLogo from "@/assets/cci-logo.png";
import cciFactory from "@/assets/cci-factory.png";
import cciPlant from "@/assets/cci-plant.png";
import cciPlant2 from "@/assets/cci-plant2.png";
import cciIndustry from "@/assets/cci-industry.png";
import solarFlower from "@/assets/solar-flower.png";
import installations from "@/assets/installations.png";
import services from "@/assets/services.png";
import partnerLogos from "@/assets/partner-logos.png";
import brandsGrid from "@/assets/brands-grid.png";

const menuGroups = [
  {
    title: "Introduction",
    items: [
      { title: "Cover", href: "/slide/1", thumbnail: cciLogo },
      { title: "About Unite Solar", href: "/slide/2", thumbnail: uniteLogo },
    ],
  },
  {
    title: "Feasibility",
    items: [
      { title: "Site Visit Assessment", href: "/slide/3", thumbnail: cciFactory },
      { title: "Land Availability", href: "/slide/4", thumbnail: cciPlant },
      { title: "Power Infrastructure", href: "/slide/5", thumbnail: cciIndustry },
      { title: "CMD Enhancement", href: "/slide/6", thumbnail: cciPlant2 },
      { title: "Power Evacuation", href: "/slide/7", thumbnail: solarFlower },
    ],
  },
  {
    title: "BOOT Model",
    items: [
      { title: "Project Structuring", href: "/slide/8", thumbnail: cciFactory },
      { title: "BOOT Overview", href: "/slide/9", thumbnail: installations },
      { title: "BOOT Scope", href: "/slide/10", thumbnail: cciPlant },
      { title: "Post-Transfer O&M", href: "/slide/11", thumbnail: services },
    ],
  },
  {
    title: "PPA Model",
    items: [
      { title: "PPA Overview", href: "/slide/12", thumbnail: cciIndustry },
      { title: "Commercial Terms", href: "/slide/13", thumbnail: cciFactory },
      { title: "PPA Scope", href: "/slide/14", thumbnail: installations },
    ],
  },
  {
    title: "Partners",
    items: [
      { title: "Strategic Partners", href: "/slide/15", thumbnail: partnerLogos },
      { title: "Brands We Use", href: "/slide/16", thumbnail: brandsGrid },
    ],
  },
  {
    title: "Products & Services",
    items: [
      { title: "Our Products", href: "/slide/17", thumbnail: solarFlower },
      { title: "Our Services", href: "/slide/18", thumbnail: services },
    ],
  },
  {
    title: "Conclusion",
    items: [
      { title: "Key Benefits", href: "/slide/19", thumbnail: cciPlant2 },
      { title: "Strategic Advantages", href: "/slide/20", thumbnail: cciIndustry },
      { title: "Way Forward", href: "/slide/21", thumbnail: installations },
      { title: "Thank You", href: "/slide/22", thumbnail: uniteLogo },
    ],
  },
];

// Desktop Menu with Full-Width Submenu
const DesktopMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavigationMenu className="hidden lg:flex max-w-none">
      <NavigationMenuList className="gap-1">
        {menuGroups.map((group) => (
          <NavigationMenuItem key={group.title}>
            <NavigationMenuTrigger className="h-9 px-3 text-sm bg-transparent hover:bg-solar-orange/20 hover:text-solar-orange data-[state=open]:bg-solar-orange/20 data-[state=open]:text-solar-orange">
              {group.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-screen !max-w-none">
              <div className="w-full bg-card/95 backdrop-blur-md border-b border-border shadow-xl">
                <div className="container mx-auto px-6 py-6">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                    <span className="text-lg font-semibold text-solar-orange">{group.title}</span>
                    <span className="text-sm text-muted-foreground">({group.items.length} slides)</span>
                  </div>
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "group block select-none rounded-xl overflow-hidden border-2 transition-all duration-300",
                              "hover:border-solar-orange hover:shadow-lg hover:shadow-solar-orange/20 hover:scale-[1.02]",
                              "focus:border-solar-orange focus:shadow-lg focus:shadow-solar-orange/20",
                              currentPath === item.href 
                                ? "border-solar-orange shadow-lg shadow-solar-orange/30" 
                                : "border-border/50 bg-background/50"
                            )}
                          >
                            <div className="aspect-video relative overflow-hidden bg-muted">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className={cn(
                              "px-3 py-2.5 text-sm font-medium text-center transition-colors",
                              currentPath === item.href 
                                ? "bg-solar-orange/20 text-solar-orange" 
                                : "bg-background/80 text-foreground group-hover:text-solar-orange"
                            )}>
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
      <SheetContent side="left" className="w-[320px] p-0">
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle>
            <img src={uniteLogo} alt="Unite Solar" className="h-8 w-auto" />
          </SheetTitle>
        </SheetHeader>
        <div className="py-4 overflow-y-auto max-h-[calc(100vh-80px)]">
          {menuGroups.map((group) => (
            <Collapsible
              key={group.title}
              open={openGroups.includes(group.title)}
              onOpenChange={() => toggleGroup(group.title)}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium hover:bg-solar-orange/20 hover:text-solar-orange transition-colors">
                {group.title}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openGroups.includes(group.title) && "rotate-180"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-3 pb-3 grid grid-cols-2 gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg overflow-hidden border transition-all",
                        "hover:border-solar-orange hover:shadow-md",
                        currentPath === item.href 
                          ? "border-solar-orange shadow-md" 
                          : "border-border/50"
                      )}
                    >
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className={cn(
                        "px-2 py-1.5 text-xs font-medium text-center truncate",
                        currentPath === item.href 
                          ? "bg-solar-orange/20 text-solar-orange" 
                          : "bg-background text-foreground"
                      )}>
                        {item.title}
                      </div>
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
