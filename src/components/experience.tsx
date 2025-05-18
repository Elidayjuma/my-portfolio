import { experiences } from "../data/experience";
import { FaBuilding, FaCalendarDays, FaCheck } from "react-icons/fa6";

export default function ExperienceTimeline() {
    return (
        <section className="w-full max-w-4xl mx-auto py-8" id="experience">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaBuilding className="text-primary" /> Work & Experience
            </h2>
            <ol className="relative border-l border-gray-300 dark:border-neutral-700">
                {experiences.map((exp, idx) => (
                    <li key={idx} className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-neutral-900 dark:bg-blue-900">
                            <FaCheck className="text-blue-600 dark:text-blue-400" />
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                {exp.position} <span className="text-gray-500"> @ {exp.company}</span>
                            </h3>
                            <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                                <FaCalendarDays /> {exp.period}
                            </span>
                        </div>
                        <ul className="mt-2 ml-2 list-disc text-gray-700 dark:text-gray-300 text-sm">
                            {exp.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    );
}