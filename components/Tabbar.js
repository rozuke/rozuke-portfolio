import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tabbar = () => {
  return (
    <div className="w-full h-14 bg-background fixed left-0 bottom-0 flex justify-around items-center my-auto">
      <Link href="#home">
        <Image
          src={"/images/icons/house-icon.svg"}
          width={30}
          height={30}
          alt="Home icon"
        />
      </Link>
      <Link href="#skills">
        <Image
          src={"/images/icons/nut-icon.svg"}
          width={30}
          height={30}
          alt="Nut icon"
        />
      </Link>
      <Link href="#projects">
        <Image
          src={"/images/icons/briefcase-icon.svg"}
          width={30}
          height={30}
          alt="Briefcase icon"
        />
      </Link>
      <Link href="#contact">
        <Image
          src={"/images/icons/contact-icon.svg"}
          width={30}
          height={30}
          alt="Contact icon"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/rodrigo-e-sulca/" target="_blank">
        <Image
          src={"/images/icons/article-icon.svg"}
          width={30}
          height={30}
          alt="Article icon"
        />
      </Link>
    </div>
  );
};

export default Tabbar;
