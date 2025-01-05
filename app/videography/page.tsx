import { HeaderHero } from '@/components/HeaderHero/HeaderHero.component';
import { GalleryVideography } from '@/components/VideographyGallery/VideographyGallery.component';

export default function VideographyPage() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16 mb-24'>
      <HeaderHero type='video' src='https://res.cloudinary.com/dme5pqzrj/video/upload/v1698424387/portafolio-pp/videography-cover_relqfp.mp4' title='Videography' />

      <div className='w-full flex flex-col justify-center items-center mt-24 px-8'>
        <div className='my-2 flex flex-col gap-2'>
          <h2 className='text-center font-bold'>Videography Gallery</h2>
          <h3 className='text-center text-my-gray'>Visual creations ranging from dynamic animations to professional recordings.</h3>
        </div>
        <GalleryVideography />
      </div>
    </div>
  );
}
