import Image from "next/image";

const Button = ({ text, color, size, icon, onClick }) => {
  return (
    <button
      className={`${color} ${size} flex text-lg font-medium text-white items-center gap-2 rounded-xl mx-auto lg:m-0`}
      onClick={onClick}
    >
      <span className="mx-auto">{`${text} `}</span>
      {icon && <Image src={icon} alt="Button icon" width={25} height={25} />}
    </button>
  );
};

export default Button;
