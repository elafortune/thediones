import { ViewTransition } from "react";
import Hero from "@/components/Hero";
import Histoire from "@/components/Histoire";
import Defis from "@/components/Defis";
import Univers from "@/components/Univers";
import Seances from "@/components/Seances";
import QuiSommesNous from "@/components/QuiSommesNous";
import Temoignages from "@/components/Temoignages";
import Faq from "@/components/Faq";
import Videos from "@/components/Videos";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <ViewTransition
        enter={{
          "nav-forward": "nav-forward",
          "nav-back": "nav-back",
          default: "none",
        }}
        exit={{
          "nav-forward": "nav-forward",
          "nav-back": "nav-back",
          default: "none",
        }}
        default="none"
      >
        <Hero />
        <Histoire />
        <Defis />
        <Univers />
        <SectionDivider />
        <Seances />
        <SectionDivider />
        <QuiSommesNous />
        <SectionDivider />
        <Temoignages />
        <Faq />
        <Videos />
      </ViewTransition>
    </main>
  );
}
