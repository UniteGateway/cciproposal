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
import solarPanels from "@/assets/menu/solar-panels.jpg";
import companyTeam from "@/assets/menu/company-team.jpg";
import siteAssessment from "@/assets/menu/site-assessment.jpg";
import landField from "@/assets/menu/land-field.jpg";
import powerGrid from "@/assets/menu/power-grid.jpg";
import powerMeter from "@/assets/menu/power-meter.jpg";
import transmission from "@/assets/menu/transmission.jpg";
import businessContract from "@/assets/menu/business-contract.jpg";
import analytics from "@/assets/menu/analytics.jpg";
import handshake from "@/assets/menu/handshake.jpg";
import maintenance from "@/assets/menu/maintenance.jpg";
import agreement from "@/assets/menu/agreement.jpg";
import pricing from "@/assets/menu/pricing.jpg";
import partners from "@/assets/menu/partners.jpg";
import solarRooftop from "@/assets/menu/solar-rooftop.jpg";
import solarFarm from "@/assets/menu/solar-farm.jpg";
import installation from "@/assets/menu/installation.jpg";
import solarInstallService from "@/assets/menu/solar-install-service.jpg";
import benefits from "@/assets/menu/benefits.jpg";
import strategy from "@/assets/menu/strategy.jpg";
import roadAhead from "@/assets/menu/road-ahead.jpg";
import thankYou from "@/assets/menu/thank-you.jpg";
import brands from "@/assets/menu/brands.jpg";

const menuGroups = [
  {
    title: "Introduction",
    items: [
      { title: "Cover", href: "/slide/1", thumbnail: solarPanels },
      { title: "About Unite Solar", href: "/slide/2", thumbnail: companyTeam },
    ],
  },
  {
    title: "Feasibility",
    items: [
      { title: "Site Visit Assessment", href: "/slide/3", thumbnail: siteAssessment },
      { title: "Land Availability", href: "/slide/4", thumbnail: landField },
      { title: "Power Infrastructure", href: "/slide/5", thumbnail: powerGrid },
      { title: "CMD Enhancement", href: "/slide/6", thumbnail: powerMeter },
      { title: "Power Evacuation", href: "/slide/7", thumbnail: transmission },
    ],
  },
  {
    title: "BOOT Model",
    items: [
      { title: "Project Structuring", href: "/slide/8", thumbnail: businessContract },
      { title: "BOOT Overview", href: "/slide/9", thumbnail: analytics },
      { title: "BOOT Scope", href: "/slide/10", thumbnail: handshake },
      { title: "Post-Transfer O&M", href: "/slide/11", thumbnail: maintenance },
    ],
  },
  {
    title: "PPA Model",
    items: [
      { title: "PPA Overview", href: "/slide/12", thumbnail: agreement },
      { title: "Commercial Terms", href: "/slide/13", thumbnail: pricing },
      { title: "PPA Scope", href: "/slide/14", thumbnail: solarFarm },
    ],
  },
  {
    title: "Partners",
    items: [
      { title: "Strategic Partners", href: "/slide/15", thumbnail: partners },
      { title: "Brands We Use", href: "/slide/16", thumbnail: brands },
    ],
  },
  {
    title: "Products & Services",
    items: [
      { title: "Our Products", href: "/slide/17", thumbnail: solarRooftop },
      { title: "Our Services", href: "/slide/18", thumbnail: solarInstallService },
    ],
  },
  {
    title: "Conclusion",
    items: [
      { title: "Key Benefits", href: "/slide/19", thumbnail: benefits },
      { title: "Strategic Advantages", href: "/slide/20", thumbnail: strategy },
      { title: "Way Forward", href: "/slide/21", thumbnail: roadAhead },
      { title: "Thank You", href: "/slide/22", thumbnail: thankYou },
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
              <div className="w-full bg-solar-orange/90 backdrop-blur-xl border-b border-solar-orange/30 shadow-2xl">
                <div className="container mx-auto px-6 py-6">
                  <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/20">
                    <span className="text-lg font-semibold text-white">{group.title}</span>
                    <span className="text-sm text-white/70">({group.items.length} slides)</span>
                  </div>
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "group block select-none rounded-2xl overflow-hidden border-2 transition-all duration-300",
                              "hover:border-white hover:shadow-xl hover:shadow-white/25 hover:scale-[1.03]",
                              "focus:border-white focus:shadow-xl focus:shadow-white/25",
                              currentPath === item.href 
                                ? "border-white shadow-xl shadow-white/30 ring-2 ring-white/30" 
                                : "border-white/30 bg-white/10"
                            )}
                          >
                            <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <span className={cn(
                                  "text-sm font-medium text-white drop-shadow-lg",
                                  currentPath === item.href && "text-solar-orange"
                                )}>
                                  {item.title}
                                </span>
                              </div>
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
      <SheetContent side="left" className="w-[320px] p-0 bg-background/95 backdrop-blur-xl">
        <SheetHeader className="p-4 border-b border-border/50">
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
                <div className="px-3 pb-3 grid grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl overflow-hidden border-2 transition-all",
                        "hover:border-solar-orange hover:shadow-lg",
                        currentPath === item.href 
                          ? "border-solar-orange shadow-lg" 
                          : "border-white/20"
                      )}
                    >
                      <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2">
                          <span className={cn(
                            "text-xs font-medium text-white drop-shadow-lg line-clamp-1",
                            currentPath === item.href && "text-solar-orange"
                          )}>
                            {item.title}
                          </span>
                        </div>
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
