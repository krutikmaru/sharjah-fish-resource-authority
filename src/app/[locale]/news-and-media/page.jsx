import React from "react";
import { NewsCard } from "../../../components/Home/NewsMedia";
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
        <h1 className="text-5xl font-bold tracking-tighter">News And Media</h1>
        <p className="text-xl text-black dark:text-white">
          Stay updated with the latest from the Sharjah Fisheries Authority. Our
          media center provides news, press releases, and announcements on our
          efforts to preserve fishery resources and support the local fishing
          community. We’re committed to promoting environmental sustainability
          and working with partners to ensure a sustainable future for our
          marine resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

export default Page;
