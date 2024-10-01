import Link from "next/link";

const links = ["Projects", "About", "Contact"];

const Header = () => {
  return (
    <nav className="h-16 max-w-[1000px] mx-auto flex justify-between items-center px-10 border-b">
      <Link href="/">Libenson</Link>
      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link}>
            <Link href={"#"}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
