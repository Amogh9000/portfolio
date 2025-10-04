import { ChevronRight } from "lucide-react";

const categories = [
  { 
    title: "Languages", 
    items: [
      { name: "Python", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "HTML/CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Beginner" }
    ] 
  },
  { 
    title: "ML & Data", 
    items: [
      { name: "scikit-learn", level: "Intermediate" },
      { name: "Pandas", level: "Intermediate" },
      { name: "NumPy", level: "Advanced" },
      { name: "OpenCV", level: "Beginner" },
      { name: "SHAP", level: "Beginner" },
      { name: "Matplotlib", level: "Advanced" },
      { name: "Seaborn", level: "Advanced" }
    ] 
  },
  { 
    title: "Deployment & Tools", 
    items: [
      { name: "Streamlit", level: "Intermediate" },
      { name: "Tableau", level: "Intermediate" },
      { name: "Vercel", level: "Beginner" },
      { name: "Git/GitHub", level: "Intermediate" },
      { name: "AWS", level: "Beginner" }
    ] 
  },
  { 
    title: "Database", 
    items: [
      { name: "MySQL", level: "Intermediate" },
      { name: "SSMS", level: "Intermediate" }
    ] 
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="group glass rounded-xl p-5 border border-white/10 transition-shadow hover:shadow-[0_0_0_1px_RGBA(255,255,255,0.2)]">
              <h3 className="font-medium">{c.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.items.map((item) => (
                  <li key={item.name} className="text-sm text-muted">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2">
                        <ChevronRight className="h-3 w-3" />
                        {item.name}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.level === 'Advanced' ? 'bg-green-500/20 text-green-400' :
                        item.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {item.level}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


