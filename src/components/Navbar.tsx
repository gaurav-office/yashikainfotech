
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Service dropdown items
const servicesItems = [
  "Digital Marketing For Industries",
  "Performance Marketing Expert",
  "Digital Marketing Services",
  "Website Designing Services",
  "WordPress Website Design Services",
  "E-commerce Marketing Services",
  "Content Writing Services",
  "Email Marketing Services",
  "ORM Services"
];

// SEO dropdown items
const seoItems = [
  "SEO Services",
  "Local SEO Services Delhi",
  "Off-Page SEO Services",
  "On-Page SEO Services", 
  "Blogging Marketing Services",
  "Ecommerce SEO Services",
  "Local Business Listing Services"
];

// SMO dropdown items
const smoItems = [
  "SMO Services",
  "Facebook Marketing Services",
  "Twitter Marketing Services",
  "LinkedIn Marketing Services",
  "Instagram Marketing Services",
  "Pinterest Marketing Services",
  "YouTube Marketing Services"
];

// PPC dropdown items
const ppcItems = [
  "PPC Services",
  "Display Advertising Services",
  "Media Planning Services",
  "Lead Generation Services"
];

const navLinks = [
  {
    name: "Home",
    href: "#home",
    hasDropdown: false
  },
  {
    name: "Services",
    href: "#services",
    hasDropdown: true,
    items: servicesItems
  },
  {
    name: "SEO",
    href: "#seo",
    hasDropdown: true,
    items: seoItems
  },
  {
    name: "SMO",
    href: "#smo",
    hasDropdown: true,
    items: smoItems
  },
  {
    name: "PPC",
    href: "#ppc",
    hasDropdown: true,
    items: ppcItems
  },
  {
    name: "Contact",
    href: "#contact",
    hasDropdown: false
  }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/c0756332-e9c2-48e8-9389-17a7a741e4a2.png" 
              alt="Yashika Infotech Services" 
              className="h-12 mr-2" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => 
            link.hasDropdown ? (
              <NavigationMenu key={link.name}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-marketing-600 transition-colors bg-transparent hover:bg-transparent">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white">
                      <ul className="grid w-[400px] gap-3 p-4">
                        {link.items?.map(item => (
                          <li key={item}>
                            <NavigationMenuLink asChild>
                              <a 
                                href={link.href} 
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-marketing-50 hover:text-marketing-600"
                              >
                                <div className="text-sm font-medium">
                                  {item}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-marketing-600 transition-colors"
              >
                {link.name}
              </a>
            )
          )}
          <Button className="bg-marketing-600 hover:bg-marketing-700 text-white">
            Free Consultation
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav 
          className={cn(
            "fixed inset-0 bg-white pt-24 px-6 transition-transform duration-300 ease-in-out z-40", 
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map(link => 
              link.hasDropdown ? (
                <div key={link.name} className="flex flex-col space-y-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-lg font-medium text-gray-800 hover:text-marketing-600 transition-colors">
                      {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white w-full">
                      {link.items?.map(item => (
                        <DropdownMenuItem key={item}>
                          <a 
                            href={link.href} 
                            className="w-full text-gray-700 hover:text-marketing-600" 
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-800 hover:text-marketing-600 transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <Button 
              className="bg-marketing-600 hover:bg-marketing-700 text-white w-full mt-4"
            >
              Free Consultation
            </Button>
          </div>
          
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <p>Yashika Infotech Services PVT LTD</p>
              <p>F-1, Dewan Group, A-434, Nursery Cir, Nemi Nagar Extension, Chauraha, Vaishali Nagar, Jaipur, Rajasthan 302021</p>
              <p>Phone: +91-9785689999</p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
