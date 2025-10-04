import { Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I'm passionate about bridging the gap between complex data and real-world solutions. My journey started with curiosity about how machines can learn patterns from data, and it's evolved into building ML applications that solve actual problems.
            </p>
            <p>
              What drives me is the moment when a model finally clicks—when months of data preprocessing, feature engineering, and hyperparameter tuning result in something that genuinely helps people make better decisions. Whether it's predicting salaries to help job seekers negotiate better, or building fraud detection systems to protect financial transactions.
            </p>
            <p>
              Beyond the technical work, I believe in making AI accessible. That's why I focus on clean, intuitive interfaces and clear explanations of how these "black box" models actually work.
            </p>
            <p>
              Actively participate in hackathons and datathons to push creative problem-solving and apply AI/DS in real-world contexts.
            </p>
          </div>
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
              <li>Developed a salary prediction system achieving <strong>86% accuracy</strong> using Gradient Boosting with SMOTE</li>
              <li>Performed comprehensive data preprocessing, feature engineering, and EDA on large datasets</li>
              <li>Completed IBM SkillsBuild AI/ML certification coursework</li>
            </ul>
          </div>
          
          

        </div>
      </div>
    </section>
  );
}
