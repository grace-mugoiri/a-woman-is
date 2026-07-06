import Image from "next/image";

type Props = {
    title: string;
    description: string;
    image?: string;
};

export default function ChapterHero({
    title,
    description,
    image,
}: Props) {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-soft bg-white/80 p-10 mb-12 shadow-2xl fade-up">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-200/40 blur-2xl" />
            <div className="pointer-events-none absolute left-0 bottom-0 h-56 w-56 rounded-full bg-purple-200/30 blur-3xl" />

            {image ? (
                <div className="relative mb-8 overflow-hidden rounded-[1.75rem] h-48 md:h-56">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1280px) 70vw, 600px"
                        loading="eager"
                        className="object-cover transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
            ) : null}

            <div className="relative z-10">
                <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-900 shadow-sm">
                    Chapter intro
                </span>

                <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-purple-900">
                    {title}
                </h1>

                <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                    {description}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-soft bg-purple-50/90 p-6">
                        <p className="text-sm uppercase tracking-[0.35em] text-purple-700/80">
                            Atmosphere
                        </p>
                        <p className="mt-3 text-lg font-semibold text-purple-900">
                            Soft, reflective, intentional.
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-soft bg-pink-50/90 p-6">
                        <p className="text-sm uppercase tracking-[0.35em] text-pink-700/80">
                            Mood
                        </p>
                        <p className="mt-3 text-lg font-semibold text-pink-900">
                            Courage, calm, and clarity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}