import { Code, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C#", level: 90, highlight: true },
      { name: ".NET Core", level: 85, highlight: true },
      { name: "ASP.NET MVC", level: 85, highlight: true },
      { name: "PHP", level: 75, highlight: false },
      { name: "JavaScript", level: 70, highlight: false },
      { name: "Java", level: 65, highlight: false },
      { name: "C/C++", level: 70, highlight: false },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: [
      { name: ".NET Core Web API", level: 85, highlight: true },
      { name: "Entity Framework", level: 80, highlight: true },
      { name: "Visual Studio", level: 85, highlight: false },
      { name: "VS Code", level: 90, highlight: false },
      { name: "Git & GitHub", level: 80, highlight: false },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MS SQL Server", level: 80, highlight: true },
      { name: "MySQL", level: 75, highlight: false },
    ],
  },
  {
    title: "Other Skills",
    icon: Brain,
    skills: [
      { name: "Data Structures & Algorithms", level: 80, highlight: false },
      { name: "OOP", level: 85, highlight: false },
      { name: "Project Management", level: 70, highlight: false },
      { name: "HTML5/CSS", level: 80, highlight: false },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="text-sm text-muted-foreground mb-4 block">
            <span className="text-code-comment">{"// "}</span>
            <span className="text-code-keyword">section</span>
            <span className="text-muted-foreground">::</span>
            <span className="text-code-function">skills</span>
          </code>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Technical Skills</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass-card rounded-xl p-6 hover:glow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-mono">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-sm font-medium ${
                          skill.highlight ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? "bg-gradient-to-r from-primary to-primary/60"
                            : "bg-muted-foreground/50"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-12">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold font-mono mb-6 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-lg bg-primary/10 border border-primary/20">
                <span className="font-medium text-foreground">Bangla</span>
                <span className="text-muted-foreground text-sm ml-2">— Native</span>
              </div>
              <div className="px-6 py-3 rounded-lg bg-secondary border border-border">
                <span className="font-medium text-foreground">English</span>
                <span className="text-muted-foreground text-sm ml-2">— Good</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
