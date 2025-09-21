import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code2, Database, Cloud, Cpu, GitBranch, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'], icon: Code2 },
    { category: 'Backend & Database', items: ['Python', 'API Integration', 'Database Management'], icon: Database },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'], icon: Cloud },
    { category: 'AI & Development', items: ['AI-assisted Coding', 'Vibe Coding', 'Full-stack Development'], icon: Cpu },
    { category: 'Version Control', items: ['Git', 'GitHub', 'VS Code'], icon: GitBranch },
    { category: 'System Administration', items: ['Linux Commands', 'Terminal Usage', 'Debugging'], icon: Terminal }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafting Digital <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Currently pursuing BCA at KLE Society's Degree College, I specialize in building responsive, 
            database-driven web applications using modern technologies and AI-assisted development workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                    <skillGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground border-0 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Experience Highlights</h3>
          <p className="text-lg mb-6 opacity-90">
            Freelance Full Stack Developer (May 2023 - Present)
          </p>
          <p className="text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Delivered responsive, database-driven web applications using AI-assisted coding workflows. 
            Experienced in API integration, deployment, version control (Git), and applying DevOps practices 
            including CI/CD pipelines, cloud deployment, and automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
