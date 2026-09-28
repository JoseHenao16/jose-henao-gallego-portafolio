"use client";

import KnowledgeCard from "../../molecules/KnowledgeCard";
import {
  FaCode,
  FaPaintBrush,
  FaBuilding,
  FaDraftingCompass,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";

const knowledgeItems = [
  {
    icon: <FaCode />,
    title: "Web Development",
    caption: "Frontend and backend",
  },
  {
    icon: <FaPaintBrush />,
    title: "Web Applications",
    caption: "Functional, maintainable solutions",
  },
  {
    icon: <FaPalette />,
    title: "Web Mapping",
    caption: "Geospatial applications",
  },
  {
    icon: <FaBuilding />,
    title: "Backend",
    caption: "Services and APIs",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Databases",
    caption: "SQL design and queries",
  },
  {
    icon: <FaLaptopCode />,
    title: "Agile Practices",
    caption: "Scrum collaboration",
  },
];

const MyKnowledge = () => {
  return (
    <section className="w-full max-w-[970px] min-h-[653px] flex flex-col items-center text-center px-4">
      {/* Título */}
      <h2 className="text-[32px] leading-[124%] font-bold font-inter text-[var(--color-darktext)]">
        Technical Expertise
      </h2>

      {/* Descripción */}
      <p className="mt-4 w-full max-w-[620px] text-[15px] leading-[24px] font-normal text-[var(--color-graytext)]">
        Experience building web and geospatial applications across frontend
        and backend. Focused on robust, maintainable solutions and software
        development best practices.
      </p>

      {/* Cards */}
      <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
        {knowledgeItems.map((item, index) => (
          <KnowledgeCard
            key={index}
            icon={item.icon}
            title={item.title}
            caption={item.caption}
          />
        ))}
      </div>
    </section>
  );
};

export default MyKnowledge;
