import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

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
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-AEGold-500  text-white dark:text-fra-black font-medium px-4 py-2 rounded-md text-sm  transition-colors ease-in-out">
                Contact
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Your Message</DialogTitle>
                <DialogDescription>
                  Please type in your suggestion, complaint or feedback.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    email
                  </Label>
                  <Input
                    id="email"
                    value="user@example.com"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <button
                  type="submit"
                  className="bg-AEGold-500  text-white dark:text-fra-black font-medium px-4 py-2 rounded-md text-sm  transition-colors ease-in-out"
                >
                  Send
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
