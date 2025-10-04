type Cert = { title: string; issuer: string; date: string };

const certs: Cert[] = [
  { title: "OCI 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "Sep 2025" },
  { title: "Associate Data Analyst", issuer: "DataCamp", date: "Sep 2025" },
  { title: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", date: "Jul 2025" },
  { title: "Data Analytics Virtual Internship", issuer: "Forage/Deloitte", date: "Jul 2025" },
  { title: "Python Data Structures", issuer: "Coursera", date: "Apr 2024" },
  { title: "Using Python to Access Data", issuer: "Coursera", date: "Dec 2024" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 p-5 transition-colors hover:border-white/25">
              <div className="font-medium">{c.title}</div>
              <div className="text-sm text-muted">{c.issuer}</div>
              <div className="text-xs text-muted mt-1">{c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


