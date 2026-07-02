"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Props {
  titles: string[];
}

const CARD_META = [
  {
    gradient: "from-purple-900/90 to-purple-700/60",
    iconBg: "bg-purple-400/20",
    activeDot: "bg-purple-500",
    description:
      "Build scalable, performant interfaces with modern component-based frameworks and utility-first design systems.",
    tech: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Sass", "Tailwind CSS", "Bootstrap"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
        <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    gradient: "from-blue-900/90 to-blue-700/60",
    iconBg: "bg-blue-400/20",
    activeDot: "bg-blue-500",
    description:
      "Design robust APIs and services with typed runtimes, relational databases, and clean architectural patterns.",
    tech: ["Node.js", "Fastify", "TypeScript", "REST APIs", "PostgreSQL", "Drizzle ORM", "JWT"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
        <path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3Z" /><path d="M10 17v-4" /><path d="M14 17v-7" /><path d="M5 10h14" />
      </svg>
    ),
  },
  {
    gradient: "from-green-900/90 to-teal-700/60",
    iconBg: "bg-green-400/20",
    activeDot: "bg-green-500",
    description:
      "Deploy and maintain cloud infrastructure, automate CI/CD pipelines, and containerize apps for reliable delivery.",
    tech: ["GCP", "Cloud Run", "Cloud SQL", "Docker", "Azure DevOps", "CI/CD", "GitHub Actions"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-300">
        <path d="m3.5 8.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 1.2a2 2 0 0 0-2 0L3.5 5.3a2 2 0 0 0 0 3.4Z" /><path d="m3.5 14.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 7.2a2 2 0 0 0-2 0L3.5 11.3a2 2 0 0 0 0 3.4Z" /><path d="m3.5 20.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 13.2a2 2 0 0 0-2 0l-7.5 4.1a2 2 0 0 0 0 3.4Z" />
      </svg>
    ),
  },
  {
    gradient: "from-pink-900/90 to-rose-700/60",
    iconBg: "bg-pink-400/20",
    activeDot: "bg-pink-500",
    description:
      "Integrate large language models and generative AI APIs into products, from prompt engineering to full agent pipelines.",
    tech: ["OpenAI API", "Gemini API", "LLM Integration", "Prompt Engineering", "RAG", "AI Agents"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-300">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12 2.1 9.7" /><path d="M12 12V2" />
      </svg>
    ),
  },
];

const COUNT = CARD_META.length;
// Extended track: [last, 0, 1, 2, 3, first] — enables infinite wrap without jumps
const EXTENDED = [COUNT - 1, 0, 1, 2, 3, 0];

export default function SkillsCarousel({ titles }: Props) {
  const [displayIndex, setDisplayIndex] = useState(1); // 1 = real first card
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const isAnimating = useRef(false);

  const activeIndex =
    displayIndex === 0 ? COUNT - 1
    : displayIndex === COUNT + 1 ? 0
    : displayIndex - 1;

  const goNext = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setAnimated(true);
    setDisplayIndex((p) => p + 1);
  }, []);

  const goPrev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setAnimated(true);
    setDisplayIndex((p) => p - 1);
  }, []);

  const goTo = useCallback((idx: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setAnimated(true);
    setDisplayIndex(idx + 1);
  }, []);

  // After sliding to a clone, snap silently to the real card
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName !== "transform") return;
      if (displayIndex === COUNT + 1) {
        setAnimated(false);
        setDisplayIndex(1);
      } else if (displayIndex === 0) {
        setAnimated(false);
        setDisplayIndex(COUNT);
      } else {
        isAnimating.current = false;
      }
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [displayIndex]);

  // Re-enable animation on the frame after the silent snap, then unlock navigation
  useEffect(() => {
    if (animated) return;
    const id = requestAnimationFrame(() => {
      setAnimated(true);
      isAnimating.current = false;
    });
    return () => cancelAnimationFrame(id);
  }, [animated]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(goNext, 4500);
    return () => clearInterval(intervalRef.current);
  }, [goNext, paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Wrapper gives positioning context for arrows without being affected by overflow-hidden */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(-${displayIndex * 100}%)`,
              transition: animated ? "transform 500ms ease-in-out" : "none",
            }}
          >
            {EXTENDED.map((cardIdx, i) => {
              const meta = CARD_META[cardIdx];
              return (
                <div key={i} className="flex-none w-full">
                  <div className="card overflow-hidden flex flex-col md:flex-row min-h-[280px]">
                    <div className={`bg-gradient-to-br ${meta.gradient} p-8 md:w-2/5 flex flex-col justify-between gap-8`}>
                      <div className={`w-14 h-14 rounded-2xl ${meta.iconBg} flex items-center justify-center`}>
                        {meta.icon}
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">What I build</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{titles[cardIdx]}</h3>
                      </div>
                    </div>

                    <div className="p-8 md:w-3/5 flex flex-col justify-between gap-6">
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">{meta.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {meta.tech.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 hidden md:flex items-center justify-center text-white transition-colors duration-200"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
        </button>

        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 hidden md:flex items-center justify-center text-white transition-colors duration-200"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {CARD_META.map((meta, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? `w-8 ${meta.activeDot}` : "w-2 bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
