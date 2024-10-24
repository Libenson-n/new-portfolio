import Blog from "./_components/Blog";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}
