import { educationList } from "../data/education";
import { FaGraduationCap } from "react-icons/fa6";

export default function Education() {
    return (
        <section className="w-full max-w-2xl mx-auto py-8" id="education">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-blue-600" /> Education
            </h2>
            <ul className="flex flex-col gap-6">
                {educationList.map((edu, idx) => (
                    <li key={idx} className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4">
                        <div className="font-semibold">{edu.degree}</div>
                        <div className="text-gray-600 dark:text-gray-400">{edu.institution}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}