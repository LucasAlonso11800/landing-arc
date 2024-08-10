import { Footer, Header } from "@/components";
import { FifthSection, FirstSection, SecondSection, SeventhSection, SixthSection, ThirdSection } from "@/sections";
import FourthSection from "@/sections/FourthSection";

export default function Home() {
  return (
    <main>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </main>
  );
}
