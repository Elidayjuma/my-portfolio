export default function GithubStats() {
    return (
        <section className="w-full max-w-4xl mx-auto py-8 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <img
                    src="https://github-readme-stats.vercel.app/api?username=elidayjuma&show_icons=true&theme=github_dark&count_private=true"
                    alt="Eliday's GitHub Stats"
                    className="rounded-lg shadow"
                />
                <img
                    src="https://github-readme-streak-stats.herokuapp.com?user=elidayjuma&theme=github-dark&date_format=M%20j%5B%2C%20Y%5D"
                    alt="GitHub Streak"
                    className="rounded-lg shadow"
                />
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=elidayjuma&layout=compact&theme=github_dark"
                    alt="Top Languages"
                    className="rounded-lg shadow"
                />
            </div>
        </section>
    );
}