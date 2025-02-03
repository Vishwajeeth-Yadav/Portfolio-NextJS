"use client";

import { ArrowRight, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const designations = ["MERN STACK Developer", "Programming Enthusiast", "Adaptive and Reliable"];
  const [designationIndex, setDesignationIndex] = useState(0);

  useEffect(() => {
    const currentDesignation = designations[designationIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentDesignation.slice(0, displayText.length + 1));
        if (displayText.length === currentDesignation.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentDesignation.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setDesignationIndex((prev) => (prev + 1) % designations.length);
        }
      }
    }, isDeleting ? 40 : 120); // Faster deletion speed

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, designationIndex]);

  return (
    <main className="min-h-screen relative overflow-hidden animated-bg">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="absolute inset-0 hexagon-bg"></div>
      <div className="relative max-w-[90rem] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-8 min-w-0">
            <div className="inline-block">
              <h1 className="text-4xl md:text-7xl font-bold text-primary glow-text">
                Vishwajeeth Yadav
              </h1>
              <div className="h-1 bg-primary mt-2 glow"></div>
            </div>

            <div className="h-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary glow-text font-mono ml-5">
                {displayText}
                <span className="animate-blink">|</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl backdrop-blur-sm bg-background/50 p-6 rounded-lg border border-primary/20 text-justify">
              Frontend Developer & MERN Stack enthusiast who values clean code, performance, and intuitive user experiences. I enjoy solving problems, learning new technologies, and refining my approach to building efficient web applications.
            </p>

            <p className="text-lg font-medium text-primary">
              Want to collaborate or have a project in mind?<span className="text-white glow-text"> Let's connect!</span>
            </p>

            <div className="flex gap-6 mt-4">
              <Link
                href="www.linkedin.com/in/vishwajeeth-yadav-39251b208"
                target="_blank"
                className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-all ease-in-out duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </Link>

              <Link
                href="https://github.com/Vishwajeeth-Yadav"
                target="_blank"
                className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-all ease-in-out duration-300"
                aria-label="GitHub"
              >
                <Github size={28} />
              </Link>

              <Link
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border border-primary/20 hover:bg-secondary/80 transition-all ease-in-out duration-300"
              >
                Download Resume
              </Link>
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:glow transition-all"
              >
                View Work
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-all ease-in-out duration-300 border border-primary/20"
              >
                For Contact
              </Link>
            </div>
          </div>

          <div className="flex-1 relative h-[calc(100vh-12rem)] md:max-w-lg">
            <Image
              src="/P_img.webp"
              alt="Profile Image"
              fill
              className="object-contain rounded-lg border-4 border-primary/50 shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
