import Navigation from "./Navigation/navigation";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full flex justify-center items-center py-4 px-6 bg-white dark:bg-black shadow">
            <Navigation />
        </header>
    );
}