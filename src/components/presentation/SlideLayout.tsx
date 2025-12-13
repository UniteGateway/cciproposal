import { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Globe, Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideLayoutProps {
  children: ReactNode;
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  showNavigation?: boolean;
}

const SlideLayout = ({
  children,
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  showNavigation = true,
}: SlideLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 solar-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">U</span>
          </div>
          <span className="font-display font-semibold text-lg text-foreground">Unite Solar</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{currentSlide}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="animate-fade-in" key={currentSlide}>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="h-14 border-t border-border bg-card">
        <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="https://www.unitesolar.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              www.unitesolar.in
            </a>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              Dr Ravi Varma
            </div>
            <a 
              href="tel:9667660773" 
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              9667660773
            </a>
            <a 
              href="mailto:info@unitesolar.in" 
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@unitesolar.in
            </a>
          </div>

          {showNavigation && (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onPrevious}
                disabled={currentSlide === 1}
                className="gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button
                size="sm"
                onClick={onNext}
                disabled={currentSlide === totalSlides}
                className="gap-1 bg-primary hover:bg-primary/90"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default SlideLayout;
