import { skillGroups } from "../data/skills";
import { FaCheck } from "react-icons/fa6";

export default function SkillsGrid() {
    return (
        <section className="w-full max-w-4xl mx-auto py-8" id="skills">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaCheck className="text-green-500" /> Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillGroups.map((group) => (
                    <div key={group.category} className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4">
                        <h3 className="font-semibold mb-2">{group.category}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded text-sm cursor-pointer hover:bg-gray-800"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}