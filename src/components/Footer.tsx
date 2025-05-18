import SocialLinks from "./contact";
export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center justify-center py-6 gap-2 bg-gray-50 dark:bg-neutral-900 text-sm">
            <div className="flex gap-4">
                <SocialLinks />
                <a href="mailto:elidayjuma@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Eliutherius Juma</span>
        </footer>
    );
}