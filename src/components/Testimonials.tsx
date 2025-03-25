
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChipBadge from "@/components/ui/ChipBadge";
import AnimatedContainer from "@/components/AnimatedContainer";
import BlurImage from "@/components/BlurImage";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    quote: "The team at NextGen revolutionized our digital presence. Our leads increased by 140% within just 3 months of implementing their SEO and PPC strategies.",
  },
  {
    name: "Michael Thompson",
    role: "Marketing Director, Retail Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    quote: "Working with this agency has been a game-changer for our e-commerce business. Their social media strategies helped us increase engagement by 85% and sales by 62%.",
  },
  {
    name: "Lisa Chen",
    role: "Founder, Wellness Hub",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    quote: "Their content marketing strategy transformed our brand's voice. We've seen a 200% increase in organic traffic and our conversion rates have never been higher.",
  },
];

export function Testimonials() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const { scrollLeft, clientWidth } = scrollContainer.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      
      scrollContainer.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedContainer className="text-center mb-16" animation="fade-up">
          <ChipBadge className="mb-4">Testimonials</ChipBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Don’t just take our word for it. Here’s what our satisfied clients have to say about our digital
          marketing services.
          </p>
        </AnimatedContainer>

        <div className="relative">
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <AnimatedContainer
                key={testimonial.name}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4 snap-center"
                animation="fade-up"
                delay={100 * index}
              >
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="text-marketing-600 mb-6">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="text-gray-700 mb-8 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <BlurImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-sm border border-gray-200 bg-white/80 backdrop-blur-sm -ml-4"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-sm border border-gray-200 bg-white/80 backdrop-blur-sm -mr-4"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
