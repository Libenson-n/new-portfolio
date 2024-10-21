import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen max-w-[1000px] mx-auto px-32 flex justify-center  flex-col text-5xl gap-6">
      <div className="flex items-center justify-between">
        <p className="font-bold">
          Hi, I'm Libenson <br />
          <span className="text-indigo-700 font-semibold">A web developer</span>
        </p>
        <Image
          src="/PORTRAIT.jpg"
          height={200}
          width={200}
          alt="portrait"
          className="rounded-full shadow-md border"
        />
      </div>
      <p className="text-lg">
        I'm passionate about creating responsive, user-friendly websites. With
        expertise in HTML, CSS, JavaScript, TypeScript and various frameworks
        and libraries like NextJS and ReactJS, I strive to build innovative
        solutions that enhance user experience. I'm always eager to learn new
        technologies and collaborate on exciting projects.
      </p>
      <div className="flex gap-5 text-zinc-600">
        <Link
          href="https://github.com/Libenson-n"
          target="_blank"
          className="flex items-center gap-2 border rounded-full p-2 shadow-md bg-indigo-700 text-white"
        >
          <FontAwesomeIcon icon={faGithub} className="h-8" />
          <p className="text-xs">GitHub</p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/libenson-nicolas/"
          target="_blank"
          className="flex items-center gap-2 border rounded-full px-2 shadow-md bg-indigo-700 text-white"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-8" />
          <p className="text-xs">LinkedIn</p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
