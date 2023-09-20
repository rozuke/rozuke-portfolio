import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex py-5 w-10/12 mx-auto">
      <div className="md:space-x-6 md:text-accent-200 md:font-bold md:text-base hidden md:block">
        <Link href={"/"}>Home</Link>
        <Link href={"#skills"}>Skills</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
        <Link href={"/"}>Articles</Link>
      </div>
      <div className="w-full flex space-x-6 justify-end">
        <a href="https://github.com/rozuke/" target="_blank">
          <Image
            src="/images/icons/github-icon.svg"
            alt="Github icon"
            width={20}
            height={20}
          />
        </a>
        <a href="https://www.linkedin.com/in/rodrigo-e-sulca/" target="_blank">
          <Image
            src="/images/icons/linkedin-icon.svg"
            alt="Linkedin icon"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01b0f3b4792e55c5c3"
          target="_blank"
        >
          <Image
            src="/images/icons/upwork-icon.svg"
            alt="Upwork icon"
            width={20}
            height={20}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
