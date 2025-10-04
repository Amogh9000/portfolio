"use client";

import { ExternalLink, Shield, Rocket, NotebookText, Github, Eye } from "lucide-react";
import { Tilt } from "@/components/ui/tilt";

type Project = {
  title: string;
  description: string;
  impact: string;
  icon: React.ComponentType<{ className?: string }>;
  tech: string[];
  github?: string;
  demo?: string;
  status: "completed" | "in-progress" | "planned";
};

const projects: Project[] = [
  {
    title: "Credifi — AI-Powered DeFi Lending",
    description:
      "Revolutionary DeFi lending platform combining traditional credit risk assessment with blockchain technology. Features XGBoost ML models for credit scoring, Solidity smart contracts for automated lending, and SHAP explainability for transparent decision-making.",
    impact: "Built end-to-end ML pipeline with 92% accuracy in credit risk prediction, integrated with Web3 for decentralized lending",
    icon: Shield,
    tech: ["Python", "XGBoost", "Solidity", "Web3.py", "Streamlit", "SHAP"],
    github: "https://github.com/Amogh9000/credifi",
    status: "completed",
  },
  {
    title: "PaperLens - Scalable OMR Evaluation System",
    description:
      "Intelligent OMR sheet processing system that automates exam evaluation with computer vision. Handles multiple choice questions, bubble detection, and generates detailed analytics reports for educational institutions.",
    impact: "Processes 1000+ sheets in under 5 minutes with 98% accuracy, reducing manual evaluation time by 95%",
    icon: NotebookText,
    tech: ["Python", "OpenCV", "Streamlit", "Pandas", "NumPy", "Pillow", "PyMuPDF"],
    github: "https://github.com/Amogh9000/PaperLens",
    demo: "https://paperlens.streamlit.app/",
    status: "completed",
  },
  {
    title: "Salary Prediction Web App",
    description:
      "Interactive ML web application that predicts software engineer salaries based on experience, location, and skills. Features model comparison, confidence intervals, and integration with job platforms for real-time market insights.",
    impact: "Achieved 86% accuracy using Gradient Boosting with SMOTE, helping 500+ users negotiate better salaries",
    icon: Rocket,
    tech: ["Python", "Streamlit", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Amogh9000/salarypred",
    demo: "https://salarypred-ggs.streamlit.app/",
    status: "completed",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Tilt key={p.title} className="will-transform">
             <div className="group relative glass rounded-xl p-5 border border-white/10 overflow-hidden transition-transform hover:translate-y-[-4px]">
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  p.title.includes('Credifi') ? 'bg-blue-500/20 text-blue-400' :
                  p.title.includes('PaperLens') ? 'bg-green-500/20 text-green-400' :
                    'bg-blue-500/20 text-blue-400'
                        }`}>
                    {p.title.includes('Credifi') ? 'Completed' : 
                    p.title.includes('PaperLens') ? 'Live App' : 
                      'Live App'}
                    </span>
                </div>

                <div className="flex items-start gap-3">
                  <p.icon className="h-5 w-5 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-medium pr-16">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{p.description}</p>
                    
                    {/* Impact Statement */}
                    <div className="mt-2 p-2 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-xs text-green-400 font-medium">Impact: {p.impact}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/15">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 flex gap-2 relative z-10">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-3 w-3" />
                          Code
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 text-xs bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Eye className="h-3 w-3" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}


