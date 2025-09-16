import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AmanPardeshi01', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/amanpardeshi', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:amanpardeshi540@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Aman | Portfolio</h3>
            <p className="text-muted-foreground max-w-sm">
              Building exceptional web experiences with modern technologies.
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aman Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 sm:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;