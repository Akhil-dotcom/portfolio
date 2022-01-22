import React from 'react';

function Cart() {
  return <div className="border p-5 w-52 md:w-72 font-readex bg-white shadow-lg rounded-md relative md:absolute z-40 bottom-0 flex flex-col gap-4">
  <div className="flex items-center justify-between">
    <h1 className="text-sm md:text-xl font-semibold">Cart</h1>
    <span className="text-indigo-500 text-sm">4 Items</span>
  </div>
  <div className="flex gap-2 animate-pulse">
    <div className="h-8 w-8 md:h-12 md:w-12 rounded-md bg-slate-300"></div>
    <div className="flex-auto flex flex-col gap-2">
      <div className="w-full h-2 md:h-5 rounded-md bg-slate-300"></div>
      <div className="w-20 h-2 md:h-5 bg-slate-300 rounded-md"></div>
    </div>
  </div>
  <div className="flex gap-2 animate-pulse">
    <div className="h-8 w-8 md:h-12 md:w-12 rounded-md bg-slate-300"></div>
    <div className="flex-auto flex flex-col gap-2">
      <div className="w-full h-2 md:h-5 rounded-md bg-slate-300"></div>
      <div className="w-20 h-2 md:h-5 bg-slate-300 rounded-md"></div>
    </div>
  </div>
  <div className="flex gap-2 animate-pulse">
    <div className="h-8 w-8 md:h-12 md:w-12 rounded-md bg-slate-300"></div>
    <div className="flex-auto flex flex-col gap-2">
      <div className="w-full h-2 md:h-5 rounded-md bg-slate-300"></div>
      <div className="w-20 h-2 md:h-5 bg-slate-300 rounded-md"></div>
    </div>
  </div>
</div>;
}

export default Cart;
