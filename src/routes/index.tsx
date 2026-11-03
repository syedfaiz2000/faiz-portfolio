import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { BackToTop } from "@/components/back-to-top";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { Experience } from "@/sections/experience";
import { Services } from "@/sections/services";
import { Stats } from "@/sections/stats";
// import { Testimonials } from "@/sections/testimonials";
import { Contact } from "@/sections/contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Experience />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
