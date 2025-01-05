import { HeaderHero } from '@/components/HeaderHero/HeaderHero.component';
import ModalImage from '@/components/ModalImage/ModalImage.component';
import { ButtonSeeMoreFlickr } from '@/components/moleculas/ButtonSeeMoreFlickr/ButtonSeeMoreFlickr.component';
import PhotographyGallery from '@/components/PhotographyGallery/PhotographyGallery.component';
import { Suspense } from 'react';
export default function PhotographyPage() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16 mb-24'>
      <HeaderHero type='image' src='https://res.cloudinary.com/dme5pqzrj/image/upload/v1698423838/portafolio-pp/header-photography_iyd0f1.jpg' title='Photography' />

      <div className='w-full flex flex-col justify-center items-center mt-24 px-8'>
        <div className='my-2 flex flex-col gap-2'>
          <h2 className='text-center font-bold'>Photography Gallery</h2>

          <h3 className='text-center text-my-gray'>A Gallery of the best photos selected from my extensive photography album.</h3>
        </div>
        <PhotographyGallery />
      </div>

      <ButtonSeeMoreFlickr />
      <Suspense fallback={<div>Loading...</div>}>
        <ModalImage />
      </Suspense>
    </div>
  );
}
