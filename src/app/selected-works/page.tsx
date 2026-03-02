"use client";
import Image from "next/image";
import { SectionTitle } from "@/components";
import { afaaslogo, campushublogo, ensomlogo } from "@/assets/images";

const selectedWorks = [
  {
    id: "afaas",
    title: "AFAAS Agriculture Suite",
    description:
      "A mobile workflow for farm operators to plan crops, manage livestock, and keep teams aligned in the field.",
    role: "Product Strategy / Mobile",
    tags: ["Agriculture", "Operations", "Mobile App"],
    image: afaaslogo,
    status: "shipped",
    cardBackground: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
    cardLabel: "Field Ops",
  },
  {
    id: "campushub",
    title: "Campush Hub",
    description:
      "An ecommerce experience connecting students with curated essentials, fast delivery, and smart recommendations.",
    role: "Marketplace / Growth",
    tags: ["Ecommerce", "Mobile", "Marketplace"],
    image: campushublogo,
    status: "in-progress",
    cardBackground: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    cardLabel: "Student Commerce",
  },
  {
    id: "ensom",
    title: "enSOM",
    description:
      "A productivity suite for telecom field engineers to monitor infrastructure, track tasks, and stay compliant.",
    role: "Productivity / Telecom",
    tags: ["Telecommunications", "Field Ops", "SaaS"],
    image: ensomlogo,
    status: "shipped",
    cardBackground: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)",
    cardLabel: "Workflow Suite",
  },
];

const SelectedWorks = () => {
  return (
    <section className="container mx-auto max-w-[95%] pb-[15vh]">
      <div className="pt-6 md:pt-12">
        <SectionTitle text="Selected Works" />
        <p className="max-w-2xl font-Inconsolata text-sm md:text-base text-slate-600">
          A curated look at the products, experiments, and platforms I have helped
          bring to life. The layout keeps the focus on the story while the visuals
          do the heavy lifting.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {selectedWorks.map((work) => {
          const statusColor =
            work.status === "shipped" ? "bg-emerald-500" : "bg-amber-500";
          const statusLabel =
            work.status === "shipped" ? "Shipped" : "In Progress";

          return (
            <div
              key={work.id}
              className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]"
            >
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                  <span>{work.role}</span>
                  <span className="inline-flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${statusColor}`} />
                    {statusLabel}
                  </span>
                </div>
                <h3 className="mt-5 font-Paytone text-2xl text-slate-900 md:text-3xl">
                  {work.title}
                </h3>
                <p className="mt-3 font-Inconsolata text-sm text-slate-600 md:text-base">
                  {work.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 md:text-xs">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
             
              </div>

              <div
                className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-3xl p-8 md:min-h-[280px] md:p-10"
                style={{ background: work.cardBackground }}
              >
                <div className="absolute -right-14 -top-16 h-40 w-40 rounded-full bg-white/15" />
                <div className="absolute -left-16 bottom-6 h-40 w-40 rounded-full bg-black/20" />
                <div className="absolute left-6 top-6 text-xs uppercase tracking-[0.35em] text-white/70">
                  {work.cardLabel}
                </div>
                <div className="relative w-full max-w-[360px]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={500}
                    height={380}
                    className="h-auto w-full -rotate-6 rounded-2xl bg-white/10 object-contain shadow-2xl drop-shadow-xl"
                  />
                </div>
                <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SelectedWorks;
