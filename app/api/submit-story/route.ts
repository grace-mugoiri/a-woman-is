import { promises as fs } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

const storiesFile = join(process.cwd(), 'data', 'stories.json');

async function readStories() {
    try {
        const data = await fs.readFile(storiesFile, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function writeStories(stories: any[]) {
    await fs.writeFile(storiesFile, JSON.stringify(stories, null, 2));
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, content, timestamp } = body;

        if (!title || !content) {
            return NextResponse.json(
                { error: 'Title and content are required' },
                { status: 400 }
            );
        }

        if (content.length < 20) {
            return NextResponse.json(
                { error: 'Story must be at least 20 characters' },
                { status: 400 }
            );
        }

        const stories = await readStories();
        const newStory = {
            id: Date.now().toString(),
            title,
            content,
            timestamp: timestamp || new Date().toISOString(),
            likes: 0,
        };

        stories.unshift(newStory);
        await writeStories(stories);

        return NextResponse.json({ success: true, story: newStory }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to submit story' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const stories = await readStories();
        return NextResponse.json(stories);
    } catch (error) {
        return NextResponse.json([], { status: 200 });
    }
}
