"use client";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  skills: string[];
  isActive?: boolean;
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  highlights,
  skills,
  isActive = false,
}: ExperienceCardProps) {
  return (
    <div className={`card relative pl-8 ${isActive ? "border-l-2 border-l-purple-500" : ""}`}>
      {/* Timeline dot */}
      <div
        className={`absolute left-[-10px] top-6 w-5 h-5 rounded-full border-4 ${
          isActive ? "border-purple-500 bg-purple-900" : "border-blue-500 bg-blue-900"
        }`}
      ></div>

      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-purple-400 font-medium">{company}</span>
        <span className="text-gray-400 text-sm">{period}</span>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      {highlights && highlights.length > 0 && (
        <ul className="mb-4 space-y-1">
          {highlights.map((item, index) => (
            <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-purple-500 mt-1 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 text-xs bg-blue-900/30 text-blue-200 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      {isActive && (
        <div className="absolute top-0 right-0 px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded-bl-lg rounded-tr-lg">
          Current
        </div>
      )}
    </div>
  );
}
