import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="h-screen max-w-[1000px] mx-auto px-32 flex justify-center  flex-col text-5xl">
      <p>
        Hi, I'm Libenson <br />
        <span className="text-indigo-700 font-semibold">
          Full-Stack Web Developer
        </span>
      </p>
      <p className="text-lg">I love learning and creating things</p>
      <div className="flex gap-5 text-zinc-600">
        <FontAwesomeIcon icon={faDiscord} className="h-8" />
        <FontAwesomeIcon icon={faLinkedin} className="h-8" />
        <FontAwesomeIcon icon={faEnvelope} className="h-8" />
      </div>
    </section>
  );
};

export default Hero;
