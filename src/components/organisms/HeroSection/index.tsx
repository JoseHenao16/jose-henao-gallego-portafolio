"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="flex min-h-[467px] w-full max-w-[970px] flex-col items-center gap-8 bg-[var(--color-fondo)] px-6 py-10 2xl:flex-row 2xl:px-11">
      <div className="flex w-full flex-col justify-center 2xl:w-[500px]">
        <h1 className="text-4xl md:text-[48px] leading-[124%] font-bold font-inter text-[var(--color-darktext)]">
          José David Henao Gallego
          <span className="block text-[var(--color-accent)]">Full Stack Developer</span>
        </h1>

        <p className="mt-6 text-[16px] leading-relaxed text-[var(--color-graytext)]">
          Full-stack developer experienced in web and geospatial applications,
          currently studying Systems Engineering at Universidad de Antioquia.
          Focused on building robust, maintainable solutions.
        </p>

        <button
          type="button"
          onClick={() => setIsContactOpen(true)}
          className="mt-8 inline-flex w-fit min-h-[48px] items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-darktext)] rounded-md font-semibold hover:scale-105 transition-transform duration-300"
        >
          HIRE ME
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="relative aspect-[326/459] w-full max-w-[300px] shrink-0">
        <Image
          src="/img/hero_img.png"
          alt="José David Henao Gallego"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-contain"
        />
      </div>
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={(event) => event.target === event.currentTarget && setIsContactOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="contact-title" className="w-full max-w-md rounded-md bg-[var(--color-fondo)] p-6 text-left shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <h2 id="contact-title" className="text-2xl font-bold text-[var(--color-darktext)]">Let&apos;s connect</h2>
              <button type="button" aria-label="Close dialog" onClick={() => setIsContactOpen(false)} className="text-2xl leading-none text-[var(--color-darktext)]">×</button>
            </div>
            <p className="mt-3 text-[var(--color-graytext)]">Reach me through any of these channels.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://github.com/JoseHenao16" target="_blank" rel="noopener noreferrer" className="rounded-md bg-[var(--color-accent)] px-4 py-2 font-semibold text-[var(--color-darktext)]">GitHub</a>
              <a href="https://instagram.com/josehenaogll" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[var(--color-darktext)] px-4 py-2 font-semibold text-[var(--color-darktext)]">Instagram</a>
              <a href="mailto:jose.henao1@udea.edu.co" className="rounded-md bg-[var(--color-accent)] px-4 py-2 font-semibold text-[var(--color-darktext)]">Email</a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-david-gallego-587a97210/" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[var(--color-darktext)] px-4 py-2 font-semibold text-[var(--color-darktext)]">LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
