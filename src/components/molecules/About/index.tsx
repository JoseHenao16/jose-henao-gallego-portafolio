import React from "react";

const aboutItems = [
  { label: "Age", value: "26" },
  { label: "Residence", value: "Vereda Abreo" },
  { label: "Freelance", value: "Available" },
  { label: "Address", value: "Rionegro, Antioquia" },
];

const About = () => {
  return (
    <div className="w-[220px] h-[126px] flex flex-col justify-between">
      {aboutItems.map(({ label, value }, idx) => (
        <div
          key={idx}
          className="w-full h-[25px] flex justify-between text-[15px] text-graytext leading-[24px]"
        >
          <span>{label}:</span>
          <span className={label === "Freelance" ? "font-medium text-green-600" : "font-medium"}>
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default About;
