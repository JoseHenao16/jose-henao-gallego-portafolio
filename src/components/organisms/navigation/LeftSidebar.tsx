"use client";

import About from "@/components/molecules/About";
import ExtraSkills from "@/components/molecules/ExtraSkills";
import Languages from "@/components/molecules/Languages";
import Profile from "@/components/molecules/Profile";
import ProgrammingLanguages from "@/components/molecules/ProgrammingLanguages";

const LeftSidebar = () => {
  return (
    <aside className="order-2 flex w-full justify-center bg-[var(--color-fondo)] px-4 py-8 lg:order-1 lg:h-huge lg:w-[305px] lg:flex-none lg:px-0 lg:py-10">
      {/* Contenedor interno */}
      <div className="flex h-auto w-full max-w-[305px] flex-col items-center gap-[10px] lg:h-[1315px]">
        {/* Sección de perfil */}
        <Profile />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />

        {/* About Info */}
        <About />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />

        {/* Lenguajes */}
        <Languages />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />

        {/* Lenguajes de programacion */}
        <ProgrammingLanguages />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />

        {/* Extra Skills */}
        <ExtraSkills />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />
      </div>
    </aside>
  );
};

export default LeftSidebar;
