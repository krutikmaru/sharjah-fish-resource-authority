import Image from "next/image";
import React from "react";
import ViewAllButton from "../News-and-Media/ViewAllButton";
function About() {
  return (
    <div className="text-blue-navy dark:text-blue-yonder px-20 flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold tracking-tighter">News And Media</h1>
        <ViewAllButton />
      </div>
      <p className="text-xl text-black dark:text-white">
        Stay updated with the latest from the Sharjah Fisheries Authority. Our
        media center provides news, press releases, and announcements on our
        efforts to preserve fishery resources and support the local fishing
        community. We’re committed to promoting environmental sustainability and
        working with partners to ensure a sustainable future for our marine
        resources.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}

export default About;

export function NewsCard() {
  return (
    <div className="w-full min-h-[400px] rounded-md bg-neutral-200/20 backdrop-blur-sm flex flex-col justify-between p-3">
      <div className="flex flex-col space-y-4 h-full">
        <div className="w-full h-[200px] relative rounded-md overflow-hidden">
          <Image
            src={"/images/general/Dibba.jpg"}
            fill
            className="absolute object-cover"
          />
        </div>
        <div className="px-2">
          <h2 className="text-2xl font-medium">Title of new here</h2>
          <p>
            The description goes here, only a part of the description will be
            shown over here and rest can be read by clicking the read more
            button
          </p>
        </div>
      </div>
      <div className="px-2">
        <button className="bg-AEGold-500  text-white dark:text-fra-black font-medium px-4 py-2 rounded-md text-sm  transition-colors ease-in-out">
          Read More
        </button>
      </div>
    </div>
  );
}
