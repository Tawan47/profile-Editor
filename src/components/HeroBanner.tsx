"use client";

import { motion } from "framer-motion";
import { FallbackImage } from "./FallbackImage";

export function HeroBanner() {
  return (
    <div className="w-full h-[250px] md:h-[400px] bg-gray-200 overflow-hidden relative">

      {/* Background Image & Bokeh Effects */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <FallbackImage
          src="/626178994_17869847781545367_5987068704260653050_n.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
          fallbackSrc="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop"
        />
        {/* Subtle vignette to frame the image without muddying it */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/10" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[8rem] leading-tight font-bold tracking-tight text-white max-w-5xl"
        >
          {/* CINEMATIC VISION. */}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-gray-200 font-medium max-w-2xl"
        >
          {/* Elevating storytelling through precision editing and dynamic visual narratives. */}
        </motion.p>
      </div>
    </div>
  );
}
