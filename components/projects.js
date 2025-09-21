import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Project } from '@/entities/Project';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const projectData = await Project.list('-created_date');
      setProjects(projectData);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-foreground">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Featured Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of web applications built with modern technologies, AI-assisted development, 
            and a focus on user experience and performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                {project.image_url && (
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image_url} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-black border-0 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                )}
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary/90 border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3">
                    {project.live_url && (
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                      >
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github_url && (
                      <Button
                        variant="outline"
                        asChild
                        className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary flex-1"
                      >
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
