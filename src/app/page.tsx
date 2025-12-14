import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HubungiKami from "@/components/HubungiKami";
import KeunggulanKami from "@/components/KeunggulanKami";
import LayananPPOB from "@/components/LayananPPOB";
import TentangKami from "@/components/TentangKami";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <KeunggulanKami />
      <TentangKami />
      <LayananPPOB />
      <HubungiKami />
      <Footer />
    </div>
  );
}
