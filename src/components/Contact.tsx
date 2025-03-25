
import { useState } from "react";
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ChipBadge from "@/components/ui/ChipBadge";
import AnimatedContainer from "@/components/AnimatedContainer";
import { toast } from "sonner";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast("Success", {
        description: "Your message has been sent. We'll be in touch soon!",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedContainer className="text-center mb-16" animation="fade-up">
          <ChipBadge className="mb-4">Contact Us</ChipBadge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Digital Success Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to take your online presence to the next level? Get in touch for a free consultation.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedContainer animation="fade-right" delay={200}>
            <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-marketing-600 hover:bg-marketing-700 text-white"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Sent
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedContainer>

          <AnimatedContainer animation="fade-left" delay={400}>
            <div className="bg-marketing-600 text-white p-8 rounded-2xl shadow-sm h-full">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <MapPin className="h-6 w-6 text-marketing-200" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Office</h4>
                    <p className="text-marketing-100">
                      F-1, Dewan Group, A-434, Nursery Cir,<br />
                      Nemi Nagar Extension, Chauraha,<br />
                      Vaishali Nagar, Jaipur, Rajasthan 302021
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Mail className="h-6 w-6 text-marketing-200" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-marketing-100">
                    contact@yashikainfotech.com<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Phone className="h-6 w-6 text-marketing-200" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-marketing-100">
                      +91-9785689999
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Business Hours</h4>
                <ul className="space-y-2 text-marketing-100">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
