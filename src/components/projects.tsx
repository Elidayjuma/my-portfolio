import { FaLinkSlash, FaToolbox, FaLightbulb, FaListUl } from "react-icons/fa6";
import { projects } from "../data/projects";

export default function ProjectsList() {
    return (
        <section className="w-full max-w-4xl mx-auto py-8" id="projects">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaToolbox className="text-primary" /> Projects
            </h2>
            <div className="flex flex-col gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={project.title}
                        className={`
                            rounded-lg border border-gray-200 dark:border-neutral-800 p-6 shadow-sm bg-white dark:bg-neutral-900
                            transition-all duration-300
                            hover:scale-105
                            ${idx % 2 === 0
                                ? "hover:translate-x-4"
                                : "hover:-translate-x-4"}
                            hover:shadow-2xl
                            cursor-pointer
                        `}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <FaLightbulb className="text-yellow-500" />
                                {project.title}
                            </h3>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                            >
                                Visit <FaLinkSlash />
                            </a>
                        </div>
                        <div className="mb-2 flex flex-wrap gap-2 text-xs">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Problem:</span> {project.problem}
                        </p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Solution:</span> {project.solution}
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2">
                            {project.how.map((point, idx) => (
                                <li key={idx}>
                                    <FaListUl className="inline mr-1 text-xs" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}