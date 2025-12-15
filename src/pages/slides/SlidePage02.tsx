import SlideLayout from "@/components/presentation/SlideLayout";
import Slide02About from "@/components/presentation/slides/Slide02About";

const SlidePage02 = () => {
  return (
    <SlideLayout currentSlide={2} totalSlides={20}>
      <Slide02About />
    </SlideLayout>
  );
};

export default SlidePage02;
