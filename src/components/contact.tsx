import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaBlog,
    FaXTwitter,
    FaThreads,
    FaYoutube,
    FaTiktok,
} from "react-icons/fa6";
import { socialLinks } from "../data/contact";

const iconMap: Record<string, React.ReactNode> = {
    GitHub: <FaGithub />,
    Blog: <FaBlog />,
    X: <FaXTwitter />,
    Threads: <FaThreads />,
    LinkedIn: <FaLinkedin />,
    YouTube: <FaYoutube />,
    TikTok: <FaTiktok />,
};

export default function SocialLinks() {
    return (
        <div className="flex gap-4">
            {socialLinks.map((social) => (
                <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    {iconMap[social.label] || social.label}
                </a>
            ))}
        </div>
    );
}