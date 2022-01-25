import React from 'react';

function Cart() {
  return <div className="border p-5 w-44 md:w-56 xl:w-72 font-readex bg-white shadow-lg rounded-md absolute z-40 -bottom-10 xl:bottom-3 md:-left-5 flex flex-col gap-4">
  <div className="flex items-center justify-between">
    <h1 className="text-sm md:text-xl font-semibold">Cart</h1>
    <span className="text-indigo-500 text-sm">Skills...</span>
  </div>
  <p className="text-xs">Skills adding to Tech stack...</p>
  <div className="flex gap-2 animate-pulse">
    <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-md bg-slate-300"></div>
    <div className="flex-auto flex flex-col gap-2">
      <div className="w-full h-2 xl:h-3 rounded-md bg-slate-300"></div>
      <div className="w-20 h-2 xl:h-3 bg-slate-300 rounded-md"></div>
    </div>
  </div>
  <div className="flex gap-2 animate-pulse">
    <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-md bg-slate-300"></div>
    <div className="flex-auto flex flex-col gap-2">
      <div className="w-full h-2 xl:h-3 rounded-md bg-slate-300"></div>
      <div className="w-20 h-2 xl:h-3 bg-slate-300 rounded-md"></div>
    </div>
  </div>
  <div className="hidden md:flex gap-2 animate-pulse">
    <div className="h-8 w-8 xl:h-10 xl:w-10 rounded-md bg-slate-300"></div>
    <div className="flex-auto flex flex-col gap-2">
      <div className="w-full h-2 xl:h-3 rounded-md bg-slate-300"></div>
      <div className="w-20 h-2 xl:h-3 bg-slate-300 rounded-md"></div>
    </div>
  </div>
</div>;
}

export default Cart;
