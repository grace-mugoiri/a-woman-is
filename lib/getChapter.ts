import { sections } from "@/data/sections";

export function getChapter(slug: string) {
    return sections.find(
        (item) => item.slug === slug
    );
}