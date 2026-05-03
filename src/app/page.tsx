import { HeroBanner } from "@/components/HeroBanner";
import { ProfileCard } from "@/components/ProfileCard";
import { WorksGrid } from "@/components/WorksGrid";
import { link } from "fs";

export default function Home() {
  const works = [
    {
      id: 1,
      title: "FATBOII MQT - Growing Pain (Official Music Video)",
      author: "JUPITER & ECHO.DRP",
      aspect: "aspect-[16/9]",
      image: "/536445938_17847597423545367_7335356746017752612_n.jpg",
      link: "https://www.youtube.com/watch?v=ogkwpaHt2QA",
      youtubeId: "ogkwpaHt2QA",
      description: "Music Video Presented by พลุ\nDirector: JUPITER @jupiter_xml\nCamera Operator: ECHO.DRP @echo.drp\nProduction Manager: HWALAZ\nSponsor: DIFFERFROMFAMM @differfromfamm"
    },
    {
      id: 2,
      title: "Take - PKPRTN",
      author: "echo.drp",
      aspect: "aspect-[16/9]",
      image: "/541356623_17850138618545367_931136616449293416_n.jpg",
      link: "https://www.youtube.com/watch?v=p-TyhJcATss",
      youtubeId: "p-TyhJcATss",
      description: "Presented by พลุ\nDirected by @echo.drp\nCamera Operator : echo.drp\nEditor : echo.drp\nAssistant editor : JUPITER @jupiter_xml"
    },
    {
      id: 3,
      title: "REALRIFLE - ดาวิกา(24/7) [Official Music Video]",
      author: "JUPITER",
      aspect: "aspect-[16/9]",
      image: "/552997833_17852705106545367_3640752857378558278_n.jpg",
      link: "https://www.youtube.com/watch?v=rjQwGWb-lvI&list=RDrjQwGWb-lvI&start_radio=1",
      youtubeId: "rjQwGWb-lvI",
      description: "Directed by JUPITER @jupiter_xml\nStylist by iicecraft\nProducer Manager by hwalaz\nDOP by echo.drp @echo.drp\nEditor by JUPITER\nColorist by echo.drp\nGaffer by Bas.Thossaporn\nSupport by Differfromfamm"
    },
    {
      id: 4,
      title: "SURIYA MQT X P6ICK - BU (Official Music Video)",
      author: "JUPITER",
      aspect: "aspect-[16/9]",
      image: "/553757352_17852559429545367_774261521218216487_n.jpg",
      link: "https://www.youtube.com/watch?v=GapL8bLsduo&list=RDGapL8bLsduo&start_radio=1",
      youtubeId: "GapL8bLsduo",
      description: "Director: JUPITER @jupiter_xml\nCo-Director: BK @bhurichaya.kosi , HWALAZ\nProduction Manager: HWALAZ\nCamera Operator: ECHO.DRP @echo.drp\nEditor : JUPITER\nColorisr: JUPITER"
    },
    {
      id: 5,
      title: "ARTIST - Time to fly feat. SEXSKI (PROD.CK$)",
      author: "JUPITER",
      aspect: "aspect-[16/9]",
      image: "/610308443_17865246675545367_7555010132737175829_n.jpg",
      link: "https://www.youtube.com/watch?v=ElROM47-xRU&list=RDElROM47-xRU&start_radio=1",
      youtubeId: "ElROM47-xRU",
      description: "Directed by JUPITER @jupiter_xml\nCamera Operator : ECHO @echoechosofxxkingawesome\nProduction Manager : HWALAZ @hwalaz.t\nEdit & color : JUPITER"
    },
    {
      id: 6,
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
      id: 7,
      title: "UROLL - Walk In Da Street (Prod.@ULUVYK) (OFFICIAL MUSIC VIDEO)",
      author: "JUPITER",
      aspect: "aspect-[16/9]",
      image: "/610528513_17865387213545367_3891508364164957402_n.jpg",
      link: "https://www.youtube.com/watch?v=vJIy_eMCDso&list=RDvJIy_eMCDso&start_radio=1",
      youtubeId: "vJIy_eMCDso",
      description: "Directed by JUPITER\nProduction Manager : HWALAZ @hwalaz.t\nShot by ECHO @echoechosofxxkingawesome\nEditor : JUPITER\nColor : ECHO"
    },
    {
      id: 8,
      title: "OLLA - “สิงอมควัน” [OFFICIAL MUSIC VIDEO]",
      author: "wลุ",
      aspect: "aspect-[16/9]",
      image: "/610572078_17865262674545367_4372901970757853630_n.jpg",
      link: "https://www.youtube.com/watch?v=gWbxGiFoi3I&list=RDgWbxGiFoi3I&start_radio=1",
      youtubeId: "gWbxGiFoi3I",
      description: "Directed by wลุ\nDOP : JUPITER @jupiter_xml\nCamera Operator : ECHO @echoechosofxxkingawesome\nProduction manager : HWALAZ @hwalaz.t\nLighting : ECHO\nEditor & color : ECHO , JUPITER\nVFX : JUPITER\nFootage : Dino(s)"
    },
    {
      id: 9,
      title: "Time to fly feat. SEXSKI (PROD.CK$) [OFFICIAL MV]",
      author: "JUPITER",
      aspect: "aspect-[16/9]",
      image: "/610915950_17865154332545367_3301557497705027202_n.jpg",
      link: "https://www.youtube.com/watch?v=ElROM47-xRU&list=RDElROM47-xRU&start_radio=1",
      youtubeId: "ElROM47-xRU",
      description: "Directed by JUPITER @jupiter_xml\nCamera Operator : ECHO @echoechosofxxkingawesome\nProduction Manager : HWALAZ @hwalaz.t\nEdit & color : JUPITER"
    },
    {
      id: 10,
      title: "SURIYA MQT X P6ICK - BODY Feat. DIAMOND MQT, FATBOII MQT",
      author: "JUPITER",
      aspect: "aspect-[16/9]",
      image: "/610941512_17865380751545367_3944306034255927969_n.jpg",
      link: "https://www.youtube.com/watch?v=e1sISrYbtW4&list=RDe1sISrYbtW4&start_radio=1",
      youtubeId: "e1sISrYbtW4",
      description: "Music Video Presented by พลุ\nDirected by JUPITER @jupiter_xml\nAssistant Director : ECHO @echoechosofxxkingawesome\nProduction Manager : HWALAZ @hwalaz.t\nCamera Operator : ECHO\nGaffer : JUPITER , LAMP @____lamp____\nEditor : SURIYA @suriya.mqt , JUPITER\nColor : ECHO"
    },
    {
      id: 11,
      title: "ROLE MAN - เบบี้ (Baby) [Official Music Video]",
      author: "JUPITER",
      aspect: "aspect-[16/9]",
      image: "/611701933_17865435315545367_6792650090077724674_n.jpg",
      link: "https://www.youtube.com/watch?v=10YaW65XRCY&list=RD10YaW65XRCY&start_radio=1",
      youtubeId: "10YaW65XRCY",
      description: "Directed by JUPITER @jupiter_xml\nProduction Manager : HWALAZ @hwalaz.t\nShot by ECHO @echoechosofxxkingawesome\nEditor & Color : JUPITER"
    },
    {
      id: 12,
      title: "FATBOII MQT - เจ้านกน้อย Ft. 6ixTown, Z9, wut",
      author: "ECHO & BK",
      aspect: "aspect-[16/9]",
      image: "/612449486_17865334062545367_715340683247129555_n.jpg",
      link: "https://www.youtube.com/watch?v=VQntpNZYYz8&list=RDVQntpNZYYz8&start_radio=1",
      youtubeId: "VQntpNZYYz8",
      description: "Directed by : ECHO & BK @echoechosofxxkingawesome\nAssistant Director: Wararat Thanachockcheewathun\nProduction Manager: HWALAZ @hwalaz.t\nDirector Of Photography: JUPITER @jupiter_xml\nAssistant Camera: Kitayot Pasakornmetee\nGaffer: Jiranuwat Phettip\nLighting: Krittamet Thongsai & Tim Oestensen\nArt Director: Arreerat Jantaramanee\nEdit & Color : ECHO"
    },
    {
      id: 13,
      title: "Beta DTP - DEKTHAPHRA Feat. UROLL Bellinium (Official Music Video)",
      author: "JUPITER",
      aspect: "aspect-[16/9]",
      image: "/612235981_17865385635545367_5922310102530658002_n.jpg",
      link: "https://www.youtube.com/watch?v=J79uZbLao8E&list=RDJ79uZbLao8E&start_radio=1",
      youtubeId: "J79uZbLao8E",
      description: "Directed by JUPITER @jupiter_xml\nProduction Manager : HWALAZ @hwalaz.t\nShot by ECHO @echoechosofxxkingawesome\nEditor & Color : JUPITER"
    },
    {
      id: 14,
      title: "LET’S GO (Say she love Young Sex freestyle) Feat. 2K",
      author: "ECHO",
      aspect: "aspect-[16/9]",
      image: "/626178994_17869847781545367_5987068704260653050_n (1).jpg",
      description: "Directed by : ECHO @echoechosofxxkingawesome\nProductions manager : HWALAZ\nAssistant director : Lamp @____lamp____\nShot by : ECHO\nAssistant camera : Lamp\nB-roll : nonindia @nonindia\nEditor : JUPITER @jupiter_xml\nColorist : JUPITER"
    }

  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-gray-200 selection:text-black">


      <HeroBanner />

      {/* MAIN LAYOUT */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 -mt-10 md:-mt-20">

          {/* Left Sidebar: Profile Card */}
          <aside className="w-full md:w-[320px] flex-shrink-0">
            <ProfileCard />
          </aside>

          {/* Right Content: Works Grid */}
          <main className="flex-1 pt-8 md:pt-24">
            <div className="mb-8 border-b border-gray-100 pb-4">
              <h2 className="text-[20px] md:text-[22px] font-medium text-gray-800 mb-4">14 videos</h2>
              <h3 className="text-xs md:text-sm font-semibold tracking-wider text-black uppercase">Director Work</h3>
            </div>
            <WorksGrid works={works} />
          </main>

        </div>
      </div>
    </div>
  );
}