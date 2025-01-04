import { DesignGallery } from '@/components/DesignGallery/DesignGallery.component';
import { HeaderHero } from '@/components/HeaderHero/HeaderHero.component';

export default function DesignsPage() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16 mb-24'>
      <HeaderHero type='image' src='https://res.cloudinary.com/dme5pqzrj/image/upload/c_fit,h_600,w_800/v1698443523/portafolio-pp/header-design_r06ksg.png' title='Designs' />

      <div className='w-full flex flex-col justify-center items-center mt-24 px-8'>
        <div className='my-2 flex flex-col gap-2'>
          <h2 className='text-center font-bold'>My designs</h2>

          <h3 className='text-center text-my-gray'>A selection of my best work in design. From logos to UI/UX, each design is a reflection of my creativity and attention to detail.</h3>
          <DesignGallery />
        </div>
      </div>
    </div>
  );
}
