import Image from "next/image";
import Hero from "./components/home/Hero";
import Herocard from "./components/home/Herocard";
import SecondSection from "./components/home/SecondSection";
import YoungMinds from "./components/home/YoungMinds";
import GenesisPath from "./components/home/GenesisPath";
import OurAlumni from "./components/home/OurAlumni";
import ProjectDarpan from "./components/home/ProjectDarpan";
import Snapshots from "./components/home/Snapshots";

export default function Home() {
  return (
   <>
<Hero />
<Herocard />
<AdmissionsSection/>
<Toppers/>
<SecondSection />
<YoungMinds />
<GenesisPath />
<OurAlumni/>
<ProjectDarpan/>
<Snapshots/>
   </>
  );
}
