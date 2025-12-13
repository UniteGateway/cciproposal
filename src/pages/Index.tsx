import { useState, useEffect, useCallback } from "react";
import SlideLayout from "@/components/presentation/SlideLayout";
import Slide01Cover from "@/components/presentation/slides/Slide01Cover";
import Slide02About from "@/components/presentation/slides/Slide02About";
import Slide03SiteVisit from "@/components/presentation/slides/Slide03SiteVisit";
import Slide04LandAvailability from "@/components/presentation/slides/Slide04LandAvailability";
import Slide05PowerInfra from "@/components/presentation/slides/Slide05PowerInfra";
import Slide06CMDEnhancement from "@/components/presentation/slides/Slide06CMDEnhancement";
import Slide07PowerEvacuation from "@/components/presentation/slides/Slide07PowerEvacuation";
import Slide08ProjectStructuring from "@/components/presentation/slides/Slide08ProjectStructuring";
import Slide09BOOTOverview from "@/components/presentation/slides/Slide09BOOTOverview";
import Slide10BOOTScope from "@/components/presentation/slides/Slide10BOOTScope";
import Slide11BOOTPostTransfer from "@/components/presentation/slides/Slide11BOOTPostTransfer";
import Slide12PPAOverview from "@/components/presentation/slides/Slide12PPAOverview";
import Slide13PPACommercial from "@/components/presentation/slides/Slide13PPACommercial";
import Slide14PPAScope from "@/components/presentation/slides/Slide14PPAScope";
import Slide15Benefits from "@/components/presentation/slides/Slide15Benefits";
import Slide16Strategic from "@/components/presentation/slides/Slide16Strategic";
import Slide17Conclusion from "@/components/presentation/slides/Slide17Conclusion";
import Slide18ThankYou from "@/components/presentation/slides/Slide18ThankYou";

const TOTAL_SLIDES = 18;

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 1: return <Slide01Cover onStart={goToNext} />;
      case 2: return <Slide02About />;
      case 3: return <Slide03SiteVisit />;
      case 4: return <Slide04LandAvailability />;
      case 5: return <Slide05PowerInfra />;
      case 6: return <Slide06CMDEnhancement />;
      case 7: return <Slide07PowerEvacuation />;
      case 8: return <Slide08ProjectStructuring />;
      case 9: return <Slide09BOOTOverview />;
      case 10: return <Slide10BOOTScope />;
      case 11: return <Slide11BOOTPostTransfer />;
      case 12: return <Slide12PPAOverview />;
      case 13: return <Slide13PPACommercial />;
      case 14: return <Slide14PPAScope />;
      case 15: return <Slide15Benefits />;
      case 16: return <Slide16Strategic />;
      case 17: return <Slide17Conclusion />;
      case 18: return <Slide18ThankYou />;
      default: return <Slide01Cover onStart={goToNext} />;
    }
  };

  return (
    <SlideLayout
      currentSlide={currentSlide}
      totalSlides={TOTAL_SLIDES}
      onPrevious={goToPrevious}
      onNext={goToNext}
    >
      {renderSlide()}
    </SlideLayout>
  );
};

export default Index;
