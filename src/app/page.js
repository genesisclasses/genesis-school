// import Image from "next/image";
import GenesisPath from "@/components/home/GenesisPath";
import Hero from "@/components/home/Hero";
import Herocard from "@/components/home/Herocard";
import OurAlumni from "@/components/home/OurAlumni";
import SecondSection from "@/components/home/SecondSection";
import Snapshots from "@/components/home/Snapshots";
// import YoungMinds from "@/components/home/YoungMinds";
import AdmissionsSection from "@/components/home/AdmissionsSection";
import Toppers from "@/components/home/Toppers";
import ContactUs from "@/components/home/ContactUs";
import SchoolLife from "@/components/home/SchoolLife";
import ProjectDarpan from "@/components/projectdarpan/ProjectDarpanComponent";

export default function Home() {
  return (
   <>
<Hero />
<Herocard />
<SecondSection/>
{/* <YoungMinds/> */}
<GenesisPath />
<AdmissionsSection/>
<Toppers/>
<OurAlumni/>
<ProjectDarpan/>
<Snapshots/>
<SchoolLife/>
<ContactUs/>
   </>
  );
}
