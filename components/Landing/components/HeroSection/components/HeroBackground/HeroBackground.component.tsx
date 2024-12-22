import Image from 'next/image';

export default function HeroBackground() {
  return (
    <div className='absolute inset-0'>
      <Image
        src='https://res.cloudinary.com/dme5pqzrj/image/upload/v1698424080/portafolio-pp/header-feat-collaboration_zahc6o.jpg'
        alt='Hero background'
        fill
        priority
        quality={90}
        sizes='100vw'
        className='md:object-center object-[87%] '
        style={{
          objectFit: 'cover',
        }}
      />
      <div className='absolute inset-0 bg-black/40' />
    </div>
  );
}
