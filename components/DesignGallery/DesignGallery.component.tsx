'use client';

import { Block } from '@/types/Block';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ArrowIcon } from '../moleculas/icons/ArrowIcon.icon';

const blocks: Block[] = [
  {
    title: 'Fincas Moreno',
    description: 'Administration and management of properties and neighborhood communities',
    items: [
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/FincasMoreno_1920x1080px_fuyidw.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443125/portafolio-pp/IMG_5635_yunzvv.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443125/portafolio-pp/IMG_5636_000_g2vqte.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443125/portafolio-pp/IMG_5597_000_eapjyf.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443126/portafolio-pp/IMG_5596_001_am87mg.jpg',
    ],
  },
  {
    title: 'FisioFit Center',
    description: 'Advanced sports physiotherapy center',
    items: [
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/2019_FisioFit_1920x1080p_enfr5l.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443523/portafolio-pp/header-design_r06ksg.png',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/2019_FisioFit_1920x1080p_02_juldlo.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698443523/portafolio-pp/IMG_6538_zpicyc.jpg',
    ],
  },

  {
    title: 'KINDOI',
    description: 'Travel itinerary generator',
    items: [
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443990/portafolio-pp/Kindoi_Identidad_Corporativa_iutwes.png',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443991/portafolio-pp/Captura_de_pantalla_2023-10-27_121302_madbzh.png',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443991/portafolio-pp/Captura_de_pantalla_2023-10-27_121500_j5wecj.png',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698443992/portafolio-pp/Captura_de_pantalla_2023-10-27_121413_kphtwf.png',
    ],
  },
  {
    title: 'Taberna La Giralda',
    description: 'Bar and Restaurant',
    items: [
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698578299/portafolio-pp/Taberna-LaGiralda_1920x1080px_kcwbjy.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698444187/portafolio-pp/dc9269f1-6d4a-4426-b69e-188c0584a7e3_nfqhb4.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698444187/portafolio-pp/c411c4b4-128c-440a-baa6-b8f50deb0a96_khslv9.jpg',
      'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/c_crop,ar_16:9/v1698444186/portafolio-pp/e968c23e-ee00-44e8-9d85-963a81c427f7_nrpg0b.jpg',
    ],
  },
];

export const DesignGallery = () => {
  return (
    <div className='mx-auto flex flex-col xl:grid grid-cols-2 gap-16 xl:gap-32 mt-24  w-[100%] justify-center'>
      {blocks.map((block, index) => {
        return (
          <div className='flex flex-col gap-4' key={index}>
            <div className='flex flex-col gap-1'>
              <h3 className='font-bold text-md'>{block.title}</h3>
              <h6 className='text-xs sm:text-sm h-[2rem]'>{block.description}</h6>
            </div>

            {/* Contenedor principal del carrusel con aspect ratio fijo */}
            <div className='relative w-full aspect-[16/9]'>
              <Carousel
                dynamicHeight={false}
                showStatus={false}
                showThumbs={false}
                key={index}
                className='absolute inset-0 w-full h-full'
                renderArrowPrev={(clickHandler, hasPrev) => {
                  return (
                    <button
                      className={`${hasPrev ? 'absolute' : 'hidden'} top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-40 hover:opacity-100 cursor-pointer z-20`}
                      onClick={clickHandler}
                    >
                      <ArrowIcon className='w-9 h-9 text-default-500 rotate-180' />
                    </button>
                  );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                  return (
                    <button
                      className={`${hasNext ? 'absolute' : 'hidden'} top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-40 hover:opacity-100 cursor-pointer z-20`}
                      onClick={clickHandler}
                    >
                      <ArrowIcon className='w-9 h-9 text-default-500' />
                    </button>
                  );
                }}
                renderIndicator={(onClickHandler, isSelected, label) => {
                  const defStyle = {
                    display: 'inline-block',
                    marginLeft: 20,
                    width: '10px',
                    height: '10px',
                    borderRadius: '100%',
                    backgroundColor: 'gray',
                    cursor: 'pointer',
                  };
                  const style = isSelected ? { ...defStyle, backgroundColor: 'black' } : { ...defStyle };
                  return <div style={style} onClick={onClickHandler} onKeyDown={onClickHandler} key={index} role='button' tabIndex={0} aria-label={`${label} ${index + 1}`} />;
                }}
              >
                {block.items.map((item, index) => (
                  <div className='relative w-full aspect-[16/9]' key={index}>
                    <img alt='' src={item} loading='lazy' className='absolute inset-0 w-full h-full object-contain bg-white' />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        );
      })}
    </div>
  );
};
