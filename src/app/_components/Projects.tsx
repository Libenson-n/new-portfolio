import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="h-screen max-w-[1000px] mx-auto px-10">
      <div>
        <Card>
          <CardHeader>
            <Link
              href={"https://my-recipe-book-tawny.vercel.app/"}
              target="_blank"
            >
              <CardTitle>My Cookbook</CardTitle>
              <CardDescription>
                Tech Stack: <br /> NextJs, TypeScript, Tailwind CSS, PostgreSQL,
                Prisma ORM
              </CardDescription>
            </Link>
          </CardHeader>
          <CardContent>
            <Image
              src={"/my-cookbook-home.png"}
              height={200}
              width={200}
              alt="project screenshot"
              className="rounded-lg shadow-lg"
            />
          </CardContent>
          <CardFooter className="flex gap-5">
            <Link
              href={"https://github.com/Libenson-n/my-recipe-book"}
              target="_blank"
              className="flex items-center gap-2 border rounded-full p-2 shadow-md bg-indigo-700 text-white"
            >
              <p>
                <FontAwesomeIcon icon={faGithub} className="h-4" />
              </p>
              <p>Repo</p>
            </Link>

            <Link
              href={"https://my-recipe-book-tawny.vercel.app/"}
              target="_blank"
              className="flex items-center gap-2 border rounded-full p-2 shadow-md bg-indigo-700 text-white"
            >
              Live site
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
