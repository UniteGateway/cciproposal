import SlideLayout from "@/components/presentation/SlideLayout";
import Slide05PowerInfra from "@/components/presentation/slides/Slide05PowerInfra";

const SlidePage05 = () => {
  return (
    <SlideLayout currentSlide={5} totalSlides={20}>
      <Slide05PowerInfra />
    </SlideLayout>
  );
};

export default SlidePage05;
