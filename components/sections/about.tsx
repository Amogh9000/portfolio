import { Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
          <p className="text-muted leading-relaxed">
            I’m an AI & Data Science engineer who loves turning data into actionable insights and deploying models that make an impact. I enjoy designing clean, minimalist interfaces that make technology simple and accessible for everyone.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="glass rounded-lg p-4">
              <div className="text-3xl font-semibold">3+</div>
              <div className="text-xs text-muted">Machine Learning Projects</div>
            </div>
          </div>
        </div>
        <div className="glass rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="h-4 w-4" />
            <h3 className="text-sm tracking-wide uppercase">Experience</h3>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="font-medium">AI/ML Intern, Edunet Foundation</p>
              <span className="text-xs text-muted">Jun–Jul 2025</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted space-y-1">
              <li>Was tasked with developing a salary prediction system using Machine learning models</li>
              <li>Performed data preprocessing, feature engineering, and exploratory data analysis (EDA); Achieved 86% accuracy from the Gradient Boosting model using SMOTE</li>
              <li>Completed coursework from IBM SkillsBuild training</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
