import { Content } from '@/models/content/content';
import { generalService } from '@/services/general.service';

/**
 * Gets the content for the about me section of the landing page.
 * @returns {Promise<Content>} The content for the about me section.
 */
export async function getContent(): Promise<Content> {
  try {
    const res = await generalService.get('/aboutMe.json');
    const json = await res.json();
    return json.data;
  } catch (error) {
    throw error;
  }
}

export const aboutMeService = { getContent };
