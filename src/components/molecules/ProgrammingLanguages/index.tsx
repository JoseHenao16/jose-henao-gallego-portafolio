import SkillBar from "../SkillBar";

const ProgrammingLanguages = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[18px] font-semibold text-[var(--color-darktext)] mb-2">
        Technical Skills
      </h3>
      <SkillBar label="Java" percentage={90} />
      <SkillBar label="JavaScript" percentage={95} />
      <SkillBar label="Node.js" percentage={85} />
      <SkillBar label="HTML" percentage={90} />
      <SkillBar label="CSS" percentage={85} />
      <SkillBar label="SQL" percentage={75} />
      <SkillBar label="React" percentage={60} />
      <SkillBar label="Vue" percentage={95} />
    </div>
  );
};

export default ProgrammingLanguages;
