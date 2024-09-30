"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return ( 
     <motion.div>
  <div className="h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-44">
    {/* Image container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative lg:m-4 z-10">
      <Image src="/hero.png" 
      alt="Image" 
      fill
      className="object-contain "
      priority
      >
      </Image>
    </div>
    {/* Text Container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center lg:m-4 z-20">
    {/* Topic */}
    <h1 className="text-4xl md:text-6xl font-bold ">Crafting  Digital Experiences, Designing Tomorrow. </h1>
    {/* Description */}
    <p>Hydration in the context of web development, particularly with React and frameworks like Next.js, 
      refers to the process of attaching or client-side JavaScript to the static HTML that was 
      rendered by the server. It enables the static HTML to become interactive on the client side by loading 
      and running the JavaScript necessary to handle user interactions (like clicking buttons, filling forms, 
      etc.). </p>
      {/* Buttons */}
    <div className="flex gap-4  w-full">
      <button className="bg-slate-900 p-4 rounded-lg ring-black text-white">View My Work</button>
      <button className=" p-4 rounded-lg ring-1 ring-black">Contact Me</button>
    </div>
    </div>
  </div>
    </motion.div>
  )
};

export default Homepage;
