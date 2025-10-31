import Image from "next/image";
import Hero from "./components/home/Hero";
import Herocard from "./components/home/Herocard";
import SecondSection from "./components/home/SecondSection";
import YoungMinds from "./components/home/YoungMinds";
import GenesisPath from "./components/home/GenesisPath";

export default function Home() {
  return (
   <>
<Hero />
<Herocard />
<SecondSection />
<YoungMinds />
<GenesisPath />
   </>
  );
}
