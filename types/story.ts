export type Story = {
    title: string;
    content: string;
};

export type ChapterContent = {
    title: string;
    quote: string;
    reflection: string;
    stories: Story[];
    closingThought: string;
};