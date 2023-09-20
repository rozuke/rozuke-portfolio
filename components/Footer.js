import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-tertiary text-white flex flex-col items-center gap-3 py-3">
      <p>2023, Rozuke</p>
      <div className="flex items-center flex-col space-y-2">
        <figcaption>Member of KiwIT Agency</figcaption>
        <figure>
          <Image
            src="/images/icons/kiwitlogo2.svg"
            width={70}
            height={50}
            alt="KiwIT logo"
          />
        </figure>
      </div>
      <div className="flex items-center space-x-2">
        <figure>
          <Image
            src="/images/icons/email-icon.svg"
            width={20}
            height={20}
            alt="Email icon"
          />
        </figure>
        <figcaption>rodrigo.sulca499@gmail.com</figcaption>
      </div>
    </footer>
  );
};

export default Footer;