import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Play, Pause, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AutoPlayButtonProps {
  totalSlides: number;
  intervalSeconds?: number;
}

const AutoPlayButton = ({ totalSlides, intervalSeconds = 8 }: AutoPlayButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentSlide = useCallback(() => {
    const match = location.pathname.match(/\/slide\/(\d+)/);
    return match ? parseInt(match[1]) : 1;
  }, [location.pathname]);

  const goToNextSlide = useCallback(() => {
    const currentSlide = getCurrentSlide();
    if (currentSlide < totalSlides) {
      navigate(`/slide/${currentSlide + 1}`);
    } else {
      // Loop back to first slide
      navigate("/slide/1");
      setIsPlaying(false);
    }
  }, [getCurrentSlide, navigate, totalSlides]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        goToNextSlide();
      }, intervalSeconds * 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, intervalSeconds, goToNextSlide]);

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isPlaying ? "default" : "outline"}
            size="sm"
            onClick={toggleAutoPlay}
            className={`gap-1.5 h-8 md:h-9 text-xs md:text-sm ${
              isPlaying ? "bg-solar-orange hover:bg-solar-orange/90" : ""
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Stop</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Auto</span>
              </>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isPlaying ? "Stop Auto-play" : `Auto-play (${intervalSeconds}s per slide)`}
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={goToNextSlide}
            className="h-8 md:h-9 px-2"
          >
            <SkipForward className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Skip to next slide</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default AutoPlayButton;
