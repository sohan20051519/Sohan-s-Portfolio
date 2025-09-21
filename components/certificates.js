import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { Certificate } from '@/entities/Certificate';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = async () => {
    try {
      const certData = await Certificate.list('-date_issued');
      setCertificates(certData);
    } catch (error) {
      console.error('Error loading certificates:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-foreground">Loading certificates...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Achievements</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <Award className="inline-block w-12 h-12 mr-4 text-yellow-500" />
            Certificates & <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Training</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through specialized courses and certifications 
            in cutting-edge technologies and development practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full bg-card backdrop-blur-sm border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {certificate.image_url && (
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={certificate.image_url} 
                      alt={certificate.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {certificate.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{certificate.issuer}</span>
                  </div>

                  {certificate.date_issued && (
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(certificate.date_issued).toLocaleDateString()}</span>
                    </div>
                  )}

                  {certificate.description && (
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {certificate.description}
                    </p>
                  )}

                  {certificate.skills && certificate.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/10 text-primary/90 border-0 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {certificate.image_url && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                    >
                      <a href={certificate.image_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
