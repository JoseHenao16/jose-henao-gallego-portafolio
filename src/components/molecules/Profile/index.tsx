import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="relative w-[150px] h-[242px] flex flex-col items-center">
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
        <Image
          src="/img/avatar_img.png"
          alt="José David Henao Gallego"
          fill
          sizes="150px"
          className="object-cover"
        />
      </div>

      <h4 className="mt-[24px] text-[18px] font-medium leading-[124%] text-[var(--color-darktext)]">
        José David Henao Gallego
      </h4>

      <p className="mt-[5px] text-center text-[15px] leading-[24px] text-[var(--color-graytext)]">
        Full Stack Developer
      </p>
    </div>
  );
};

export default Profile;
