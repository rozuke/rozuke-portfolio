import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-span-12">
      <article className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl  border  border-solid  border-accent-100 bg-background p-6  shadow-2xl">
        <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-accent-100 xs:h-[102%] xs:rounded-[1.5rem]"></div>
        <div className="w-full overflow-hidden rounded-lg">
          <Link
            href={project.websiteURL ? project.websiteURL : project.githubURL}
            target="_blank"
          >
            <Image
              loading="lazy"
              alt={project.description}
              width={1200}
              height={720}
              src={project.image}
              className="h-auto w-full"
            />
          </Link>
        </div>
        <div className="mt-4 flex w-full flex-col items-start justify-between">
          <span className="text-accent-400 text-lg font-medium">
            {project.type}
          </span>
          <h3 className="text-white text-2xl font-bold my-4">
            {project.description}
          </h3>
          <div className="flex w-full items-center  justify-between">
            {project.websiteURL && (
              <Link
                href={project.websiteURL}
                target="_blank"
                className="text-white text-base underline"
              >
                Visit
              </Link>
            )}
            <Link href={project.githubURL} target="_blank">
              <Image
                src={"/images/icons/github-icon.svg"}
                alt="Github icon"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
