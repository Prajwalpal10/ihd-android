import React from 'react';


function UnderMaintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 ">
     
      <h1 className="text-4xl font-semibold text-gray-800">We are currently Working on these Products ..</h1>
      <p className="mt-4 text-lg text-gray-600 text-center px-6 md:px-0">
         We should be back shortly. Thank you for your patience.
      </p>
      <img src="\images\main.gif" alt="Under Maintenance" className="mt-8 w-1/2 md:w-1/4" />
    </div>
  );
}

export default UnderMaintenance;
