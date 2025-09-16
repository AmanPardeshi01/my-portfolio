import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import dibetes from '@/assets/dibetes.png';
import toursandtravels from '@/assets/toursandtravels.png';
import swabhiman from '@/assets/swabhiman.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Diabeties Detection using Deep Learning.',
      description: 'Designed and implemented Diabetes Detection Using Deep Learning, leveraging cutting-edge deep learning methodologies to accurately detect diabetes-related patterns in medical data, contributing to early diagnosis and enhanced patient care.',
      image: dibetes,
      tech: ['Python', 'DL', 'ML', 'SQLLite', 'Spyder'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/AmanPardeshi01/DIABETES-DETECTION-USING-FOOT-THERMOGRAPHY-WITH-DEEP-LEARNING',
      metrics: ['99.9% uptime', '40% faster checkout', '500+ daily users']
    },
    {
      id: 2,
      title: 'Tours & Travel Management System.',
      description: 'Developed a complete Tours and Travel Management System using PHP, MySQL, Bootstrap, and PDO PayPal integration. Designed and implemented a user-friendly interface for managing bookings and payments, enhancing the user experience.',
      image: toursandtravels,
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: 'https://wooxtravel.lovestoblog.com/',
      githubUrl: 'https://github.com/AmanPardeshi01/Tours-and-Travel-Management-System',
      metrics: ['10k+ messages/day', '< 100ms latency', '256-bit encryption']
    },
    {
      id: 3,
      title: 'Swabhiman - NGO Website',
      description: 'Delivered a responsive, accessible React & Tailwind CSS website to highlight Swabhiman’s mission—programmes in reproductive & child health, nutrition awareness, entrepreneurship training, and digital financial literacy.',
      image: swabhiman,
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Google Forms', 'Analytics', 'Apps Script', 'Git'],
      liveUrl: 'https://swabhiman.org.in/',
      githubUrl: 'https://github.com/AmanPardeshi01/Swabhimaan',
      metrics: ['50+ teams using', '30% productivity boost', '4.9/5 user rating']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work - from concept to deployment, each project tells a story of problem-solving and innovation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="group card-glass border-border/50 overflow-hidden h-full">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-1 mb-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Live Demo
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Code
                      <Github className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;