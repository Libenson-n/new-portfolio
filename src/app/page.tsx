import Contact from "./_components/Contact";
import About from "./_components/About";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
