import { ExternalLink, Shield, Rocket, NotebookText } from "lucide-react";
import { Tilt } from "@/components/ui/tilt";

type Project = {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Credifi — AI-Powered DeFi Lending",
    description:
      "Credifi is a smart finance app that helps users track expenses, manage budgets, and make informed financial decisions. Built with a credit risk XGBoost model, Solidity smart contracts via Web3.py, SHAP explainability, and a Streamlit UI.",
    icon: Shield,
    tech: ["Python", "XGBoost", "Solidity", "Web3.py", "Streamlit", "SHAP"],
  },
  {
    title: "PaperLens - Scalable OMR evaluation system",
    description:
      "PaperLens is a smart, scalable solution that automates OMR exam sheet evaluation with speed and precision, helping institutions cut errors, save time, and deliver instant results.",
    icon: NotebookText,
    tech: ["Streamlit","Pandas","Numpy","OpenCV","Pillow","PyMuPDF","OpenPyXL"],
  },
  {
    title: "Salary Prediction Web App",
    description:
      "Interactive Streamlit with model comparison, confidence scores, and job platform links.",
    icon: Rocket,
    tech: ["Python", "Streamlit", "scikit-learn", "Pandas", "Matplotlib"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            p.link ? (
              <Tilt key={p.title} className="will-transform">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative glass rounded-xl p-5 border border-white/10 overflow-hidden transition-transform will-transform hover:scale-[1.02]"
                aria-label={p.title}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent" />
                <div className="flex items-start gap-3">
                  <p.icon className="h-5 w-5 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{p.title}</h3>
                      <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-sm text-muted line-clamp-3">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/15">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
              </Tilt>
            ) : (
              <Tilt key={p.title} className="will-transform">
              <div
                className="group relative glass rounded-xl p-5 border border-white/10 overflow-hidden"
                aria-label={p.title}
                role="article"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent" />
                <div className="flex items-start gap-3">
                  <p.icon className="h-5 w-5 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted line-clamp-3">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/15">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </Tilt>
            )
          ))}
        </div>
      </div>
    </section>
  );
}


