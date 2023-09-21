"use client";
import Button from "@/components/Button";
import Title from "@/components/Title";
import Image from "next/image";
import { skills } from "@/utils/skills";
import { projects } from "@/utils/projects";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Tabbar from "@/components/Tabbar";
import Navbar from "@/components/Navbar";
export default function Home() {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/17J4zlYx8ogo5T7P-91JpEIvNPX---YiN/view?usp=drive_link",
      "_blank"
    );
  };
  return (
    <>
      <div className="bg-image min-h-full" id="home">
        <Navbar />
        <main className="flex flex-col items-center justify-center text-center w-10/12 mx-auto mt-20 lg:flex-row lg:text-left lg:justify-between">
          <div className="lg:flex lg:flex-col lg:gap-y-4 lg:w-1/2 lg:pr-8">
            <h1 className="text-white text-4xl font-bold lg:text-5xl">
              Hi my name is <br />
              Rodrigo Sulca
            </h1>
            <h2 className="text-2xl font-medium italic text-secondary-200 my-4 lg:text-4xl">
              Backend Developer
            </h2>
            <h3 className="text-white text-lg lg:text-2xl">
              I am a System Engineering from Bolivia with a passion for
              technology and developing innovative solutions.
            </h3>
            <div className="my-6 text-center">
              <Button
                text="Resume"
                color="bg-secondary"
                size="px-8 py-3"
                icon="/images/icons/download-icon.svg"
                onClick={openResume}
              />
            </div>
          </div>
          <Image
            src={"/images/rozuke-ia.png"}
            alt="Rozuke photo"
            width={750}
            height={750}
            className="lg:ml-6 lg:w-1/2"
          />
        </main>
      </div>
      <section className="w-10/12 mx-auto" id="skills">
        <div className="mt-12">
          <Title title={"Skills"} />
        </div>
        <ul className="flex flex-wrap items-center">
          {skills.map((skill) => {
            return (
              <li
                className="text-white w-1/2 text-center mt-10 md:w-2/6 lg:w-1/4 lg:text-lg"
                key={skill.name}
              >
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
      <section className="w-10/12 mx-auto" id="projects">
        <div className="mt-12 mb-6">
          <Title title={"Projects"} />
        </div>
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>
      <section className="relative mt-12" id="contact">
        <div className="w-10/12 mx-auto">
          <div className=" mb-6">
            <Title title={"Contact"} />
          </div>
          <form className="flex flex-col lg:w-2/5 lg:gap-6">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3 py-2  bg-accent-100 focus:outline-none focus:border-accent shadow-md shadow-primary"
              placeholder="Email"
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full border rounded mt-6 px-3 py-2 bg-accent-100 focus:outline-none focus:border-accent shadow-md shadow-primary"
              rows="6"
              required
            ></textarea>
            <div className="my-6">
              <Button
                text="Send"
                color="bg-primary"
                size="w-full py-4 lg:w-1/2"
              />
            </div>
          </form>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0">
          <Image
            src={"/images/coding-rubick.png"}
            width={775}
            height={670}
            className=" h-full ml-auto "
          />
        </div>
      </section>
      <section className="lg:mt-20">
        <Footer />
        <div className="h-14 md:hidden"></div>
      </section>
      <Tabbar />
    </>
  );
}
