import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import ThreeBackground from '@/components/ThreeBackground';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full-Stack Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 bg-gradient-hero opacity-50"
        animate={{
          background: [
            'var(--gradient-hero)',
            'linear-gradient(135deg, hsl(195 100% 60% / 0.15), hsl(270 100% 70% / 0.15))',
            'var(--gradient-hero)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="text-gradient">{displayText}</span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                I build delightful web applications that scale. Specialized in React, Node.js, and creating exceptional user experiences.
              </p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToProjects}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                >
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://drive.google.com/file/d/1_6G7RQxg_06aH7ixm_eQt1-r5bijbUMd/view?usp=sharing', '_blank')}
                >
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="f"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/amanpardeshi/"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:amanpardeshi540@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl" />
              <motion.img
                src={heroImage}
                alt="Developer workspace"
                className="w-full h-auto rounded-2xl shadow-2xl"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg card-glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-muted-foreground">Available for hire</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;