import Globality from "./ui/components/home-components/Globality";
import { HeroContent } from "./ui/components/home-components/HeroContent";
import { HeroVideo } from "./ui/components/home-components/HeroVideo";
import { Testimonials } from "./ui/components/home-components/Testimonials";
import MoreAbout from "./ui/components/home-components/MoreAbout";
import { Services } from "./ui/components/home-components/Services";
import { Partner } from "./ui/components/home-components/Partner";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      {/* Sección Hero */}
      <section className="relative w-full h-[650px] overflow-y-hidden">
        <HeroVideo src="/metisoriginvideo.mp4" poster="/weiss.png" />
        <div className="absolute ml-5 p-3 inset-0 flex flex-col items-center justify-center text-white z-10">
          <HeroContent />
        </div>
      </section>
      {/* Services section */}
      <section>
        <Services />
      </section>
      {/* unsere globality section */}
      <section>
        <Globality />
      </section>
      
      {/* Location and more services */}
      <section>
        <MoreAbout />
      </section>

      {/* Kunden bewertungen */}
      <section>
        <Testimonials />
      </section>
    </main>
  );
}