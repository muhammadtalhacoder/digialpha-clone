import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@fursuitdesignx.com" },
    { icon: MessageCircle, label: "Discord", value: "FurSuitDesignX#0001" },
    { icon: MapPin, label: "Location", value: "Worldwide Service" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CursorEffect />
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
          <motion.div 
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl text-center tracking-wider text-gradient mb-6">
                CONTACT US
              </h1>
              <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
                Ready to bring your character to life? Get in touch with us!
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 pb-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollReveal direction="left">
                <div className="bg-card rounded-xl border border-border/50 p-8">
                  <h2 className="font-display text-3xl mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What's this about?"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        className="bg-secondary border-border resize-none"
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full">
                      {loading ? "Sending..." : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-3xl mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Have questions about our services? Want to discuss a custom project? 
                      We'd love to hear from you! Fill out the form or reach us directly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
                    <h3 className="font-display text-xl mb-2">Quick Response</h3>
                    <p className="text-muted-foreground text-sm">
                      We typically respond within 24 hours. For urgent inquiries, 
                      reach out to us on Discord for faster response!
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
