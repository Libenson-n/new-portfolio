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
    <section className="max-w-[1000px] mx-auto px-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">Projects</h2>
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
          <CardContent className="flex gap-5">
            <Image
              src={"/my-cookbook-home.png"}
              height={200}
              width={200}
              alt="project screenshot"
              className="rounded-lg shadow-lg"
            />
            <p>
              Features:
              <br />
              User Authentication: Secure sign-up and login using Clerk.
              <br />
              Recipe Creation: Users can easily create and edit their own
              recipes.
              <br />
              Recipe Sharing: Share your recipes with the community and explore
              others' creations.
              <br />
              Responsive Design: Beautifully crafted UI that works on all
              devices.
              <br />
              Type Safety: Leveraging TypeScript for a robust development
              experience.
            </p>
          </CardContent>
          <CardFooter className="flex gap-5">
            <Link
              href={"https://github.com/Libenson-n/my-recipe-book"}
              target="_blank"
              className="flex items-center gap-2 border rounded-full p-2 shadow-md bg-orange-600 text-white"
            >
              <p>
                <FontAwesomeIcon icon={faGithub} className="h-4" />
              </p>
              <p>Repo</p>
            </Link>

            <Link
              href={"https://my-recipe-book-tawny.vercel.app/"}
              target="_blank"
              className="flex items-center gap-2 border rounded-full p-2 shadow-md bg-orange-600 text-white"
            >
              Live site
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Link
              href={"https://my-recipe-book-tawny.vercel.app/"}
              target="_blank"
            >
              <CardTitle>Expense Tracker</CardTitle>
              <CardDescription>
                Tech Stack: <br /> NextJs, TypeScript, Tailwind CSS, MongoDB,
                Mongoose ODM
              </CardDescription>
            </Link>
          </CardHeader>
          <CardContent className="flex gap-5">
            <Image
              src={"/expense-tracker.png"}
              height={200}
              width={200}
              alt="project screenshot"
              className="rounded-lg shadow-lg"
            />
            <p>
              Features:
              <br />
              User Authentication: Secure registration and login functionality.{" "}
              <br />
              Transaction Management: Easily add, edit, and delete transactions.
              <br />
              Income vs. Expenses Tracking: Visual representation of financial
              health through a dashboard.
              <br />
              Responsive Design: Optimized for both mobile and desktop devices
              using Tailwind CSS.
              <br />
              Type Safety: Leveraging TypeScript for a robust development
              experience.
            </p>
          </CardContent>
          <CardFooter className="flex gap-5">
            <Link
              href={"https://github.com/Libenson-n/expense-tracker"}
              target="_blank"
              className="flex items-center gap-2 border rounded-full p-2 shadow-md bg-orange-600 text-white"
            >
              <p>
                <FontAwesomeIcon icon={faGithub} className="h-4" />
              </p>
              <p>Repo</p>
            </Link>

            <Link
              href={"https://leebs-expense-tracker.vercel.app/"}
              target="_blank"
              className="flex items-center gap-2 border rounded-full p-2 shadow-md bg-orange-600 text-white"
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
