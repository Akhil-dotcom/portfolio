import Link from 'next/link';
import React from 'react';

function Education() {
  return (
    <div className="font-readex">
        <div className="max-w-screen-xl mx-auto p-5 py-20 flex flex-col lg:flex-row gap-5 md:gap-10">
            <div className="flex-1">
                <h3 className="text-4xl xl:text-5xl font-bold">Education</h3>
                <p className="sm:text-base xl:text-lg md:max-w-lg text-left py-3">The things that helped me out to make me what i am today.</p>
            </div>
            {/* details */}
            <div className="flex-1">
              <div className="border-2 border-slate-200 rounded-md p-3">
                <div className="pb-2">
                  <h3 className="text-lg font-medium">Education Qualification</h3>
                </div>
                <div className="border-2 border-slate-200 rounded-md">
                  <div className="grid grid-cols-2 md:grid-cols-3 p-2 px-4 gap-5 border-b-2">
                    <div className="md:col-span-2 text-sm">Degree and Institiute</div>
                    <div className="text-sm pl-2">% and Passout year</div>
                  </div>
                  {/* degree */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex items-center gap-3 md:col-span-2 p-2 px-4">
                      <div className="h-3 w-4 md:w-6 rounded-full bg-red-300"></div>
                      <div>
                        <div className="font-semibold">MTech (5Years)</div>
                        <div className="text-xs sm:text-sm">Vellore Institute of Technology</div>
                      </div>
                    </div>
                    <div className="flex items-center p-2 px-4 justify-center gap-5 bg-slate-200">
                      <div className="bg-white w-max h-max p-1 px-2 pl-4 border-2 border-slate-300 text-xs rounded-md">77%</div>
                      <div className="bg-white w-max h-max p-1 px-2 border-2 border-slate-300 text-xs rounded-md">2021</div>
                    </div>
                  </div>
                  {/* XII */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex items-center gap-3 md:col-span-2 p-2 px-4">
                      <div className="h-3 w-4 md:w-6 rounded-full bg-yellow-300"></div>
                      <div>
                        <div className="font-semibold">XII th</div>
                        <div className="text-xs sm:text-sm">Velammal Vidhyashram</div>
                      </div>
                    </div>
                    <div className="flex items-center p-2 px-4 justify-center gap-5 bg-slate-200">
                      <div className="bg-white w-max h-max p-1 px-2 pl-4 border-2 border-slate-300 text-xs rounded-md">70%</div>
                      <div className="bg-white w-max h-max p-1 px-2 border-2 border-slate-300 text-xs rounded-md">2016</div>
                    </div>
                  </div>
                  {/* x */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex items-center gap-3 md:col-span-2 p-2 px-4">
                      <div className="h-3 w-4 md:w-6 rounded-full bg-green-300"></div>
                      <div>
                        <div className="font-semibold">Xth</div>
                        <div className="text-xs sm:text-sm">St.John&#39;s Hr Sec School</div>
                      </div>
                    </div>
                    <div className="flex items-center p-2 px-4 justify-center gap-5 bg-slate-200">
                      <div className="bg-white w-max h-max p-1 px-2 pl-4 border-2 border-slate-300 text-xs rounded-md">98%</div>
                      <div className="bg-white w-max h-max p-1 px-2 border-2 border-slate-300 text-xs rounded-md">2014</div>
                    </div>
                  </div>
                </div>
                {/* resume */}
                <div className="flex items-center justify-between pt-3 px-1">
                  <div className="text-indigo-500">Take a look at my resume</div>
                  <Link href="/resume" passHref={true}>
                    <button className="bg-indigo-500 text-white p-1 px-4 rounded-md hover:scale-105 active:scale-95 duration-200">Resume</button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Education;
