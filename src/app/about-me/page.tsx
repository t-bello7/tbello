import Image from "next/image";
import Link from "next/link";
import {
  bglogo,
  aiicoLogo,
  extendedLogo,
  hngLogo,
  tomiImage,
} from "@/assets/images";

const AboutMe = () => {
  const workExperience = [
    {
      id: "rwwrwr",
      title: "Software Developer",
      company: "Babbangona",
      timeline: "February 2024 - Present",
      description:
        "Building web applications that streamline agricultural operations and field reporting.",
      image: bglogo,
      liveUrl: "https://babbangona.com",
    },
    {
      id: "rwwr",
      title: "Frontend Developer",
      company: "Extended Networks",
      timeline: "September 2023 - December 2023",
      description:
        "Crafted responsive web interfaces and improved UX for enterprise telecom clients.",
      image: extendedLogo,
      liveUrl: "https://extendednetworks.net",
    },
    {
      id: "qeqe",
      title: "Frontend Intern",
      company: "Hotels.ng Internship",
      timeline: "Jan 2017 - Dec 2017",
      description: "Assisted in building and testing production web features.",
      image: hngLogo,
      liveUrl: "https://hng.tech/",
    },
    {
      id: "qeq",
      title: "IT Support",
      company: "AIICO Insurance Company",
      timeline: "Jan 2016 - Dec 2016",
      description: "Provided technical support and infrastructure troubleshooting.",
      image: aiicoLogo,
      liveUrl: "https://www.aiicoplc.com/",
    },
  ];

  const mainStack = [
    { id: "figma", label: "Figma", tone: "from-pink-500 via-rose-400 to-indigo-500", short: "Fi" },
    { id: "sketch", label: "Sketch", tone: "from-amber-400 via-orange-400 to-rose-500", short: "Sk" },
    { id: "photoshop", label: "Photoshop", tone: "from-sky-500 via-blue-500 to-indigo-600", short: "Ps" },
    { id: "framer", label: "Framer", tone: "from-slate-800 via-slate-700 to-slate-900", short: "Fr" },
  ];

  return (
    <section className="container mx-auto max-w-[95%] pb-[15vh]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_45px_120px_-80px_rgba(15,23,42,0.45)] md:p-10">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[360px]">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#f3f1ff] via-white to-[#f3f6ff]" />
              <div className="relative rounded-[32px] border-4 border-white p-6 shadow-[0_30px_80px_-60px_rgba(99,102,241,0.4)]">
                <Image
                  src={tomiImage}
                  alt="A picture of Tomi"
                  className="h-auto w-full rounded-[24px] border border-[#c7c5ff] bg-white object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h2 className="font-Paytone text-2xl text-slate-900 md:text-3xl">
              Oluwatomisin Bello
            </h2>
            <p className="mt-2 font-Inconsolata text-sm text-slate-500 md:text-base">
              bello4aus@outlook.com
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Download CV
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="relative rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_40px_100px_-70px_rgba(15,23,42,0.35)] md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="font-Paytone text-3xl text-transparent md:text-4xl bg-[linear-gradient(98.96deg,#391E2F_7.25%,#6767b6_90.66%)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                About Me
              </h1>
              <span className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8.5l2.5 2.5L12 5.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Open to work
              </span>
            </div>
            <div className="mt-6 space-y-4 font-Inconsolata text-sm text-slate-600 md:text-base">
              <p>
                I build scalable digital products with JavaScript, TypeScript,
                React, and Node.js. My focus is shaping experiences that feel
                intuitive while keeping the engineering foundations solid.
              </p>
              <p>
                I enjoy partnering with founders and teams to translate ambitious
                ideas into shipped products, whether that means defining product
                flows or refining the details that help users trust the work.
              </p>
            </div>
            <div className="pointer-events-none absolute -right-10 top-10 hidden h-28 w-28 items-center justify-center rounded-full border border-slate-200 text-[0.55rem] uppercase tracking-[0.4em] text-slate-400 lg:flex">
              Remote friendly
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_40px_100px_-70px_rgba(15,23,42,0.3)] md:p-10">
            <h3 className="font-Paytone text-xl text-slate-900 md:text-2xl">
              Latest Roles
            </h3>
            <div className="mt-6 space-y-5">
              {workExperience.slice(0, 2).map((role) => (
                <div key={role.id} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                    <Image
                      src={role.image}
                      alt={role.company}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">
                      {role.title}
                    </h4>
                    <p className="text-sm text-slate-500">{role.company}</p>
                    <p className="text-xs text-slate-400">{role.timeline}</p>
                    <Link
                      href={role.liveUrl}
                      className="mt-2 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-slate-900">Main Stack</h4>
              <div className="mt-4 flex flex-wrap gap-4">
                {mainStack.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.tone} text-sm font-semibold text-white shadow-md`}
                    >
                      {tool.short}
                    </div>
                    <span className="text-xs text-slate-500">{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
