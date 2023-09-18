import Image from "next/image";

const Button = () => {
  return (
    <button className="bg-secondary flex text-lg px-8 py-3 font-medium text-white items-center gap-2 rounded-xl">
      Resume{" "}
      <Image src={"/images/icons/download-icon.svg"} width={30} height={30} />
    </button>
  );
};

export default Button;
