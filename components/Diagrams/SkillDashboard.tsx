import React, { useState } from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiSass, SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiExpress, SiMongodb } from 'react-icons/si'

function SkillDashboard() {
  const [page, setpage] = useState<number>(1);

  
  return (
    <div className="border-2 border-slate-400 rounded-md p-1 md:p-3 max-w-3xl mx-auto">
        <div className="border-2 border-gray-900 bg-gray-900 flex flex-col md:flex-row rounded-md overflow-hidden min-h-[300px]">
            {/* menu */}
            <div className="bg-gray-700">
                <div className="flex items-center space-x-1 pl-3 p-3">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                </div>
                <div className="flex md:flex-col text-xs md:text-sm overflow-y-scroll md:overflow-hidden whitespace-nowrap">
                   <div onClick={() => setpage(1)} className={`p-2 px-4 cursor-pointer ${page !== 1 ? "bg-gray-700 text-white" : "bg-gray-900 text-white"}`}>All Skills</div>
                   <div onClick={() => setpage(2)} className={`p-2 px-4 cursor-pointer ${page !== 2 ? "bg-gray-700 text-white" : "bg-gray-900 text-white"}`}>Frontend</div>
                   <div onClick={() => setpage(3)} className={`p-2 px-4 cursor-pointer ${page !== 3 ? "bg-gray-700 text-white" : "bg-gray-900 text-white"}`}>CSS Frameworks</div>
                   <div onClick={() => setpage(4)} className={`p-2 px-4 cursor-pointer ${page !== 4 ? "bg-gray-700 text-white" : "bg-gray-900 text-white"}`}>Backend</div>
                </div>
            </div>
            {/* pages */}
            {page === 1 && <div className="flex-auto p-5">
                <h3 className="text-lg text-pink-600">Skill List</h3>
                {/* skills */}
                <div className="pt-5 flex items-center flex-wrap gap-3">
                    <div className="skill-btn">
                        <SiHtml5 className="text-orange-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">HTML</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiCss3 className="text-blue-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">CSS</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiJavascript className="text-yellow-400 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">JavaScript</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiTailwindcss className="text-cyan-400 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Tailwind css</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiSass className="text-pink-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Sass</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiReact className="text-blue-400 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">React Js</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiNextdotjs className="text-gray-900 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Next Js</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiNodedotjs className="text-green-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Node Js</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiTypescript className="text-blue-800 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Typescript</p>
                        </div>
                    </div>
                </div>
            </div>}
            {page === 2 && <div className="text-white flex-auto p-5">
            <h3 className="text-lg text-pink-600">Frontend</h3>
                {/* skills */}
                <div className="pt-5 flex items-center flex-wrap gap-3">
                    <div className="skill-btn">
                        <SiHtml5 className="text-orange-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">HTML</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiCss3 className="text-blue-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">CSS</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiJavascript className="text-yellow-400 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">JavaScript</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiTailwindcss className="text-cyan-400 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Tailwind css</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiSass className="text-pink-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Sass</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiReact className="text-blue-400 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">React Js</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiNextdotjs className="text-gray-900 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Next Js</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiTypescript className="text-blue-800 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Typescript</p>
                        </div>
                    </div>
                </div>
                </div>}
            {page === 3 && <div className="text-white flex-auto p-5">
            <h3 className="text-lg text-pink-600">CSS Frameworks</h3>
                {/* skills */}
                <div className="pt-5 flex items-center flex-wrap gap-3">
                    <div className="skill-btn">
                        <SiCss3 className="text-blue-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">CSS</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiTailwindcss className="text-cyan-400 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Tailwind css</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiSass className="text-pink-500 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Sass</p>
                        </div>
                    </div>
                </div>
                </div>}
            {page === 4 && <div className="text-white flex-auto p-5">
            <h3 className="text-lg text-pink-600">Backend</h3>
                {/* skills */}
                <div className="pt-5 flex items-center flex-wrap gap-3">
                    <div className="skill-btn">
                        <SiNodedotjs className="text-green-600 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Node Js</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiTypescript className="text-blue-800 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Typescript</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiExpress className="text-gray-900 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">Express Js</p>
                        </div>
                    </div>
                    <div className="skill-btn">
                        <SiMongodb className="text-green-700 text-2xl" />
                        <div>
                            <p className="text-gray-900 text-sm font-semibold">MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    </div>
  );
}

export default SkillDashboard;
