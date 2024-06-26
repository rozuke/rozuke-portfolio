import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-tertiary text-white lg:text-lg">
      <div className="flex flex-col items-center gap-3 py-3 lg:flex-row lg:mx-auto lg:justify-between lg:w-10/12">
        <p>2023, Rozuke</p>
        <div className="flex items-center flex-col space-y-2 lg:flex-row lg:gap-4">
          <figcaption>Member of KiwIT Agency</figcaption>
          <figure>
            <Link href={"https://www.kiwitagency.io/"} target="_blank">
              <Image
                src="/images/icons/kiwitlogo2.svg"
                width={70}
                height={50}
                alt="KiwIT logo"
              />
            </Link>
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
