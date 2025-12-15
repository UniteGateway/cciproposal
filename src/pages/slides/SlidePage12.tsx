import SlideLayout from "@/components/presentation/SlideLayout";
import Slide12PPAOverview from "@/components/presentation/slides/Slide12PPAOverview";

const SlidePage12 = () => {
  return (
    <SlideLayout currentSlide={12} totalSlides={20}>
      <Slide12PPAOverview />
    </SlideLayout>
  );
};

export default SlidePage12;
