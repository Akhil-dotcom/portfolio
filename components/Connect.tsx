import React from 'react';
import { RiBasketballLine } from 'react-icons/ri'

function Connect() {
  return (
    <div className="font-readex" id="connect">
        <div className="max-w-screen-xl mx-auto p-5 py-20">
            <div className="h-24 w-24 mx-auto rounded-full mb-8 flex flex-col items-center justify-center">
                <RiBasketballLine size={45} className="animate-bounce text-indigo-500" />
                <div className="h-1 w-full rounded-full bg-indigo-500"></div>
            </div>
            <div className="text-sm pb-1 text-center xl:text-lg text-blue-800">What next?</div>
            <div className="text-4xl xl:text-5xl text-center font-bold">Let's get in <span className="underline text-indigo-500">Touch!</span></div>
            <p className="sm:text-base xl:text-lg text-center py-5">Fill the form or <span className="underline font-bold">send me an email</span></p>
            <form className="max-w-xl mx-auto pt-5">
                <div className="flex flex-col gap-5">
                    <input placeholder="What's your name?" className="border-b-2 border-slate-100 focus:border-indigo-500 outline-none p-3 px-1 md:px-0" />
                    <input placeholder="What's your email address?" className="border-b-2 border-slate-100 focus:border-indigo-500 outline-none p-3 px-1 md:px-0" />
                    <textarea placeholder="Your message" className="border-b-2 border-slate-100 h-24 focus:border-indigo-500 outline-none p-3 px-1 md:px-0" />
                </div>
                <div className="pt-10 flex justify-center gap-5">
                    <button className="rounded-md border-2 border-gray-900 p-2 px-4 hover:scale-105 active:scale-95 duration-150">Send it</button>
                    <a href="mailto:akhilrajktt@gmail.com" className="rounded-md border-2 border-gray-900 p-2 px-4 bg-gray-900 text-white hover:scale-105 active:scale-95 duration-150">Mail Me</a>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Connect;
