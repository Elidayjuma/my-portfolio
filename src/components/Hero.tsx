"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <section className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-12 gap-8">
            <div className="flex-1 flex flex-col items-start">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Hi, I&apos;m Eliutherius Juma
                </h1>
                <h2 className="text-4xl sm:text-6xl font-medium text-blue-600 dark:text-blue-400 mb-4">
                    <Typewriter
                        words={["Software engineer but Entrepreneur at heart."]}
                        loop={1}
                        cursor
                        cursorStyle="</>"
                        typeSpeed={60}
                        deleteSpeed={50}
                        delaySpeed={5000}
                    />
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    I build scalable digital products, lead teams, and love solving real-world problems with code and creativity.
                    You can read some of insightful articles on my blog at: <a href="https://elidayjuma.com/blog" className="text-blue-600 dark:text-blue-400 hover:underline">elidayjuma dot com</a>.
                </p>

                {/* Add call-to-action buttons here if needed */}
            </div>
            <div className="flex-1 flex justify-center">
                <Image
                    src="/profile.jpg" // Place your image in public/profile.jpg
                    alt="Eliutherius Juma"
                    width={350}
                    height={350}
                    className="rounded-full shadow-lg object-cover"
                    priority
                />
            </div>
        </section>
    );
}