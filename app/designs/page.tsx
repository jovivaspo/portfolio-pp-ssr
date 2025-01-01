import { DesignGallery } from '@/components/DesignGallery/DesignGallery.component';
import { HeaderHero } from '@/components/HeaderHero/HeaderHero.component';

export default function DesignsPage() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16'>
      <HeaderHero type='image' src='https://res.cloudinary.com/dme5pqzrj/image/upload/c_fit,h_600,w_800/v1698443523/portafolio-pp/header-design_r06ksg.png' title='Designs' />

      <div className='w-full flex flex-col justify-center items-center mt-24 px-8'>
        <div className='my-2 flex flex-col gap-2'>
          <p className='text-center'>
            <b>My Designs</b>
          </p>
          <p className='text-center text-my-gray'>Some of my works</p>
          <DesignGallery />
        </div>
      </div>
    </div>
  );
}
