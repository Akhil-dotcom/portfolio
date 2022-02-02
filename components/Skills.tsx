import React from 'react';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import SkillDashboard from './Diagrams/SkillDashboard';

function Skills() {
  return <div className="font-readex" id="skills">
      <div className="max-w-screen-xl mx-auto p-5 py-20">
          {/* HTML CSS JS React Next Tailwind scss Node js mongodb firebase */}
          <div className="text-4xl xl:text-5xl text-center font-bold">Skills</div>
          <div>
              <p className="sm:text-base xl:text-lg  text-center py-5">My portfolio was developed using <span className="border-b-2 border-gray-900 font-semibold">Next Js</span> and <span className="border-b-2 font-semibold border-cyan-500 text-cyan-500">Tailwind css</span>. <br/><span className="text-gray-500">Its all code, no Images used - other than mine and my work designs*.</span> </p>
          </div>
          {/* dashboard and skills */}
          <div>
              {/* desktop */}
              <div className="pt-5">
                  <SkillDashboard />
              </div>
              {/* mobile */}
              <div></div>
          </div>
      </div>
  </div>;
}

export default Skills;
