import Hero from "@/components/Hero";
import Histoire from "@/components/Histoire";
import Univers from "@/components/Univers";
import Seances from "@/components/Seances";
import QuiSommesNous from "@/components/QuiSommesNous";
import Temoignages from "@/components/Temoignages";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Histoire />
      <Univers />
      <Seances />
      <QuiSommesNous />
      <Temoignages />
      <Faq />
    </main>
  );
}
