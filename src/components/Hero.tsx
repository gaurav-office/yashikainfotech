


import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChipBadge from "@/components/ui/ChipBadge";
import AnimatedContainer from "@/components/AnimatedContainer";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100 z-0"></div>
      
      {/* Background circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-marketing-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-marketing-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center z-10">
        <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0 relative">
          <AnimatedContainer animation="fade-up" delay={100}>
            <ChipBadge className="mb-6">
            Boost Your Online Presence with Yashika Infotech Services
            </ChipBadge>
          </AnimatedContainer>

          <AnimatedContainer animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Best Digital Marketing   <span className="text-marketing-600">Agency in India</span>
            </h1>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-up" delay={500}>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            In today’s digital-first world, establishing a strong online presence is essential to growing
your business. At Yashika Infotech Services, we specialize in helping brands unlock their full
potential through innovative and results-driven digital marketing services. Whether you&#39;re
in Jaipur, across India, or anywhere in the world, we offer customized strategies tailored to
your specific needs, ensuring you achieve sustainable growth..
            </p>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-marketing-600 hover:bg-marketing-700 text-white">
                Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-marketing-200 text-marketing-700 hover:bg-marketing-50">
                Our Services
              </Button>
            </div>
          </AnimatedContainer>
        </div>
        
        <AnimatedContainer className="lg:w-1/2" animation="fade-left" delay={300}>
          <div className="relative z-10">
            <div className="glass-card rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Digital marketing team working together" 
                className="w-full h-auto" 
              />
            </div>
            
            {/* Stats card */}
            <div className="glass-card absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-marketing-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-marketing-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg. ROI Increase</p>
                  <p className="text-2xl font-bold text-marketing-700">237%</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}

export default Hero;
