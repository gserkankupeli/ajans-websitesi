import { useTranslations } from "next-intl";
import { blogPosts } from "@/data/blog";
import { MagicCard } from "@/components/ui/magic-card";
import { Link } from "@/i18n/routing";
import NextImage from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogHeader } from "@/components/blog-header";

export default function BlogIndexPage() {
    const highlightPost = blogPosts[0];
    const regularPosts = blogPosts.slice(1);

    return (
        <main className="min-h-screen bg-slate-900 text-slate-200 pb-24 pt-32">
            <BlogHeader />
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Flowixy Blog</h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl">
                        Yapay zeka, dijital otomasyon ve geleceğin iş modelleri hakkında en güncel içgörüler.
                    </p>
                </div>

                {/* Featured Post */}
                {highlightPost && (
                    <div className="mb-16">
                        <Link href={`/blog/${highlightPost.slug}`}>
                            <MagicCard className="p-0 border-slate-800 bg-slate-800/50 hover:border-blue-500/30 group overflow-hidden md:flex flex-row items-stretch min-h-[400px]">
                                <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-full overflow-hidden">
                                    <NextImage
                                        src={highlightPost.coverImage}
                                        alt={highlightPost.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r" />
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                        Yeni
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4 whitespace-nowrap">
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {highlightPost.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 line-clamp-3 group-hover:text-blue-400 transition-colors">
                                        {highlightPost.title}
                                    </h2>
                                    <p className="text-slate-400 text-base md:text-lg mb-8 line-clamp-3">
                                        {highlightPost.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden relative">
                                                <NextImage src={highlightPost.author.avatar} alt={highlightPost.author.name} fill className="object-cover p-1" />
                                            </div>
                                            <div className="text-sm">
                                                <div className="font-medium text-white">{highlightPost.author.name}</div>
                                                <div className="text-slate-500 text-xs">{highlightPost.author.role}</div>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </MagicCard>
                        </Link>
                    </div>
                )}

                {/* Regular Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
                            <MagicCard className="h-full p-0 flex flex-col items-start text-left bg-slate-800/40 border-slate-800 hover:border-slate-700 overflow-hidden group">
                                <div className="relative w-full h-48 overflow-hidden z-10 bg-slate-900">
                                    <NextImage
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col w-full relative z-10">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-slate-800/50">
                                        <div className="text-sm font-medium text-blue-500 flex items-center gap-1 group-hover:text-blue-400">
                                            Oku <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </MagicCard>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
