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
  return (
    <>
      <div className="bg-image min-h-full" id="home">
        <Navbar />
        <main className="flex flex-col items-center text-center w-10/12 mx-auto mt-20">
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
            <Button
              text="Resume"
              color="bg-secondary"
              size="px-8 py-3"
              icon="/images/icons/download-icon.svg"
            />
          </div>
          <Image
            src={"/images/rozuke-ia.png"}
            alt="Rozuke photo"
            width={268}
            height={268}
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
              <li className="text-white w-1/2 text-center mt-10 md:w-2/6">
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
        <div className="grid grid-cols-12 space-y-10">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>
      <section className="w-10/12 mx-auto" id="contact">
        <div className="mt-12 mb-6">
          <Title title={"Contact"} />
        </div>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded px-3 py-2 bg-accent-100 focus:outline-none focus:border-accent"
            placeholder="Email"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="w-full border rounded mt-6 px-3 py-2 bg-accent-100 focus:outline-none focus:border-accent"
            rows="6"
            required
          ></textarea>
          <div className="my-6">
            <Button text="Send" color="bg-primary" size="w-full py-4" />
          </div>
        </form>
      </section>
      <section>
        <Footer />
        <div className="h-14 md:hidden"></div>
      </section>
      <Tabbar />
    </>
  );
}
