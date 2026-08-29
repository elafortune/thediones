import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Histoire from "@/components/Histoire";
import Univers from "@/components/Univers";
import Seances from "@/components/Seances";
import QuiSommesNous from "@/components/QuiSommesNous";
import Temoignages from "@/components/Temoignages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Histoire />
        <Univers />
        <Seances />
        <QuiSommesNous />
        <Temoignages />
      </main>
      <Footer />
    </>
  );
}
