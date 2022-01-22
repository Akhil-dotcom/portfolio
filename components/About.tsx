import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { SiJavascript } from 'react-icons/si'
import EscrDiagram from './Diagrams/EscrDiagram'

function About() {
    
  const code:Array<String> = ["function","repeat(){", "eat()", "sleep()", "code()", "}", "export" ,"{ repeat }"]  
  const indexCode:Array<String> = ["import", "{ repeat }", "from", "./repeat.js", "repeat()"]
  const [page, setpage] = useState<number>(2);

  return <div className="max-w-screen-xl mx-auto p-5 py-40 xl:py-20 font-readex">
      <div className="w-full">
          <div className="flex flex-col md:flex-row-reverse gap-5">
              {/* content */}
              <div className="flex-1">
                  <div></div>
                  <div className="text-4xl xl:text-5xl font-bold">Developing is my passion.</div>
                  <div className="pt-5 sm:text-base xl:text-xl md:max-w-sm">A self taught developer interested in developing as well as learning new technologies.</div>
              </div>
              {/* image */}
              <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full">
                      {/* button */}
                      <div className="flex items-center justify-end space-x-1 p-2 border-b">
                          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      </div>
                      <div className="flex">
                        <div onClick={() => setpage(1)} className={`text-sm flex items-center p-2 text-white gap-2 cursor-pointer w-max ${page === 1 ? "bg-gray-900" : "bg-gray-700"}`}>
                          <SiJavascript className="text-yellow-400" />
                          <div>index.js</div>
                          <MdClose />
                        </div>
                        <div onClick={() => setpage(2)} className={`text-sm flex items-center p-2 text-white cursor-pointer gap-2 w-max ${page === 2 ? "bg-gray-900" : "bg-gray-700"}`}>
                          <SiJavascript className="text-yellow-400" />
                          <div>repeat.js</div>
                          <MdClose />
                        </div>
                      </div>
                      {/* code */}
                      {page === 1 && <div className="p-5 text-white text-lg bg-gray-900 min-h-[300px] relative">
                          <div className="flex gap-3">
                              <span className="text-pink-600">{indexCode[0]}</span>
                              <span>{indexCode[1]}</span>
                              <span className="text-pink-600">{indexCode[2]}</span>
                              <span className="text-green-600">{indexCode[3]}</span>
                          </div>
                          <div className="pt-5">{indexCode[4]}</div>
                          <EscrDiagram />
                      </div>}
                      {page === 2 && <div className="p-5 text-white text-lg bg-gray-900 min-h-[300px]">
                          <div className="space-x-2"><span className="text-pink-600">{code[0]}</span><span>{code[1]}</span></div>
                          <div className="pl-5 text-blue-500">{code[2]}</div>
                          <div className="pl-5 text-blue-500">{code[3]}</div>
                          <div className="pl-5 text-blue-500">{code[4]}</div>
                          <div>{code[5]}</div>
                          <div className="space-x-2"><span className="text-pink-600">{code[6]}</span><span>{code[7]}</span></div>
                          <div className="text-green-600 pt-5">// click on index.js to see what it does.</div>
                      </div>}
                  </div>
              </div>
          </div>
      </div>
  </div>;
}

export default About;
