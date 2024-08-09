import Image from "next/image";
import React from "react";

function Feedback() {
  return (
    <div className="text-blue-navy dark:text-blue-yonder px-20 pt-20 flex flex-col space-y-4">
      <div className="w-full h-[500px] relative overflow-hidden rounded-md bg-[url('/images/general/head-office.jpeg')] bg-cover bg-center p-10 flex justify-center items-center flex-col">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z"></div>
        <div className="z-10 flex flex-col justify-center items-center space-y-4">
          <h1 className="text-5xl text-white font-medium">Feedback</h1>
          <p className="text-xl text-white">
            We would love to have any feedbacks, complaints, or suggestions.
          </p>
          <button className="bg-AEGold-500  text-white dark:text-fra-black font-medium px-4 py-2 rounded-md text-sm  transition-colors ease-in-out">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
