import { ImageFromCloudinary } from '@/models/image/image';
import { generalService } from '@/services/general.service';

/**
 * Gets the images for the photography gallery.
 * @returns {Promise<ImageFromCloudinary[]>} The images for the gallery.
 */
export async function getImages(): Promise<ImageFromCloudinary[]> {
  try {
    const res = await generalService.get('/photographyGallery.json');
    const json = await res.json();
    return json.data.images;
  } catch (error) {
    throw error;
  }
}

export const photographyGalleryService = { getImages };
