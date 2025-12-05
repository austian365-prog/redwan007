import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="text-sm text-muted-foreground mb-4 block">
            <span className="text-code-comment">{"// "}</span>
            <span className="text-code-keyword">section</span>
            <span className="text-muted-foreground">::</span>
            <span className="text-code-function">contact</span>
          </code>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships. 
            Feel free to reach out!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:me.redwanhossen@gmail.com"
            className="glass-card rounded-xl p-6 hover:glow-sm transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">me.redwanhossen@gmail.com</p>
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:01576545387"
            className="glass-card rounded-xl p-6 hover:glow-sm transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">01576545387</p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://bd.linkedin.com/in/md-redwan-hossen-685064339"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-6 hover:glow-sm transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">LinkedIn</h3>
                <p className="text-muted-foreground text-sm">md-redwan-hossen</p>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/redwan786"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-6 hover:glow-sm transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">GitHub</h3>
                <p className="text-muted-foreground text-sm">redwan786</p>
              </div>
            </div>
          </a>
        </div>

        {/* Location */}
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Based in Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
