"use client";
import Link from "next/link";
import { useState } from "react";
import { menuItems } from "../../data/menuitems";
import { FaBars } from "react-icons/fa6";

export default function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
                {menuItems.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="hover:underline">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Mobile Hamburger */}
            <button
                className="md:hidden flex items-center px-2 py-1"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
            >
                <FaBars className="text-2xl" />
            </button>
            {/* Mobile Menu */}
            {open && (
                <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-900 shadow-lg rounded py-2 flex flex-col gap-2 z-50 md:hidden">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}