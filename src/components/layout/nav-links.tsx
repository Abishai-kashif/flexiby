"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/Men" },
    { name: "Women", href: "/Women" },
    { name: "Teens", href: "/Teens" },
];

function NavLinks({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <nav className={`2xl:ml-16 ${className ?? ""}`}>
            <ul className="flex flex-wrap gap-x-12 gap-y-6 flex-col md:flex-row">
                {links.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <Link
                                href={link.href}
                                className={`text-lg font-semibold ${pathname === link.href ? "text-primary" : "text-gray-600 transition duration-100 hover:text-primary"}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default NavLinks;
