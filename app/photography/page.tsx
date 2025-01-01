import { HeaderHero } from '@/components/HeaderHero/HeaderHero.component';
import ModalImage from '@/components/ModalImage/ModalImage.component';
import { ButtonSeeMoreFlickr } from '@/components/moleculas/ButtonSeeMoreFlickr/ButtonSeeMoreFlickr.component';
import PhotographyGallery from '@/components/PhotographyGallery/PhotographyGallery.component';
import { Suspense } from 'react';
export default function PhotographyPage() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16'>
      <HeaderHero type='image' src='https://res.cloudinary.com/dme5pqzrj/image/upload/v1698423838/portafolio-pp/header-photography_iyd0f1.jpg' title='Photography' />
      <PhotographyGallery />
      <ButtonSeeMoreFlickr />
      <Suspense fallback={<div>Loading...</div>}>
        <ModalImage />
      </Suspense>
    </div>
  );
}
