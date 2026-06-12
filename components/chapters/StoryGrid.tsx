import StoryCard from "./StoryCard";

type Story = {
    title: string;
    excerpt: string;
};

export default function StoryGrid({
    stories,
}: {
    stories: Story[];
}) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
                <StoryCard
                    key={story.title}
                    title={story.title}
                    excerpt={story.excerpt}
                />
            ))}
        </div>
    );
}