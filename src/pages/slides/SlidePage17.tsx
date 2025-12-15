import SlideLayout from "@/components/presentation/SlideLayout";
import Slide17Conclusion from "@/components/presentation/slides/Slide17Conclusion";

const SlidePage17 = () => {
  return (
    <SlideLayout currentSlide={17} totalSlides={20}>
      <Slide17Conclusion />
    </SlideLayout>
  );
};

export default SlidePage17;
