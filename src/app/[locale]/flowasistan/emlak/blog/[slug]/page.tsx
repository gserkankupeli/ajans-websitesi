import { notFound } from "next/navigation";
import { setRequestLocale } from 'next-intl/server';
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import NextImage from "next/image";
import { Link } from "@/i18n/routing";
import { emlakBlogPosts, getEmlakBlogPostBySlug } from "@/data/emlak-blogs";

interface BlogPostPageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return emlakBlogPosts.flatMap((post) => [
        { locale: 'tr', slug: post.slug },
        { locale: 'en', slug: post.slug },
    ]);
}

export default async function EmlakBlogPostPage({ params }: BlogPostPageProps) {
    const locale = (await params).locale;
    const slug = (await params).slug;
    setRequestLocale(locale);

    const post = getEmlakBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Premium Hero Section */}
            <div className="relative w-full h-[50vh] md:h-[60vh] bg-slate-900 flex items-center justify-center overflow-hidden">
                <NextImage
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover opacity-30 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />

                <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-end pb-16 md:pb-24 pt-32 container mx-auto px-4 md:px-6 max-w-4xl z-10">
                    <Link href="/flowasistan/emlak/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6 md:mb-10 text-sm font-medium w-fit">
                        <ArrowLeft className="w-4 h-4" /> Tüm Yazılara Dön
                    </Link>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 mt-4 opacity-90">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 border-2 border-slate-700 relative">
                                {post.author.avatar ? (
                                    <NextImage src={post.author.avatar} alt={post.author.name} fill className="object-cover p-1" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        {post.author.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="font-semibold text-white">{post.author.name}</div>
                                <div className="text-slate-400 text-sm">{post.author.role}</div>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-slate-700" />
                        <div className="flex items-center gap-4 text-slate-300 text-sm">
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> {post.readTime} okuma</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="py-16 md:py-24 bg-white relative">
                {/* Visual Connector */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent opacity-5" />
                <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
                    <div
                        className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-500"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA Banner at the end */}
                    <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 text-center shadow-sm">
                        <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Sizinki de benzer bir süreç mi?</h3>
                        <p className="text-slate-600 mb-8 text-lg">30 dakikada netleştirelim ve zaman kazanın.</p>
                        <Link
                            href="/flowasistan/emlak#randevu"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition-colors shadow-sm"
                        >
                            Kısa Bir Tanışma Planla <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
