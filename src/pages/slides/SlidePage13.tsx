import SlideLayout from "@/components/presentation/SlideLayout";
import Slide13PPACommercial from "@/components/presentation/slides/Slide13PPACommercial";

const SlidePage13 = () => {
  return (
    <SlideLayout currentSlide={13} totalSlides={20}>
      <Slide13PPACommercial />
    </SlideLayout>
  );
};

export default SlidePage13;
