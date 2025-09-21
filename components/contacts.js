import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sohan20051519@gmail.com',
      href: 'mailto:sohan20051519@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8050130969',
      href: 'tel:+918050130969',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#',
      color: 'text-purple-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sohan2005151',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sohan2005',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a project in mind or just want to chat about technology, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <a 
                        href={contact.href}
                        className="flex items-center gap-4 group"
                        {...(contact.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 ${contact.color} group-hover:scale-110 transition-transform`}>
                          <contact.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-muted-foreground text-sm">{contact.label}</p>
                          <p className="text-card-foreground text-lg font-medium group-hover:text-primary transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-card backdrop-blur-lg border border-border rounded-lg hover:border-primary/50 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <Card className="bg-gradient-to-br from-purple-600/80 to-blue-600/80 dark:from-purple-600/30 dark:to-blue-600/30 backdrop-blur-lg border-primary/30">
              <CardContent className="p-8">
                <MessageCircle className="w-16 h-16 text-purple-300 mb-6 mx-auto lg:mx-0" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
                <p className="text-purple-200 dark:text-muted-foreground mb-6 leading-relaxed">
                  I'm available for freelance work and full-time opportunities. 
                  Let's discuss how we can bring your ideas to life with modern web technologies.
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href="mailto:sohan20051519@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send me an Email
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-primary/50 text-primary-foreground hover:bg-primary/10 hover:border-primary"
                  >
                    <a href="tel:+918050130969">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
