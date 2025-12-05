import { Target, Code2, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="text-sm text-muted-foreground mb-4 block">
            <span className="text-code-comment">{"// "}</span>
            <span className="text-code-keyword">section</span>
            <span className="text-muted-foreground">::</span>
            <span className="text-code-function">about</span>
          </code>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
        </div>

        {/* About content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Objective card */}
          <div className="glass-card rounded-xl p-8 hover:glow-sm transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-mono">Objective</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Motivated and dedicated CSE student with a strong interest in software development, 
              web technologies, and teaching. Skilled in <span className="text-primary font-medium">C#</span>, 
              <span className="text-primary font-medium"> .NET Core</span>, 
              <span className="text-primary font-medium"> PHP</span>, and 
              <span className="text-primary font-medium"> JavaScript</span>. 
              Seeking opportunities in software development where I can apply my technical and analytical skills effectively.
            </p>
          </div>

          {/* Focus areas */}
          <div className="glass-card rounded-xl p-8 hover:glow-sm transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-mono">Focus Areas</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary font-mono text-lg">→</span>
                <div>
                  <h4 className="font-medium text-foreground">.NET Development</h4>
                  <p className="text-sm text-muted-foreground">Building robust web applications with ASP.NET Core MVC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-mono text-lg">→</span>
                <div>
                  <h4 className="font-medium text-foreground">Backend Engineering</h4>
                  <p className="text-sm text-muted-foreground">API development, database design, and server-side logic</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-mono text-lg">→</span>
                <div>
                  <h4 className="font-medium text-foreground">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">End-to-end application development with modern technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: "4th", label: "Year Student" },
            { value: "5.00", label: "GPA (HSC & SSC)" },
            { value: "6+", label: "Technologies" },
            { value: "∞", label: "Passion for Code" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 text-center hover:glow-sm transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
