import SlideLayout from "@/components/presentation/SlideLayout";
import Slide15Benefits from "@/components/presentation/slides/Slide15Benefits";

const SlidePage15 = () => {
  return (
    <SlideLayout currentSlide={15} totalSlides={18}>
      <Slide15Benefits />
    </SlideLayout>
  );
};

export default SlidePage15;
