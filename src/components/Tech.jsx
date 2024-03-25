import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hocs";
import { technologies } from "../constans";

const Tech = () => {
  return (
    <SectionWrapper idName="">
      <div className="flex flex-wrap flex-row justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
