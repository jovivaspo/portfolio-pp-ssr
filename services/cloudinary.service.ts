import { ImageCloudinary } from '@/types/ImageCloudinary';
import cloudinary from '@/utils/cloudinary';

const getPhotographyGallery = async (): Promise<ImageCloudinary[]> => {
  try {
    const fetchedResults = await cloudinary.v2.search.expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`).sort_by('public_id', 'asc').max_results(400).execute();

    return fetchedResults.resources;
  } catch (error) {
    throw error;
  }
};

export const cloudinaryService = { getPhotographyGallery };
