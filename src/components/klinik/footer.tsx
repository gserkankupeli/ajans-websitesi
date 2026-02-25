"use client";

import Link from "next/link";

export function KlinikFooter() {
    return (
        <footer className="bg-white border-t border-[#E2E8F0] py-12 mt-auto">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/logo.svg"
                            alt="Flowixy Logo"
                            className="h-8 md:h-10 w-auto object-contain cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="text-sm text-[#475569]">
                    Bir sorunuz olursa: <a href="mailto:serkankupeli@flowixy.com" className="hover:text-[#0F172A] transition-colors font-medium">
                        serkankupeli@flowixy.com
                    </a>
                </div>

                <div className="text-sm text-[#475569]">
                    © {new Date().getFullYear()} Flowixy
                </div>

            </div>
        </footer>
    );
}
