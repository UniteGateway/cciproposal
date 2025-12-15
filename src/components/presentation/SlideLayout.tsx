import { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Globe, Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SlideMenu from "./SlideMenu";
import AutoPlayButton from "./AutoPlayButton";
import uniteLogo from "@/assets/unite-logo.png";

interface SlideLayoutProps {
  children: ReactNode;
  currentSlide: number;
  totalSlides: number;
  showNavigation?: boolean;
}

const TOTAL_SLIDES = 22;

const SlideLayout = ({
  children,
  currentSlide,
  totalSlides = TOTAL_SLIDES,
  showNavigation = true,
}: SlideLayoutProps) => {
  const prevSlide = currentSlide > 1 ? `/slide/${currentSlide - 1}` : null;
  const nextSlide = currentSlide < totalSlides ? `/slide/${currentSlide + 1}` : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="h-14 md:h-16 border-b border-border bg-card flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3 md:gap-6">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={uniteLogo} alt="Unite Solar" className="h-8 md:h-10 w-auto" />
          </Link>
          <SlideMenu />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{currentSlide}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-0 md:h-14 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-muted-foreground">
            <a 
              href="https://www.unitesolar.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="hidden xs:inline">www.</span>unitesolar.in
            </a>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Dr Ravi Varma
            </div>
            <a 
              href="tel:9667660773" 
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
              9667660773
            </a>
            <a 
              href="mailto:info@unitesolar.in" 
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
              info@unitesolar.in
            </a>
          </div>

          {showNavigation && (
            <div className="flex items-center gap-2">
              <AutoPlayButton totalSlides={totalSlides} intervalSeconds={8} />
              {prevSlide ? (
                <Button variant="outline" size="sm" asChild className="gap-1 h-8 md:h-9 text-xs md:text-sm">
                  <Link to={prevSlide}>
                    <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" size="sm" disabled className="gap-1 h-8 md:h-9 text-xs md:text-sm">
                  <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
              )}
              {nextSlide ? (
                <Button size="sm" asChild className="gap-1 h-8 md:h-9 text-xs md:text-sm bg-primary hover:bg-primary/90">
                  <Link to={nextSlide}>
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Link>
                </Button>
              ) : (
                <Button size="sm" disabled className="gap-1 h-8 md:h-9 text-xs md:text-sm bg-primary hover:bg-primary/90">
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default SlideLayout;
