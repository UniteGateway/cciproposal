import SlideLayout from "@/components/presentation/SlideLayout";
import Slide10BOOTScope from "@/components/presentation/slides/Slide10BOOTScope";

const SlidePage10 = () => {
  return (
    <SlideLayout currentSlide={10} totalSlides={20}>
      <Slide10BOOTScope />
    </SlideLayout>
  );
};

export default SlidePage10;
