import { Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide01CoverProps {
  onStart: () => void;
}

const Slide01Cover = ({ onStart }: Slide01CoverProps) => {
  return (
    <div className="min-h-[calc(100vh-7.5rem)] relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-solar-blue/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="animate-fade-in space-y-8 max-w-4xl">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 text-primary-foreground">
            <Sun className="w-5 h-5" />
            <span className="text-sm font-medium">Unite Solar Presents</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight">
            20+ MW Captive
            <br />
            <span className="text-solar-orange">Solar Power Project</span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Feasibility Assessment & Commercial Models
            </p>
            <p className="text-lg text-primary-foreground/80">
              For <span className="font-semibold">CCI – Thandur Plant</span>
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={onStart}
            className="mt-8 bg-solar-orange hover:bg-solar-orange/90 text-primary-foreground font-semibold px-8 py-6 text-lg gap-2"
          >
            Begin Presentation
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Bottom Info */}
          <div className="pt-8 flex items-center justify-center gap-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-solar-green" />
              Ground-Mounted Solar
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-solar-blue" />
              BOOT & PPA Models
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-solar-orange" />
              100% Power Security
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide01Cover;
