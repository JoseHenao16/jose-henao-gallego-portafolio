import SkillBar from "../SkillBar";

const Languages = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[18px] font-semibold text-[var(--color-darktext)] mb-2">
        Languages
      </h3>
      <SkillBar label="Spanish" percentage={100} />
      <SkillBar label="English" percentage={50} />
    </div>
  );
};

export default Languages;
