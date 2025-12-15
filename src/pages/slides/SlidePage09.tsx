import SlideLayout from "@/components/presentation/SlideLayout";
import Slide09BOOTOverview from "@/components/presentation/slides/Slide09BOOTOverview";

const SlidePage09 = () => {
  return (
    <SlideLayout currentSlide={9} totalSlides={20}>
      <Slide09BOOTOverview />
    </SlideLayout>
  );
};

export default SlidePage09;
