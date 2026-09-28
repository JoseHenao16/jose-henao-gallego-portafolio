import { FiBox } from "react-icons/fi";

type ExtraSkillItemProps = {
  label: string;
};

const ExtraSkillItem = ({ label }: ExtraSkillItemProps) => {
  return (
    <div className="flex items-center gap-3 h-[24px]">
      <FiBox className="text-[var(--color-accent)]" size={18} />
      <p className="text-[15px] leading-[24px] text-[var(--color-darktext)]">
        {label}
      </p>
    </div>
  );
};

export default ExtraSkillItem;
