import SlideLayout from "@/components/presentation/SlideLayout";
import SlidePartners from "@/components/presentation/slides/SlidePartners";

const SlidePage15 = () => {
  return (
    <SlideLayout currentSlide={15} totalSlides={22}>
      <SlidePartners />
    </SlideLayout>
  );
};

export default SlidePage15;
