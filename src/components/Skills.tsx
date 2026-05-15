import React, { FC } from 'react';
import { skillsData } from '@/data/skills';

const SkillsList: FC = () => {
  return (
    <ul className="intro-content-skills my-2">
      {skillsData.map((skill, index) => (
        <li key={index} className={`intro-content-skills-${skill.name.toLowerCase()}`}>
          {skill.icon}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
