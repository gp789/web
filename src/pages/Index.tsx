import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Users, Target, TrendingUp, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-consulting.jpg";
import itImage from "@/assets/it-consulting.jpg";
import managementImage from "@/assets/management-consulting.jpg";
import gpLogo from "@/assets/gp-logo.png";
import expertTeamIcon from "@/assets/expert-team-icon.png";
import tailoredSolutionsIcon from "@/assets/tailored-solutions-icon.png";
import provenResultsIcon from "@/assets/proven-results-icon.png";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let the form submit naturally to FormSubmit.co
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Logo */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
          <img src={gpLogo} alt="Gemma Partners Logo" className="w-14 h-14" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg" style={{ 
              textShadow: '2px 2px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1), 1px -1px 0px rgba(255,255,255,0.1), -1px 1px 0px rgba(255,255,255,0.1), 1px 1px 0px rgba(255,255,255,0.1)' 
            }}>
              Transform Your Business
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow">
              Gemma Partners
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90" style={{ 
            textShadow: '1px 1px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1), 1px -1px 0px rgba(255,255,255,0.1), -1px 1px 0px rgba(255,255,255,0.1)' 
          }}>
            Expert IT and Management Consulting Services that Drive Growth, Innovation, and Operational Excellence
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 shadow-hero hover:shadow-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              Contact us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-section-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver comprehensive consulting solutions that empower businesses to achieve their strategic objectives and operational goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="group shadow-card hover:shadow-hero transition-all duration-500 border-0 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={itImage} 
                  alt="IT Consulting Services" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <Globe className="h-8 w-8 mb-2" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-primary">IT Consulting</CardTitle>
                <CardDescription className="text-lg">
                  Transform your technology infrastructure with cutting-edge solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Mobile App Consulting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Digital Transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Cloud Migration & Infrastructure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group shadow-card hover:shadow-hero transition-all duration-500 border-0 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={managementImage} 
                  alt="Management Consulting Services" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <TrendingUp className="h-8 w-8 mb-2" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-primary">Management Consulting</CardTitle>
                <CardDescription className="text-lg">
                  Strategic guidance to optimize operations and drive sustainable growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Strategic Planning & Execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Organizational Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Process Optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose Gemma Partners?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine deep industry expertise with innovative approaches to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-hero transition-all duration-300 relative overflow-hidden">
                <img src={expertTeamIcon} alt="Expert Team" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Expert Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our consultants bring decades of combined experience across diverse industries and technical domains.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-hero transition-all duration-300 relative overflow-hidden">
                <img src={tailoredSolutionsIcon} alt="Tailored Solutions" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Tailored Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every engagement is customized to your specific needs, challenges, and business objectives.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-hero transition-all duration-300 relative overflow-hidden">
                <img src={provenResultsIcon} alt="Proven Results" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Proven Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                We deliver measurable outcomes that drive sustainable growth and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 bg-section-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Transform Your Business Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to take your business to the next level? Get in touch with our expert consultants today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-foreground">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@gemma-partners.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 646 926 0897</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      1621 Central Avenue<br />
                      Cheyenne, WY 82001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-card border-0">
              <form 
                action="https://formsubmit.co/info@gemma-partners.com" 
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* FormSubmit.co configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Gemma Partners" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a message</CardTitle>
                  <CardDescription>
                    We'll get back to you within 24 hours to discuss your consulting needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                       <Input 
                         id="firstName" 
                         name="firstName"
                         placeholder="John" 
                         value={formData.firstName}
                         onChange={(e) => handleInputChange('firstName', e.target.value)}
                         required
                       />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                       <Input 
                         id="lastName" 
                         name="lastName"
                         placeholder="Doe" 
                         value={formData.lastName}
                         onChange={(e) => handleInputChange('lastName', e.target.value)}
                         required
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                     <Input 
                       id="email" 
                       name="email"
                       type="email" 
                       placeholder="john@company.com" 
                       value={formData.email}
                       onChange={(e) => handleInputChange('email', e.target.value)}
                       required
                     />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                     <Input 
                       id="company" 
                       name="company"
                       placeholder="Your Company" 
                       value={formData.company}
                       onChange={(e) => handleInputChange('company', e.target.value)}
                     />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                     <Textarea 
                       id="message" 
                       name="message"
                       placeholder="Tell us about your consulting needs and how we can help..."
                       rows={5}
                       value={formData.message}
                       onChange={(e) => handleInputChange('message', e.target.value)}
                       required
                     />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full text-black bg-hero-gradient hover:shadow-hero hover:bg-hero-gradient/90 transition-all duration-300" 
                    size="lg"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-lg opacity-80 mb-6">
              Transforming businesses through expert IT and management consulting
            </p>
            <div className="flex justify-center space-x-8 text-lg opacity-70">
              <span>© 2014-2025 Gemma Partners. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;