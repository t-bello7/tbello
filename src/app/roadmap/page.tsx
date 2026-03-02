"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const sections = [
  {
    title: "1. Core Frontend Mastery (Months 1–2)",
    goal: "Strengthen fundamentals, enforce scalability, and improve performance.",
    focus: [
      "Deep dive into TypeScript generics, utility types, and discriminated unions.",
      "Master advanced React & Next.js patterns (compound components, render props, context composition).",
      "Explore Next.js 15+ features: server actions, streaming, app directory.",
      "Implement performance optimizations: memoization, lazy loading, bundle analysis."
    ],
    projects: [
      "Refactor an existing app to TypeScript strict mode.",
      "Build a performance monitoring dashboard that tracks metrics (FCP, TTI)."
    ],
  },
  {
    title: "2. Advanced UI/UX Implementation (Months 2–4)",
    goal: "Deliver refined, accessible, and production-grade user interfaces.",
    focus: [
      "Add keyboard navigation, ARIA roles, and prefers-reduced-motion.",
      "Create a design system using shadcn/ui or Radix UI.",
      "Document components with Storybook.",
      "Enhance UI with Framer Motion transitions and theme switching."
    ],
    projects: [
      "Build a Storybook-based design system.",
      "Implement accessible animations respecting user motion preferences."
    ],
  },
  {
    title: "3. Testing & Reliability (Months 4–6)",
    goal: "Ensure reliability and confidence in production code.",
    focus: [
      "Master Jest, React Testing Library, and Playwright for testing.",
      "Add error boundaries and Sentry logging.",
      "Automate linting, testing, and deployment via GitHub Actions or Vercel CI."
    ],
    projects: [
      "Achieve 80%+ test coverage on a major project.",
      "Set up a CI/CD pipeline with automated testing and deployment."
    ],
  },
  {
    title: "4. API & Fullstack Integration (Months 6–8)",
    goal: "Develop full understanding of frontend–backend and Web3 communication.",
    focus: [
      "Learn REST and GraphQL conventions.",
      "Use TanStack Query for data fetching and caching.",
      "Implement secure authentication with NextAuth, JWT, or OAuth.",
      "Integrate Web3 workflows with thirdweb or custom APIs."
    ],
    projects: [
      "Build a secure dashboard using GraphQL and NextAuth.",
      "Create a Web3-integrated interface for wallet display or transactions."
    ],
  },
  {
    title: "5. Leadership & System Thinking (Months 8–12)",
    goal: "Think like a senior engineer: design systems, lead teams, and communicate clearly.",
    focus: [
      "Learn architecture patterns (monorepos, microfrontends, modular design).",
      "Mentor peers and document decisions with ADRs.",
      "Write clear technical documentation and architecture proposals."
    ],
    projects: [
      "Write an architecture proposal for a scalable frontend.",
      "Host a knowledge-sharing session (demo, blog, or workshop)."
    ],
  },
];

export default function FrontendRoadmap() {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const completedSections = progress;
  const totalSections = sections.length;
  const completionRate = Math.round((completedSections / totalSections) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">
            🚀 tbello’s Frontend Developer Roadmap
          </h1>
          <p className="text-slate-400">
            From mid-level to senior in 6–12 months. Build. Lead. Innovate.
          </p>
        </header>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-300">Progress</span>
            <span className="text-sm text-slate-300">{completionRate}%</span>
          </div>
          <Progress value={completionRate} className="h-2 bg-slate-700" />
        </div>

        {sections.map((section, index) => {
          const isOpen = openSections.includes(index);
          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-slate-800 border-slate-700 rounded-2xl">
                <CardHeader
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center cursor-pointer hover:bg-slate-750 transition-colors"
                >
                  <div>
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                    <p className="text-slate-400 text-sm">{section.goal}</p>
                  </div>
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </CardHeader>
                {isOpen && (
                  <CardContent className="space-y-4 mt-2">
                    <div>
                      <h3 className="text-slate-300 font-medium mb-2">
                        Focus Areas:
                      </h3>
                      <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {section.focus.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-slate-300 font-medium mb-2">
                        Mini Projects:
                      </h3>
                      <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {section.projects.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setProgress(prev =>
                          prev < totalSections ? prev + 1 : prev
                        )
                      }
                      className="mt-3 text-xs"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" /> Mark as Complete
                    </Button>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          );
        })}

        <footer className="text-center text-slate-400 mt-8 text-sm">
          Updated October 2025 • Built for growth • Keep iterating 💪🏽
        </footer>
      </motion.div>
    </div>
  );
}
