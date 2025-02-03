import { GraduationCap, Briefcase, Award } from "lucide-react";
import Image from "next/image";

const skills = [
  { skill: "JavaScript", icon:"/js.png"   },
  { skill: "TypeScript",icon:"/tsx.png"   },
  { skill: "MERN Stack",icon:"/mern.svg"  },
  // { skill: "React.js",icon:"/react.png"   },
  { skill: "Next.js",icon:"/nextjs.png"   },
  // { skill: "Node.js",icon:"/node.svg"   },
  { skill: "Python",icon:"/python.svg"   },
  { skill: "SQL/MySQL",icon:"/db.svg"  },
  { skill: "Git",icon:"/git.webp"  },
  { skill: "Interpersonal Skills",icon:"/soft1.png"   },
  { skill: "Adaptability",icon:"/soft2.png"   }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[90rem] mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-12">About Me ...</h1>

        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h2>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-semibold">Bachelor of Technology <span className="text-muted-foreground">in Computer Science and Engineering</span></h3>
                <p className="text-muted-foreground">Malla Reddy Institue of Technology and Science</p>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
                <p className="text-sm text-muted-foreground">CGPA - 7.81</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="text-primary" />
              Experience
            </h2>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-semibold">Software Developer</h3>
                <p className="text-muted-foreground">Vidyardi Institutes PVT LTD</p>
                <p className="text-sm text-muted-foreground">2024 - Present</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Being part of development of multiple full-stack applications</li>
                  <li>Researched and integrated emerging technologies, streamlining development workflows and boosting project efficiency.</li>
                  <li>Collaborated with cross-functional teams, aligning technical solutions with business objectives to successfully meet project deadlines.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-primary" />
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
              {skills.map((item) => (
                <div
                  key={item}
                  className="bg-card p-4 rounded-lg border border-primary/5  flex flex-col justify-center items-center hover:bg-accent transition-colors"
                >
                  <Image src={`${item.icon}`} alt="" width={90} height={100} className="pb-2" />
                  {item.skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}