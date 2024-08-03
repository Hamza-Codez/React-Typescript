"use client"
import React, { useState } from 'react';

const Page = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div id="card">
        <div>
          <h1 className="bg-blue-300 p-2 my-2 rounded-sm">Click the button to update the present value</h1>
        </div>
        <div>
          <h3 className="my-4 font-semibold text-xl">Marks = {value}</h3>
        </div>
        <div>
          <button
            id="bttn"
            onClick={() => {
              setValue(value => value + 1);
            }}
            className="bg-slate-400 rounded-md px-2 py-1"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;



