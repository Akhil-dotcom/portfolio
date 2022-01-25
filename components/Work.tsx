import { FiGithub, FiFolder } from "react-icons/fi";
import { GrShare } from "react-icons/gr";
import { BiLaptop } from "react-icons/bi"

function Work() {
  return <div className="font-readex" id="work">
      <div className="max-w-screen-xl mx-auto p-5 py-10">
          <div className="pb-5">
              <div className="text-4xl xl:text-5xl  font-bold">My Work</div>
          </div>
          {/* buttons */}
          <div className="pt-5 flex flex-col gap-10">
              <div>
                  <div className="flex items-center text-lg gap-3 md:text-xl">
                      <div className="text-green-600">01.</div>
                      <div className="">Freelancer</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
                      <div className="border-2 border-slate-200 rounded-md p-5 cursor-pointer hover:scale-105 duration-200">
                          <div className="flex items-center justify-between">
                            <FiFolder className="text-4xl text-indigo-500" />
                            <div className="flex items-center gap-3 text-xl">
                                <a href="https://github.com/Akhil-dotcom/vsds-website" className="scale:105 active:95 duration-200"><FiGithub /></a>
                                <a href="https://vishnu-msds.web.app/" className="scale:105 active:95 duration-200"><GrShare /></a>
                            </div>
                          </div>
                          <div className="pt-10">
                            <div className="font-semibold text-lg md:text-xl">Vishnu Cars Driving School</div>
                            <p className="pt-3 pb-5">A single page web application created for marketing there schools and allow users to book through there website.</p>
                            <div className="flex items-center gap-3 text-green-600">
                                <p>React Js</p>
                                <p>Firebase</p>
                                <p>Electron Js</p>
                            </div>
                          </div>
                      </div>
                      {/*  */}
                      <div className="border-2 border-slate-200 rounded-md p-5 cursor-pointer hover:scale-105 duration-200">
                          <div className="flex items-center justify-between">
                            <FiFolder className="text-4xl text-indigo-500" />
                            {/* <div className="flex items-center gap-3 text-xl">
                                <a href="https://github.com/Akhil-dotcom/vsds-website" className="scale:105 active:95 duration-200"><FiGithub /></a>
                                <a href="https://vishnu-msds.web.app/" className="scale:105 active:95 duration-200"><GrShare /></a>
                            </div> */}
                          </div>
                          <div className="pt-10">
                            <div className="font-semibold text-lg md:text-xl">Sreedhar memorial hospital</div>
                            <p className="pt-3 pb-5">Developed a website to market there diabetic treatment center using React Js and Firebase.</p>
                            <div className="flex items-center gap-3 text-green-600">
                                <p>React Js</p>
                                <p>Firebase</p>
                            </div>
                          </div>
                      </div>
                      {/*  */}
                      <div className="border-2 border-slate-200 rounded-md p-5 cursor-pointer hover:scale-105 duration-200">
                          <div className="flex items-center justify-between">
                            <FiFolder className="text-4xl text-indigo-500" />
                            <div className="flex items-center gap-3 text-xl">
                                {/* <a href="https://github.com/Akhil-dotcom/vsds-website" className="scale:105 active:95 duration-200"><FiGithub /></a> */}
                                <a href="https://akhil-raj.web.app/" className="scale:105 active:95 duration-200"><GrShare /></a>
                            </div>
                          </div>
                          <div className="pt-10">
                            <div className="font-semibold text-lg md:text-xl">My Portfolio V1</div>
                            <p className="pt-3 pb-5">My portfolio website build using React Js and Scss for styling.</p>
                            <div className="flex items-center gap-3 text-green-600">
                                <p>React Js</p>
                                <p>SCSS</p>
                            </div>
                          </div>
                      </div>
                      {/*  */}
                      <div className="border-2 border-slate-200 rounded-md p-5 cursor-pointer hover:scale-105 duration-200">
                          <div className="flex items-center justify-between">
                            <FiFolder className="text-4xl text-indigo-500" />
                            <div className="flex items-center gap-3 text-xl">
                                {/* <a href="https://github.com/Akhil-dotcom/vsds-website" className="scale:105 active:95 duration-200"><FiGithub /></a> */}
                                <a href="https://avoke.in/" className="scale:105 active:95 duration-200"><GrShare /></a>
                            </div>
                          </div>
                          <div className="pt-10">
                            <div className="font-semibold text-lg md:text-xl">Avoke</div>
                            <p className="pt-3 pb-5">A single page web application created for marketing there business..</p>
                            <div className="flex items-center gap-3 text-green-600">
                                <p>React Js</p>
                                <p>Firebase</p>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="flex items-center text-lg gap-3 md:text-xl">
                      <div className="text-green-600">02.</div>
                      <div className="">Work Experience</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
                      <div className="border-2 border-slate-200 rounded-md p-5 cursor-pointer hover:scale-105 duration-200">
                          <div className="flex items-center justify-between">
                            <BiLaptop className="text-4xl text-indigo-500" />
                            <div className="flex items-center gap-3 text-xl">
                                <a href="https://github.com/Akhil-dotcom/" className="scale:105 active:95 duration-200"><FiGithub /></a>
                                {/* <a href="https://vishnu-msds.web.app/" className="scale:105 active:95 duration-200"><GrShare /></a> */}
                            </div>
                          </div>
                          <div className="pt-10">
                            <div className="font-semibold text-lg md:text-xl">BlueChip encore private limited.</div>
                            <p className="pt-3 pb-5">Worked as a Full Stack developer developing there products using React Js and Node Js.</p>
                            <div className="flex items-center gap-3 text-green-600">
                                <p>React Js</p>
                                <p>Node Js</p>
                                <p>Mongo DB</p>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="flex items-center text-lg gap-3 md:text-xl">
                      <div className="text-green-600">03.</div>
                      <div className="">Some Designs</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
                     <div className="border-2 border-slate-200 rounded-md p-2 bg-slate-200">
                         <img src="/images/portfolio.png" className="h-56 md:h-72 rounded-md w-full object-contain" />
                     </div>
                     <div className="border-2 border-slate-200 rounded-md p-2 bg-slate-200">
                         <img src="/images/insta.png" className="h-56 md:h-72 rounded-md w-full object-contain" />
                     </div>
                     <div className="border-2 border-slate-200 rounded-md p-2 bg-slate-200">
                         <img src="/images/medium.png" className="h-56 md:h-72 rounded-md w-full object-contain" />
                     </div>
                     <div className="border-2 border-slate-200 rounded-md p-2 bg-slate-200">
                         <img src="/images/msds.png" className="h-56 md:h-72 rounded-md w-full object-contain" />
                     </div>
                     <div className="border-2 border-slate-200 rounded-md p-2 bg-slate-200">
                         <img src="/images/avoke.png" className="h-56 md:h-72 rounded-md w-full object-contain" />
                     </div>
                     <div className="border-2 border-slate-200 rounded-md p-2 bg-slate-200">
                         <img src="/images/ecom.png" className="h-56 md:h-72 rounded-md w-full object-contain" />
                     </div>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}

export default Work;
