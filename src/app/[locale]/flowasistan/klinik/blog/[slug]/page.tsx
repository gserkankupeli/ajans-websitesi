import { getKlinikPostBySlug, klinikBlogPosts } from "@/data/klinik-blog";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import { Link } from "@/i18n/routing";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string; locale: string }>
};

export async function generateStaticParams() {
    return klinikBlogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getKlinikPostBySlug(resolvedParams.slug);
    if (!post) {
        return { title: 'Yazı Bulunamadı | Klinik Blog' };
    }
    return {
        title: `${post.title} | FlowAsistan Klinik Blog`,
        description: post.excerpt,
    };
}

export default async function KlinikBlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = getKlinikPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section of Blog */}
            <div className="relative w-full h-[50vh] md:h-[60vh] bg-slate-900 border-b border-slate-800 flex items-center justify-center overflow-hidden">
                <NextImage
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover opacity-30 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-[#0F172A]" />

                <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-end pb-16 md:pb-24 pt-32 container mx-auto px-4 md:px-6 max-w-4xl z-10">
                    <Link href="/flowasistan/klinik/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6 md:mb-10 text-sm font-medium w-fit">
                        <ArrowLeft className="w-4 h-4" /> Yazılara Dön
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 mt-4 opacity-90">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 border-2 border-slate-700 relative">
                                <NextImage src={post.author.avatar} alt={post.author.name} fill className="object-cover p-1" />
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

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-6 max-w-3xl py-16 md:py-24">
                {/* Article Body */}
                <article className="flex-1 prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-2xl prose-img:border prose-img:border-gray-200 prose-img:shadow-sm">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
            </div>

            {/* CTA Bottom */}
            <div className="bg-slate-50 border-t border-gray-100 py-20">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Kliniğinizin asistanı hazır</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Daha az tekrarlayan iş, daha çok netleşmiş hasta talebi. Uygunsa canlı demo için tanışalım.</p>
                    <Link href="/flowasistan/klinik#randevu" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#2563EB] px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1D4ED8]">
                        Kısa Bir Tanışma Planla
                    </Link>
                </div>
            </div>
        </main>
    );
}
