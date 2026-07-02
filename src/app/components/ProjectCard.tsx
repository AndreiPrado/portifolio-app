"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  gradientFrom?: string;
  gradientTo?: string;
  label?: string;
  tags: string[];
  projectUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  gradientFrom = "from-purple-500/30",
  gradientTo = "to-blue-500/30",
  label,
  tags,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-t-lg flex items-center justify-center`}>
            {label && (
              <span className="text-white text-5xl font-bold opacity-30 select-none">{label}</span>
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent"></div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-4">
          {projectUrl && (
            <Link href={projectUrl} className="button-primary text-sm">
              View Project
            </Link>
          )}

          {githubUrl && (
            <Link
              href={githubUrl}
              className="button-secondary text-sm flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
