import DownloadSection from "@/components/Download";
import Accordion from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DownloadSection />
      <Accordion />
      <Footer />
    </div>
  );
}
