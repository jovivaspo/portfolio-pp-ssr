export interface ImageFromCloudinary {
  id: string;
  title: string;
  link: string;
}

export interface ImageData {
  images: ImageFromCloudinary[];
}
