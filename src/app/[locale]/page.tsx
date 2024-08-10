import { Footer, Header } from "@/components";
import { FifthSection, FirstSection, SecondSection, SeventhSection, ThirdSection } from "@/sections";
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
      <SeventhSection />
      <Footer />
    </main>
  );
}
