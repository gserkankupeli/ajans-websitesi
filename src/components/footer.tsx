"use client";

import NextImage from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center">
                    <Link href="/">
                        <NextImage src="/logo.svg" alt="Flowixy Logo" width={140} height={35} className="h-7 md:h-9 w-auto object-contain cursor-pointer" />
                    </Link>
                </div>

                <div className="text-sm text-gray-500">
                    Bir sorunuz olursa: <a href="mailto:serkankupeli@flowixy.com" className="hover:text-[#0F172A] transition-colors">
                        serkankupeli@flowixy.com
                    </a>
                </div>

                <div className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Flowixy
                </div>

            </div>
        </footer>
    );
}
