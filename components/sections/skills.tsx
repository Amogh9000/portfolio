import { ChevronRight } from "lucide-react";

const categories = [
  { title: "Languages", items: ["Python", "C", "HTML/CSS", "JavaScript"] },
  { title: "ML & Data", items: ["scikit-learn", "Pandas", "NumPy", "XGBoost", "SHAP", "Matplotlib", "Seaborn"] },
  { title: "Deployment", items: ["Streamlit", "Tableau", "Vercel"] },
  { title: "Database", items: ["MySQL", "SSMS"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="group glass rounded-xl p-5 border border-white/10 transition-shadow hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
              <h3 className="font-medium">{c.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="text-sm text-muted inline-flex items-center gap-2">
                    <ChevronRight className="h-3 w-3 opacity-60" /> {i}
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


