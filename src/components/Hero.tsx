import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Developer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Code-style intro */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <code className="text-sm md:text-base text-muted-foreground">
            <span className="text-code-keyword">const</span>{" "}
            <span className="text-code-function">developer</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-code-string">"Md. Redwan Hossen"</span>
            <span className="text-muted-foreground">;</span>
          </code>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
          <span className="gradient-text">Md. Redwan Hossen</span>
        </h1>

        {/* Animated title */}
        <div className="h-12 md:h-16 flex items-center justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl md:text-4xl font-mono text-foreground/90">
            {displayText}
            {showCursor && <span className="text-primary animate-pulse">|</span>}
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mt-4 mb-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          4th Year BSc in Computer Science & Engineering
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <MapPin className="w-4 h-4 text-primary" />
          <span>Dhaka, Bangladesh</span>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="mailto:me.redwanhossen@gmail.com"
            className="glass-card p-3 rounded-lg hover:glow-sm transition-all duration-300 hover:scale-110 hover:border-primary/50"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
          </a>
          <a
            href="tel:01576545387"
            className="glass-card p-3 rounded-lg hover:glow-sm transition-all duration-300 hover:scale-110 hover:border-primary/50"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
          </a>
          <a
            href="https://bd.linkedin.com/in/md-redwan-hossen-685064339"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-lg hover:glow-sm transition-all duration-300 hover:scale-110 hover:border-primary/50"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
          </a>
          <a
            href="https://github.com/redwan786"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-lg hover:glow-sm transition-all duration-300 hover:scale-110 hover:border-primary/50"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
