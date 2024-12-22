import { Content, ContentResponse } from '@/models/content/content';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
async function get(urlPath: string): Promise<NextResponse<ContentResponse>> {
  try {
    const jsonDirectory: string = path.join(process.cwd(), 'data');
    const fileContents: string = await fs.readFile(jsonDirectory + urlPath, 'utf8');
    const content: Content = JSON.parse(fileContents);

    return NextResponse.json({ data: content }, { status: 200 });
  } catch (error) {
    throw error;
  }
}

export const generalService = { get };
