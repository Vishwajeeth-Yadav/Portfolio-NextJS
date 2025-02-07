// import { GraduationCap, Briefcase, Award } from "lucide-react";
// import Image from "next/image";

// const skills = [
//   { skill: "JavaScript", icon:"/js.png"   },
//   { skill: "TypeScript",icon:"/tsx.png"   },
//   { skill: "MERN Stack",icon:"/mern.svg"  },
//   // { skill: "React.js",icon:"/react.png"   },
//   { skill: "Next.js",icon:"/nextjs.png"   },
//   // { skill: "Node.js",icon:"/node.svg"   },
//   { skill: "Python",icon:"/python.svg"   },
//   { skill: "SQL/MySQL",icon:"/db.svg"  },
//   { skill: "Git",icon:"/git.webp"  },
//   { skill: "Interpersonal Skills",icon:"/soft1.png"   },
//   { skill: "Adaptability",icon:"/soft2.png"   }
// ];

// export default function About() {
//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-[90rem] mx-auto px-6 py-24">
//         <h1 className="text-4xl font-bold mb-12">About Me ...</h1>

//         <div className="grid gap-12">
//           <section>
//             <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//               <GraduationCap className="text-primary" />
//               Education
//             </h2>
//             <div className="space-y-4">
//               <div className="bg-card p-6 rounded-lg">
//                 <h3 className="font-semibold">Bachelor of Technology <span className="text-muted-foreground">in Computer Science and Engineering</span></h3>
//                 <p className="text-muted-foreground">Malla Reddy Institue of Technology and Science</p>
//                 <p className="text-sm text-muted-foreground">2020 - 2024</p>
//                 <p className="text-sm text-muted-foreground">CGPA - 7.81</p>
//               </div>
//             </div>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//               <Briefcase className="text-primary" />
//               Experience
//             </h2>
//             <div className="space-y-4">
//               <div className="bg-card p-6 rounded-lg">
//                 <h3 className="font-semibold">Software Developer</h3>
//                 <p className="text-muted-foreground">Vidyardi Institutes PVT LTD</p>
//                 <p className="text-sm text-muted-foreground">2024 - Present</p>
//                 <ul className="list-disc list-inside mt-2 text-muted-foreground">
//                   <li>Being part of development of multiple full-stack applications</li>
//                   <li>Researched and integrated emerging technologies, streamlining development workflows and boosting project efficiency.</li>
//                   <li>Collaborated with cross-functional teams, aligning technical solutions with business objectives to successfully meet project deadlines.</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//               <Award className="text-primary" />
//               Skills
//             </h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
//               {skills.map((item,index) => (
//                 <div
//                   key={index}
//                   className="bg-card p-4 rounded-lg border border-primary/5  flex flex-col justify-center items-center hover:bg-accent transition-colors"
//                 >
//                   <Image src={`${item.icon}`} alt="" width={90} height={100} className="pb-2" />
//                   {item.skill}
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  GraduationCap,
  Briefcase,
  Award,
  Zap,
  Target,
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactElement } from "react";


type Skill = {
  skill: string;
  icon: string;
  category: SkillCategory;
}

type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools'

const skills = [
  { skill: "JavaScript", icon: "/js.png", category: "Frontend" },
  { skill: "TypeScript", icon: "/tsx.png", category: "Frontend" },
  { skill: "React.js", icon: "/react.png", category: "Frontend" },
  { skill: "Next.js", icon: "/nextjs.png", category: "Frontend" },
  { skill: "Node.js", icon: "/node.svg", category: "Backend" },
  { skill: "Express.js", icon: "/express.png", category: "Backend" },
  { skill: "MongoDB", icon: "/mongodb.svg", category: "Database" },
  { skill: "SQL", icon: "/SQL.png", category: "Database" },
  // { skill: "Docker", icon: "/docker.svg", category: "Tools" },
  { skill: "Git", icon: "/git.webp", category: "Tools" },
  { skill: "Windows", icon: "/win.png", category: "Tools" },
  { skill: "VS code", icon: "/vsc.png", category: "Tools" },
  { skill: "AI", icon: "/soft2.png", category: "Tools" },
];

const categoryIcons: Record<SkillCategory, ReactElement> = {
  "Frontend": <Zap className="text-blue-500" />,
  "Backend": <Target className="text-green-500" />,
  "Database": <CheckCircle className="text-purple-500" />,
  "Tools": <Award className="text-orange-500" />
};

export default function About() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-primary/10 opacity-50"></div>

      <div className="max-w-[90rem] mx-auto px-6 py-24 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-primary text-center"
        >
          About Me
        </motion.h1>

        {/* About Me Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10 mb-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Who Am I?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Vishwajeeth Yadav, a developer who loves turning ideas into functional and intuitive web experiences. I enjoy solving problems, figuring out how things work, and continuously improving my skills.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For me, coding is more than just writing logic—it’s about building something useful, making it efficient, and ensuring it works seamlessly for the user. I like experimenting with new tools, breaking things (and fixing them), and learning from every project I take on.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of coding, I’m always up for exploring new tech, refining old projects, or simply enjoying the process of learning something new. If you're someone who enjoys building cool things too, let's connect!
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full max-w-md aspect-square"
            >
              <Image
                src="/about-image.jpg"
                alt="Vishwajeeth Yadav"
                fill
                className="object-cover rounded-2xl shadow-2xl border-4 border-primary/30 hover:rotate-2 transition-transform"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-primary">
            <GraduationCap className="mr-2" />
            Education
          </h2>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Technology <span className="text-muted-foreground">in Computer Science and Engineering</span>
              </h3>
              <p className="text-muted-foreground mb-1">Malla Reddy Institute of Technology and Science</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
                <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded-full">
                  CGPA - 7.81
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold my-6 flex items-center gap-2 text-primary">
            <Briefcase className="mr-2" />
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Developer</h3>
                  <p className="text-muted-foreground">Vidyardi Institutes PVT LTD</p>
                </div>
                <span className="text-sm text-muted-foreground">2024 - Present</span>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                <li>Developing multiple full-stack applications with modern web technologies</li>
                <li>Researching and integrating emerging technologies to streamline development workflows</li>
                <li>Collaborating with cross-functional teams to align technical solutions with business objectives</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skills Section with Categorization */}
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold my-6 flex items-center gap-2 text-primary">
              <Award className="mr-2" /> Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(Object.keys(categoryIcons) as SkillCategory[]).map((category) => (
                <div key={category} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                  <div className="flex items-center gap-3 mb-4">
                    {categoryIcons[category]}
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-4 ">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-16 h-16 relative mb-2">
                            <Image
                              src={skill.icon}
                              alt={skill.skill}
                              fill
                              className="mb-2 object-contain grayscale hover:grayscale-0 transition-all"
                            /></div>
                          <span className="text-xs text-muted-foreground">{skill.skill}</span>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}