import NextImage from "next/image";
import Link from "next/link";

export function EmlakFooter() {
    return (
        <footer className="bg-white border-t border-slate-200 py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center text-lg font-bold text-slate-900 gap-2">
                    <Link href="/">
                        <img src="/logo.svg" alt="Flowixy Logo" className="h-10 w-auto opacity-100 cursor-pointer" />
                    </Link>
                </div>

                <div className="text-sm text-slate-500">
                    Bir sorunuz olursa: <a href="mailto:serkankupeli@flowixy.com" className="hover:text-blue-600 transition-colors font-medium">
                        serkankupeli@flowixy.com
                    </a>
                </div>

                <div className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Flowixy
                </div>

            </div>
        </footer>
    );
}
