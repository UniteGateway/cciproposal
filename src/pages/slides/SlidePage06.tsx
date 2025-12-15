import SlideLayout from "@/components/presentation/SlideLayout";
import Slide06CMDEnhancement from "@/components/presentation/slides/Slide06CMDEnhancement";

const SlidePage06 = () => {
  return (
    <SlideLayout currentSlide={6} totalSlides={20}>
      <Slide06CMDEnhancement />
    </SlideLayout>
  );
};

export default SlidePage06;
