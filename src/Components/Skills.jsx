import React from 'react';

const skillsData = {
  programmingLanguages: ['JavaScript', 'Python', 'C++', 'C'],
  frontend: ['Nextjs', 'Reactjs','DaisyUI',"Astro", 'Shadcn UI', 'Tailwind CSS', 'HTML', 'CSS'],
  backend: ['Nodejs', 'Expressjs'],
  database: ['MongoDB', 'MySQL(Beginner)'],
  cloud: ['Netlify', 'Vercel', 'Firebase'],
  tools: [
    'JWT',
    'VS Code',
    'EmailJS',
    'Git & Github'
  ]
};

const SkillSection = ({ title, icon, items }) => (
  <div data-aos="fade-up" data-aos-duration="2000" className="mb-6 border border-chart-4 p-4 rounded-lg">
    <h2  className="text-lg font-bold flex items-center gap-2">
      {icon} {title}
    </h2>
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => (
        <span key={item} className=" glass px-3 py-1 rounded-full text-sm">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="rounded-xl mt-10 mb-20 b mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 animate__animated animate__rotateInDownLeft">
        🛠️ Skills
      </h1>
      <SkillSection title="Programming Languages" icon="💻" items={skillsData.programmingLanguages} />
      <SkillSection title="Frontend Development" icon="🎨" items={skillsData.frontend} />
      <SkillSection title="Backend Development" icon="⚙️" items={skillsData.backend} />
      <SkillSection title="Database & Storage" icon="🗄️" items={skillsData.database} />
      <SkillSection title="Cloud & DevOps" icon="☁️" items={skillsData.cloud} />
      <SkillSection title="Tools & Services" icon="🧰" items={skillsData.tools} />
    </div>
  );
};

export default Skills;
