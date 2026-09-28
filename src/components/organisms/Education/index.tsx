'use client'

import EducationItem from '../../molecules/EducationItem'

const education = [
  {
    institution: 'Universidad de Antioquia',
    degree: 'Systems Engineering (in progress)',
    dates: 'Present',
    role: 'Student',
    description: 'Ongoing university studies complemented by practical experience developing web and geospatial applications.',
  },
  {
    institution: 'Universidad Pontificia Bolivariana',
    degree: 'Software Development Training Program (Training Contract)',
    dates: 'May 2021 - December 2021 (8 months)',
    modality: 'Remote',
    description: 'An eight-month software development program where I expanded my knowledge of Java, Python, HTML, JavaScript, CSS, and MongoDB.',
    tags: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'MongoDB'],
  },
  {
    institution: 'Servicio Nacional de Aprendizaje (SENA)',
    degree: 'Software Programming Technician',
    dates: 'February 2016 - November 2017',
    description: 'Technical training in software programming, covering foundational Java and Python development and the use of MySQL databases.',
    tags: ['Java', 'Python', 'MySQL'],
  },
]

const Education = () => {
  return (
    <section className="w-full max-w-[970px] mx-auto flex flex-col items-center text-center px-4 py-20">
      <h2 className="text-[32px] leading-[124%] font-bold text-[var(--color-darktext)]">
        Education
      </h2>

      <p className="mt-4 w-full max-w-[620px] text-[15px] leading-[24px] font-normal text-[var(--color-graytext)]">
        My education includes university studies and professional training in
        software development and programming.
      </p>

      <div className="mt-12 w-full bg-[var(--color-fondo)] p-4 text-left sm:p-6">
        {education.map((item) => (
          <EducationItem key={item.institution} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Education
