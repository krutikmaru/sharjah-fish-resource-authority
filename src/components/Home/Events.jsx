import Image from "next/image";
import React from "react";

function Events() {
  return (
    <div className="text-blue-navy dark:text-blue-yonder px-20 pt-20 flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold tracking-tighter">Events</h1>
        <button className="text-lg font-medium">View All</button>
      </div>
      <p className="text-xl text-black dark:text-white">
        Explore the latest activities and events organized by the Sharjah
        Fisheries Authority. From community outreach programs to environmental
        initiatives, we host various events aimed at supporting fishermen and
        promoting sustainable fishing practices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
}

export default Events;

function EventsCard() {
  return (
    <div className="w-full min-h-[400px] rounded-md bg-neutral-200/20 backdrop-blur-sm flex flex-col justify-between p-3">
      <div className="flex flex-col space-y-4 h-full">
        <div className="w-full h-[300px] relative rounded-md overflow-hidden">
          <div className="absolute z-10 text-blue-navy dark:text-blue-yonder font-medium bg-white/40 backdrop-blur-md flex flex-col p-5 rounded-md top-4 left-4">
            <span>21st</span>
            <span>Jan</span>
          </div>
          <Image
            src={"/images/general/kalba.jpg"}
            fill
            className="absolute object-cover"
          />
        </div>
        <div className="px-2 py-2 pb-4">
          <h2 className="text-2xl font-medium">Title of Event here</h2>
        </div>
      </div>
      <div className="px-2">
        <button className="bg-AEGold-500  text-white dark:text-fra-black font-medium px-4 py-2 rounded-md text-sm  transition-colors ease-in-out">
          Know More
        </button>
      </div>
    </div>
  );
}
