"use client";

import { motion } from "framer-motion";
import { FallbackImage } from "./FallbackImage";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

function WorkCard({ work, index }: { work: any; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const CardWrapper = work.link ? "a" : "div";
  const linkProps = work.link ? { href: work.link, target: "_blank", rel: "noopener noreferrer" } : {};

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="group cursor-pointer flex flex-col mb-12 md:mb-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardWrapper {...linkProps} className="flex flex-col gap-4 md:gap-6 w-full">

        {/* Thumbnail Container */}
        <div className={`relative w-full ${work.aspect || "aspect-[16/9]"} bg-gray-100 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-500`}>
          
          {/* Static Image Background */}
          {work.image ? (
            <FallbackImage
              src={work.image}
              alt={work.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
              fallbackSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="font-sans font-medium text-gray-400 text-xs tracking-wider uppercase">No Preview</span>
            </div>
          )}

          {/* Hover YouTube Preview */}
          {work.youtubeId && isHovered && (
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-100 transition-opacity duration-700">
              <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none"
                src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${work.youtubeId}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-20 pointer-events-none" />
          
          {/* Play Icon Overlay */}
          <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-16 h-12 bg-blue-600/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
              <Play className="w-6 h-6 text-white ml-1 fill-white" />
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
          <div className="flex-1">
            <h3 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors mb-2">
              {work.title}
            </h3>
            <p className="text-[13px] text-gray-500 font-semibold tracking-widest uppercase mb-6">
              {work.author}
            </p>
            {work.description && (
              <div className="text-[13px] text-gray-500 leading-relaxed whitespace-pre-line border-l-2 border-gray-200 pl-5">
                {work.description}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold tracking-wider">
               DIRECTING
             </span>
             {work.duration && (
               <span className="text-sm text-gray-400 font-medium">
                 {work.duration}
               </span>
             )}
          </div>
        </div>

      </CardWrapper>
    </motion.div>
  );
}

export function WorksGrid({ works }: { works: any[] }) {
  return (
    <div className="w-full">
      {works.map((work, index) => (
        <WorkCard key={work.id} work={work} index={index} />
      ))}
    </div>
  );
}
