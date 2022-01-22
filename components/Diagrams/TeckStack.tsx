import { SiTailwindcss, SiHtml5, SiJavascript,SiSass, SiReact, SiNextdotjs, SiTypescript, SiFirebase, SiMongodb } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'

function TeckStack() {
  return <div className="border p-5 w-full overflow-x-hidden font-readex bg-white shadow-lg rounded-md absolute -top-5 md:top-10 left-10 flex flex-col gap-4 z-30 hover:z-50">
      <div className="text-xs sm:text-sm md:text-xl font-bold">Tech Stack</div>
      <div className="grid grid-cols-3 gap-3">
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiHtml5 className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">HTML</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <DiCss3 className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">CSS</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiJavascript className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">JavaScript</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiTailwindcss className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">Tailwind</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiSass className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">SCSS</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiReact className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">React Js</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <div className="h-8 w-8 animate-pulse rounded-md bg-slate-300"></div>
              <div className="flex-auto flex flex-col gap-1">
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-[50%] rounded-md"></div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiNextdotjs className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">Next Js</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiTypescript className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">Typescript</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <div className="h-8 w-8 animate-pulse rounded-md bg-slate-300"></div>
              <div className="flex-auto flex flex-col gap-1">
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-[50%] rounded-md"></div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiFirebase className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">Firebase</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
          <div className="flex gap-2 items-center border rounded-md p-3">
              <SiMongodb className="text-lg md:text-xl" />
              <div className="flex-auto flex flex-col gap-1">
                  <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">MongoDB</div>
                  <div className="h-2 md:h-3 animate-pulse bg-slate-300 w-full rounded-md"></div>
              </div>
          </div>
      </div>
  </div>;
}

export default TeckStack;
