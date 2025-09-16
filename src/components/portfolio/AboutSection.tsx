import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, icon: Code2 },
    { name: 'Node.js/Express', level: 90, icon: Database },
    { name: 'TypeScript', level: 88, icon: Code2 },
    { name: 'PostgreSQL/MongoDB', level: 85, icon: Database },
    { name: 'AWS/Vercel', level: 80, icon: Globe },
    { name: 'React Native', level: 75, icon: Smartphone },
  ];

  const experience = [
    {
      year: '2025',
      title: 'Freelancer Web - Developer',
      company: 'MetaaSpark',
      description: 'Developed and maintained responsive websites for various clients, focusing on user experience and performance optimization.'
    },
    {
      year: '2024',
      title: 'Full-Stack Developer',
      company: 'MyaFuture',
      description: 'Engineered and optimized full-stack web applications using the MERN stack, enhancing performance by 80% and ensuring a seamless user experience. Partnered with UX designers and backend engineers to integrate React UI with Node.js APIs, reducing response time by 70% and improving page load speed.'
    },
    {
      year: '2024',
      title: 'Java Full Stack Intern',
      company: 'Vinsys.',
      description: 'Developed full-stack applications with Java, JavaScript, HTML/CSS, optimizing backend logic and ensuring secure CRUD operations.'
    },
    {
      year: '2023',
      title: 'HR Intern',
      company: 'Vishay Intertechnology',
      description: 'Completed an internship at Vishay Intertechnology, contributing to a global HR project by assisting in data analysis and reporting. Designed and developed 50+ interactive training materials for Workday implementation, facilitating onboarding for 10,000+ employees and reducing training time by 85%.   '
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience building scalable web applications.
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I discovered my passion for coding during college when I built my first website.
                What started as curiosity quickly became an obsession with creating digital experiences
                that make people's lives easier.
              </p>
              <p>
                Over the years, I've worked with startups and established companies, always focusing
                on writing clean, maintainable code and delivering exceptional user experiences.
                I believe in the power of technology to solve real-world problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or mentoring junior developers. I'm always eager to learn
                and share knowledge with the community.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 w-40">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <div className="flex-1">
                      <Progress
                        value={skill.level}
                        className="h-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {skill.level}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Experience</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="card-glass hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                          <p className="text-primary font-medium mb-2">{item.company}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;