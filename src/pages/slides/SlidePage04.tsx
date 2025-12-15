import SlideLayout from "@/components/presentation/SlideLayout";
import Slide04LandAvailability from "@/components/presentation/slides/Slide04LandAvailability";

const SlidePage04 = () => {
  return (
    <SlideLayout currentSlide={4} totalSlides={20}>
      <Slide04LandAvailability />
    </SlideLayout>
  );
};

export default SlidePage04;
