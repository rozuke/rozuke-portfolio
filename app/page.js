import Button from "@/components/Button";
import Title from "@/components/Title";
import Image from "next/image";
import { skills } from "@/utils/skills";
export default function Home() {
  return (
    <>
      <div className="bg-image min-h-full">
        <nav className="w-full flex space-x-8 justify-end px-5 py-3">
          <a href="https://github.com/rozuke/" target="_blank">
            <Image src="/images/icons/github-icon.svg" width={30} height={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-e-sulca/"
            target="_blank"
          >
            <Image
              src="/images/icons/linkedin-icon.svg"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01b0f3b4792e55c5c3"
            target="_blank"
          >
            <Image src="/images/icons/upwork-icon.svg" width={30} height={30} />
          </a>
        </nav>
        <main className="flex flex-col items-center text-center w-11/12 mx-auto mt-20">
          <h1 className="text-white text-4xl font-bold">
            Hi my name is <br />
            Rodrigo Sulca
          </h1>
          <h2 className="text-2xl font-medium italic text-secondary-200 m-4">
            Backend Developer
          </h2>
          <h3 className="text-white text-lg">
            I am a System Engineering from Bolivia with a passion for technology
            and developing innovative solutions.
          </h3>
          <div className="my-6">
            <Button />
          </div>
          <Image src={"/images/rozuke-ia.png"} width={268} height={268} />
        </main>
      </div>
      <section className="w-10/12 mx-auto">
        <div className="mt-12">
          <Title title={"Skills"} />
        </div>
        <ul className="flex flex-wrap items-center">
          {skills.map((skill) => {
            return (
              <li className="text-white w-1/2 text-center mt-10">
                <Image
                  src={skill.image}
                  width={45}
                  height={45}
                  className="margin-center"
                  alt={`${skill.name} icon`}
                />
                <p>{skill.name}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="w-10/12 mx-auto">
        <div className="mt-12">
          <Title title={"Projects"} />
        </div>
      </section>
    </>
  );
}
