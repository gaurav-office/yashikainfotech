
import { Landmark, LineChart, Globe, MessageSquare, PenTool, TrendingUp, Laptop, ShoppingCart, Mail, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import ChipBadge from "@/components/ui/ChipBadge";
import AnimatedContainer from "@/components/AnimatedContainer";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const services = [
  {
    title: "Digital Marketing For Industries",
    description: "Tailored digital marketing strategies designed for specific industry needs and challenges.",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Performance Marketing Expert",
    description: "Data-driven campaigns focused on measurable results and maximizing your marketing ROI.",
    icon: LineChart,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Digital Marketing Services",
    description: "Comprehensive digital marketing solutions including SEO, PPC, and social media marketing.",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Website Designing Services",
    description: "Custom, responsive website designs that convert visitors into customers.",
    icon: Laptop,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "WordPress Website Design Services",
    description: "Professional WordPress website development with customized themes and plugins.",
    icon: PenTool,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "E-commerce Marketing Services",
    description: "Specialized marketing strategies to boost your online store's visibility and sales.",
    icon: ShoppingCart,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Content Writing Services",
    description: "Engaging, SEO-optimized content that tells your brand story and drives conversions.",
    icon: MessageSquare,
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Email Marketing Services",
    description: "Strategic email campaigns that nurture leads and build lasting customer relationships.",
    icon: Mail,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "ORM Services",
    description: "Online Reputation Management to build and maintain a positive brand image online.",
    icon: Shield,
    color: "bg-cyan-50 text-cyan-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedContainer className="text-center mb-16" animation="fade-up">
          <ChipBadge className="mb-4">Our Services</ChipBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Expertise in Digital Marketing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          As the Best Digital Marketing Agency in India, we bring a wealth of experience in providing SEO services, PPC advertising, social media marketing, and more. Our team is committed to helping you increase visibility, generate high-quality leads, and achieve measurable results.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedContainer
              key={service.title}
              animation="fade-up"
              delay={100 * index}
              className="group"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="h-full p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", service.color)}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-marketing-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4 z-50">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <div className="pt-2">
                      <a href="#contact" className="text-sm font-medium text-marketing-600 hover:text-marketing-700">
                        Learn more →
                      </a>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
