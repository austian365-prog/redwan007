import { Folder, ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: ".NET Core MVC Web Application",
    description:
      "A full-featured web application built with ASP.NET Core MVC framework, demonstrating proficiency in modern .NET development practices.",
    technologies: ["C#", ".NET Core", "MVC", "Entity Framework", "SQL Server"],
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="text-sm text-muted-foreground mb-4 block">
            <span className="text-code-comment">{"// "}</span>
            <span className="text-code-keyword">section</span>
            <span className="text-muted-foreground">::</span>
            <span className="text-code-function">projects</span>
          </code>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-6 hover:glow-sm transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? "md:col-span-2 lg:col-span-1 border-primary/20" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* More projects placeholder */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[250px] border-dashed border-2 border-border hover:border-primary/30 transition-colors">
            <Code2 className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-bold text-muted-foreground mb-2">More Coming Soon</h3>
            <p className="text-sm text-muted-foreground">
              Currently working on exciting new projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
