import SlideLayout from "@/components/presentation/SlideLayout";
import Slide07PowerEvacuation from "@/components/presentation/slides/Slide07PowerEvacuation";

const SlidePage07 = () => {
  return (
    <SlideLayout currentSlide={7} totalSlides={20}>
      <Slide07PowerEvacuation />
    </SlideLayout>
  );
};

export default SlidePage07;
