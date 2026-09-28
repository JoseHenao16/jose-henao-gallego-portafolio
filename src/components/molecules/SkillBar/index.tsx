interface SkillBarProps {
  label: string;
  percentage: number;
}

const SkillBar = ({ label, percentage }: SkillBarProps) => {
  return (
    <div className="w-[220px] mb-4">
      {/* Título y porcentaje */}
      <div className="flex justify-between text-[15px] leading-[24px] text-[var(--color-darktext)] mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>

      {/* Barra de progreso */}
      <div className="w-full h-[4px] bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--color-accent)] rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
