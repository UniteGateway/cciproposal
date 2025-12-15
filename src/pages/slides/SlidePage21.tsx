import SlideLayout from "@/components/presentation/SlideLayout";
import SlideProducts from "@/components/presentation/slides/SlideProducts";

const SlidePage21 = () => {
  return (
    <SlideLayout currentSlide={21} totalSlides={22}>
      <SlideProducts />
    </SlideLayout>
  );
};

export default SlidePage21;
