import { HeaderHero } from '@/components/HeaderHero/HeaderHero.component';
import { GalleryVideography } from '@/components/VideographyGallery/VideographyGallery.component';

export default function VideographyPage() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16'>
      <HeaderHero type='video' src='https://res.cloudinary.com/dme5pqzrj/video/upload/v1698424387/portafolio-pp/videography-cover_relqfp.mp4' title='Videography' />

      <div className='w-full flex flex-col justify-center items-center mt-24 px-8'>
        <div className='my-2 flex flex-col gap-2'>
          <p className='text-center'>
            <b>My Videography Gallery</b>
          </p>
          <p className='text-center text-my-gray'>Some of my works</p>
        </div>
        <GalleryVideography />
      </div>
    </div>
  );
}
