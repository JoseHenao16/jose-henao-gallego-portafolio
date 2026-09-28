"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "InnoSistemas",
    description: "Web application deployed in production.",
    details: "A web application available to the public in production.",
    image: "/img/inno_sistemas.png",
    demo: "https://inno-sistemas.vercel.app/",
  },
  {
    title: "MUUA — Digital Visualization",
    description: "Digital visualization system for the Museo Universitario (MUUA) archaeological collection.",
    details: "An academic project at Universidad de Antioquia to design a digital visualization system for the MUUA archaeological collection, aligned with ICANH Resolution 395 of 2020. No public demo is available.",
    image: "/img/muua.png",
    demo: "https://antropologia-muua.vercel.app/",
  },
  {
    title: "CoreAPI",
    description: "Microservices marketplace developed as an academic project.",
    details: "An academic microservices marketplace project developed using Scrum and two-week sprints. No public demo is available.",
    image: "/img/core_api.png",
    demo: null,
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section className="w-full max-w-[970px] mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold mb-2 text-[var(--color-darktext)]">
        Portfolio
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        A selection of academic and professional projects I have contributed to.
      </p>

      {/* Custom carousel controls */}
      <div className="relative">
        <button aria-label="Previous projects" className="swiper-button-prev absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-darktext)]">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button aria-label="Next projects" className="swiper-button-next absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-darktext)]">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Swiper carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1.2}
          spaceBetween={24}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[var(--color-fondo)] rounded-md shadow-md overflow-hidden w-full h-full">
                {project.image ? (
                  <Image
                    width={500}
                    height={300}
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div aria-hidden="true" className="flex h-48 items-center justify-center bg-[var(--color-accent)] text-3xl font-bold text-[var(--color-darktext)]">
                    {project.title.startsWith("MUUA") ? "MUUA" : "CoreAPI"}
                  </div>
                )}
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-[var(--color-darktext)]">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm my-2">
                    {project.description}
                  </p>
                  <button type="button" onClick={() => setSelectedProject(project)} className="group inline-flex items-center text-[var(--color-accent)] font-semibold hover:underline transition-all duration-300">
                    Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">&rsaquo;</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={(event) => event.target === event.currentTarget && setSelectedProject(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="project-title" className="w-full max-w-lg rounded-md bg-[var(--color-fondo)] p-6 text-left shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <h3 id="project-title" className="text-2xl font-bold text-[var(--color-darktext)]">{selectedProject.title}</h3>
              <button type="button" aria-label="Cerrar diálogo" onClick={() => setSelectedProject(null)} className="text-2xl leading-none text-[var(--color-darktext)]">×</button>
            </div>
            <p className="mt-4 text-[var(--color-graytext)]">{selectedProject.details}</p>
            {selectedProject.demo ? (
              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-md bg-[var(--color-accent)] px-4 py-2 font-semibold text-[var(--color-darktext)]">View project</a>
            ) : (
              <p className="mt-5 text-sm text-[var(--color-graytext)]">No public link available.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
