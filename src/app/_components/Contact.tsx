import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="max-w-[1000px] mx-auto px-10 mt-10">
      <h2 className="text-3xl">Contacts</h2>
      <div className="flex justify-center h-full my-32 gap-5">
        <Link href="https://github.com/Libenson-n" target="_blank" className="">
          <FontAwesomeIcon icon={faGithub} className="h-20 text-orange-600" />
          <p className="text-center">GitHub</p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/libenson-nicolas/"
          target="_blank"
          className=""
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-20 text-orange-600" />
          <p className="text-center">LinkedIn</p>
        </Link>
        <Link href="mailto:libenson.n@gmail.com" target="_blank" className="">
          <FontAwesomeIcon icon={faEnvelope} className="h-20 text-orange-600" />
          <p className=" text-center">Email</p>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
