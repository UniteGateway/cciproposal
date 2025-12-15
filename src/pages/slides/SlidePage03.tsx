import SlideLayout from "@/components/presentation/SlideLayout";
import Slide03SiteVisit from "@/components/presentation/slides/Slide03SiteVisit";

const SlidePage03 = () => {
  return (
    <SlideLayout currentSlide={3} totalSlides={20}>
      <Slide03SiteVisit />
    </SlideLayout>
  );
};

export default SlidePage03;
