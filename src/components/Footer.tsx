
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "SEO", href: "#" },
    { name: "PPC Advertising", href: "#" },
    { name: "Social Media", href: "#" },
    { name: "Content Creation", href: "#" },
    { name: "CRO", href: "#" },
    { name: "Branding", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  
    { name: "Facebook", href: "https://www.facebook.com/people/Yashika-Infotech/61574162527007/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/yashika_infotech_services/#", icon: Instagram },
  { name: "Twitter", href: "https://x.com/i/flow/login?redirect_after_login=%2FInfotechYashika", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFApcuvuPSDmAAAAZXL6eQQ3KeD6b8K5Kpoqu_JL2INA4eGWd70-ESsO0GMdKEVhbSyGz8PORFkbp2Z_-tIciVFPGc0zkuK8HTzPJuzueLr57XRRkb42BJgeQuW4EqhlGhtOFs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fyashika-seo-marketing", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <span className="text-xl font-display font-semibold">
                <span className="text-marketing-400">Yashika</span>
                <span className="text-white"> Infotech</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your partner for data-driven digital marketing solutions that drive real results and boost your online presence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <address className="text-gray-400 mb-4 not-italic">
              F-1, Dewan Group, A-434, Nursery Cir,<br />
              Nemi Nagar Extension, Chauraha,<br />
              Vaishali Nagar, Jaipur, Rajasthan 302021<br />
              <br />
              Phone: <a href="tel:+919785689999" className="hover:text-white">+91-9785689999</a>
            </address>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                id="email-address"
                required
                placeholder="Enter your email"
                className="min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-marketing-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-4 py-2 text-base font-medium text-white bg-marketing-600 hover:bg-marketing-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-marketing-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-800 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Yashika Infotech Services PVT LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
