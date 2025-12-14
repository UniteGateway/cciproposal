import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import uniteLogo from "@/assets/unite-logo.png";
import cciLogo from "@/assets/cci-logo.png";

interface Slide01CoverProps {
  onStart: () => void;
}

const Slide01Cover = ({ onStart }: Slide01CoverProps) => {
  return (
    <div className="min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-7.5rem)] relative overflow-hidden">
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 py-12 md:py-20">
        <div className="animate-fade-in space-y-6 md:space-y-8 max-w-4xl">
          {/* Logos */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="bg-card/20 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-4 md:px-6 py-2 md:py-3">
              <img src={uniteLogo} alt="Unite Solar" className="h-8 md:h-12 w-auto" />
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2 md:py-3">
              <img src={cciLogo} alt="CCI" className="h-10 md:h-14 w-auto" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
            20+ MW Captive
            <br />
            <span className="text-solar-orange">Solar Power Project</span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 font-medium">
              Feasibility Assessment & Commercial Models
            </p>
            <p className="text-sm md:text-lg text-primary-foreground/80">
              For <span className="font-semibold">CCI – Thandur Plant</span>
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={onStart}
            className="mt-4 md:mt-8 bg-solar-orange hover:bg-solar-orange/90 text-primary-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg gap-2"
          >
            Begin Presentation
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Button>

          {/* Bottom Info */}
          <div className="pt-4 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-primary-foreground/70 text-xs md:text-sm">
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
