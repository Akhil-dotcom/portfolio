import { useForm } from 'react-hook-form'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Connect() {
  const { register, handleSubmit } = useForm()  
  return <div className="font-readex">
      <div className="max-w-screen-sm mx-auto p-5 py-20">
          <div className="flex flex-col gap-10">
              <div className="flex-1 relative">
                  <div className="text-6xl font-bold">
                      <div className="flex items-center gap-3">Let's <HiArrowNarrowRight /></div>
                      <div>Connect</div>
                  </div>
                  <p className="md:text-lg pt-3 max-w-xs md:max-w-sm">I am open for new opportunities and interesting projects.</p>
                  <div className="absolute py-10 -top-5 right-0 md:bottom-0">
                      <button className="bg-indigo-50 text-indigo-500 rounded-full text-xs md:text-sm shadow-md flex flex-col rotate-12 h-28 w-28 p-3 items-center justify-center">
                          <span>Open for</span>
                          <span>new projects</span>
                      </button>
                  </div>
              </div>
              {/* form */}
              <div className="flex-1">
                  <form className="flex flex-col gap-8">
                      <div className="flex flex-col">
                          <label className="font-medium">Your name:</label>
                          <input className="bg-slate-200 rounded-md outline-none p-1 px-2" />
                      </div>
                      <div className="flex flex-col">
                          <label className="font-medium">Your email address:</label>
                          <input className="bg-slate-200 rounded-md outline-none p-1 px-2" />
                      </div>
                      <div className="flex flex-col">
                          <label className="font-medium">Your message:</label>
                          <textarea className="bg-slate-200 rounded-md outline-none p-1 px-2" />
                      </div>
                      <div>
                          <button className="flex text-indigo-500 items-center text-lg font-bold">
                              <p>Send</p>
                              <HiArrowNarrowRight size={30} />
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>;
}

export default Connect;
