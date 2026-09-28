type EducationItemProps = {
  institution: string
  degree: string
  dates: string
  role?: string
  modality?: string
  description: string
  tags?: string[]
}

const EducationItem = ({
  institution,
  degree,
  dates,
  role,
  modality,
  description,
  tags = [],
}: EducationItemProps) => {
  return (
    <div className="flex flex-col justify-between gap-6 border-b border-gray-200 py-8 md:flex-row md:py-10">
      {/* Izquierda */}
      <div className="flex w-full max-w-[240px] flex-col gap-2">
        <h3 className="text-lg font-semibold text-[var(--color-darktext)]">{institution}</h3>
        {role && <span className="text-sm text-[var(--color-graytext)]">{role}</span>}
        {modality && <span className="text-sm text-[var(--color-graytext)]">{modality}</span>}
        <div className="inline-block mt-2">
          <span className="bg-[var(--color-accent)] text-white text-xs font-medium px-2 py-1 rounded">
            {dates}
          </span>
        </div>
      </div>

      {/* Centro */}
      <div className="w-full min-w-0 max-w-[600px] md:flex-1">
        <h4 className="text-base font-medium text-[var(--color-darktext)] pb-6">
          {degree}
        </h4>
        <p className="text-sm text-[var(--color-graytext)] leading-6">
          {description}
        </p>
        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag} className="rounded bg-[var(--color-accent)]/20 px-2 py-1 text-xs text-[var(--color-darktext)]">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  )
}

export default EducationItem
