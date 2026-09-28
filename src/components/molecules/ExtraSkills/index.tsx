import ExtraSkillItem from "./ExtraSkillItem";

const skills = [
  "Teamwork",
  "Problem solving",
  "Git & GitHub",
  "Adaptability",
  "Agile / Scrum",
  "Communication",
];

const ExtraSkills = () => {
  return (
    <div className="w-[186px] h-huge flex flex-col gap-2">
      <h3 className="mb-2 text-[18px] font-semibold text-[var(--color-darktext)]">
        Extra Skills
      </h3>
      {skills.map((skill, idx) => (
        <ExtraSkillItem key={idx} label={skill} />
      ))}
    </div>
  );
};

export default ExtraSkills;
