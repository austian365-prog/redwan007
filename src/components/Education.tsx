import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Ahsanullah University of Science and Technology (AUST)",
    period: "2022 – Present",
    status: "4th Year",
    highlight: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka Residential Model College",
    period: "2021",
    status: "GPA: 5.00",
    highlight: false,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Nalta High School",
    period: "2019",
    status: "GPA: 5.00",
    highlight: false,
  },
  {
    degree: "Junior School Certificate (JSC)",
    institution: "K B Ashanullah Junior High School",
    period: "2016",
    status: "GPA: 5.00",
    highlight: false,
  },
  {
    degree: "Primary School Certificate (PSC)",
    institution: "K B Ashanullah Junior High School",
    period: "2013",
    status: "GPA: 5.00",
    highlight: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <code className="text-sm text-muted-foreground mb-4 block">
            <span className="text-code-comment">{"// "}</span>
            <span className="text-code-keyword">section</span>
            <span className="text-muted-foreground">::</span>
            <span className="text-code-function">education</span>
          </code>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {educationData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary glow-sm z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div
                  className={`glass-card rounded-xl p-6 hover:glow-sm transition-all duration-300 ${
                    item.highlight ? "border-primary/30" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground font-mono">{item.period}</span>
                    </div>
                    {item.status && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.highlight
                            ? "bg-primary/20 text-primary"
                            : "bg-code-string/20 text-code-string"
                        }`}
                      >
                        {item.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.degree}</h3>
                  <p className="text-muted-foreground text-sm">{item.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
