// pages/index.tsx
import Education from "@/components/organisms/Education";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/HeroSection";
import MyKnowledge from "@/components/organisms/MyKnowledge";
import Portfolio from "@/components/organisms/Portfolio";
import HomeLayout from "@/components/templates/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center m-0 gap-[42px]">
        <Hero />
        <MyKnowledge/>
        <Education/>
        <Portfolio/>
        <Footer/>
      </div>
    </HomeLayout>
  );
}
