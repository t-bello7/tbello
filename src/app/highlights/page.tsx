import Image from "next/image";
import { SectionTitle } from "@/components";
import {
  campushub,
  heroImg,
  introImg,
  tomiImage,
  dnaLogo,
  bglogo,
} from "@/assets/images";

const highlightProjects = [
  // {
  //   id: "data-lens",
  //   title: "Data Lens",
  //   description: "AI-powered insights to anticipate what the market needs next.",
  //   year: "2025",
  //   badge: "NEW",
  //   image: campushub,
  // },
  // {
  //   id: "style-guide",
  //   title: "Style Guide",
  //   description: "A color system study focused on clarity, contrast, and mood.",
  //   year: "2024",
  //   badge: "NEW",
  //   image: heroImg,
  // },
  // {
  //   id: "aperture-vision",
  //   title: "Aperture Vision",
  //   description: "Where art and photography merge to reveal cinematic stories.",
  //   year: "2025",
  //   badge: "NEW",
  //   image: introImg,
  // },
  // {
  //   id: "pouch",
  //   title: "Pouch",
  //   description: "Everyday adventures made lighter with practical product visuals.",
  //   year: "2025",
  //   badge: "NEW",
  //   image: tomiImage,
  // },
  {
    id: "dna-management",
    title: "DNA Management",
    description: "Professional cleaning and facility management services focused on reliability, spotless environments, and delivering shining satisfaction to every client.",
    year: "2024",
    badge: "NEW",
    image: dnaLogo,
  },
];

const HighlightsPage = () => {
  return (
    <section className="container mx-auto max-w-[95%] pb-[15vh]">
      <div className="pt-6 md:pt-12">
        <SectionTitle text="Highlights" />
        <p className="max-w-2xl font-Inconsolata text-sm md:text-base text-slate-600">
          A playful gallery of experimental layouts, brand explorations, and
          visual concepts made just for fun.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {highlightProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-3xl border border-dashed border-slate-200 bg-white p-5 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.5)]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-dashed border-slate-200 bg-slate-50">
              <div className="absolute left-4 top-4 z-10 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {project.title}
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <h3 className="font-Paytone text-lg text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm font-Inconsolata text-slate-600">
                {project.description}
              </p>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                <span className="rounded-full border border-slate-200 px-2 py-1">
                  {project.badge}
                </span>
                <span>{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HighlightsPage;
