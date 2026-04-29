import { HeroBanner } from "@/components/HeroBanner";
import { ProfileCard } from "@/components/ProfileCard";
import { WorksGrid } from "@/components/WorksGrid";

export default function Home() {
  const works = [
    { 
      id: 1, 
      title: "ภาพที่บาดตา - Ron B ft. BankTazz", 
      author: "echo.drp", 
      duration: "04:30", 
      aspect: "aspect-[16/9]", 
      image: "/534727521_17846784471545367_2889139024276936306_n.jpg", 
      link: "https://www.youtube.com/watch?v=2j3VRIzn3BE",
      youtubeId: "2j3VRIzn3BE",
      description: "Music Video Presented by พลุ\nDirected by : echo.drp\nAssistant Director : Bas thossaporn\nCamera Operator : JUPITER\nProduction Manager : Hwalaz\nLighting Design : echo.drp , JUPITER\nEditor : echo.drp , JUPITER\nColor : echo.drp"
    },
    { 
      id: 2, 
      title: "RAJADAMNERN SPIRIT", 
      author: "DIRECTOR", 
      duration: "03:45", 
      aspect: "aspect-[16/9]", 
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop",
      youtubeId: "2j3VRIzn3BE"
    },
    { id: 3, title: "CARNIVAL x H&M", author: "BE GREAT!!", duration: "01:01", aspect: "aspect-[16/9]", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop" },
    { id: 4, title: "ALLIES OF SKIN", author: "888 CREATIONS", duration: "01:07", aspect: "aspect-[16/9]", image: "https://images.unsplash.com/photo-1540656123490-349f4b16af81?q=80&w=2670&auto=format&fit=crop" },
    { id: 5, title: "Nuunii Animation", author: "Animation Studio", duration: "00:39", aspect: "aspect-[16/9]", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" },
    { id: 6, title: "Neon Echoes", author: "BE GREAT!!", duration: "04:12", aspect: "aspect-[16/9]", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-gray-200 selection:text-black">


      <HeroBanner />
      
      {/* MAIN LAYOUT */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 -mt-20">
          
          {/* Left Sidebar: Profile Card */}
          <aside className="w-full md:w-[320px] flex-shrink-0">
            <ProfileCard />
          </aside>

          {/* Right Content: Works Grid */}
          <main className="flex-1 pt-24">
            <div className="mb-8 border-b border-gray-100 pb-4">
              <h2 className="text-[22px] font-medium text-gray-800 mb-4">27 videos</h2>
              <h3 className="text-sm font-semibold tracking-wider text-black uppercase">Director Work</h3>
            </div>
            <WorksGrid works={works} />
          </main>

        </div>
      </div>
    </div>
  );
}