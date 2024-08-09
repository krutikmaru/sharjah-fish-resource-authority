import React from "react";
import { EventsCard } from "../../../components/Home/Events";
import Image from "next/image";

function Page() {
  return (
    <div className="text-black py-24 px-20">
      <div className="text-blue-navy dark:text-blue-yonder flex flex-col space-y-4">
        <div className="w-full h-96  mb-12  rounded-lg relative ">
          <Image
            src="/images/patterns-fill-color-5.jpg"
            alt="Goals Display Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-5xl font-bold tracking-tighter">Events</h1>
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
          <EventsCard />
          <EventsCard />
        </div>
      </div>
    </div>
  );
}

export default Page;
