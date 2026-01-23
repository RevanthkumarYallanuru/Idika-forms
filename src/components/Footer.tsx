import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, footer, navLinks } from "@/data/siteData";
import logo from "@/assets/idika-logo.png";

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: MessageCircle, href: `https://wa.me/${siteConfig.social.whatsapp.replace(/\+/g, '')}`, label: "WhatsApp" },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border/30">
      {/* Main Footer */}
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt={siteConfig.name} className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {footer.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-subtitle mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight 
                        size={14} 
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {footer.legal.copyright}
          </p>
          <div className="flex items-center gap-6">
            {footer.legal.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
