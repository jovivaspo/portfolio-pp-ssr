import Image from 'next/image';

type Props = {
  src: string;
  title: string;
  type: 'image' | 'video';
};

export const HeaderHero = ({ src, title, type }: Props) => {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <div className='absolute inset-0'>
        {type === 'image' ? (
          <Image
            src={src}
            alt={title}
            fill
            priority
            quality={90}
            sizes='100vw'
            className='md:object-center object-[87%] '
            style={{
              objectFit: 'cover',
            }}
          />
        ) : (
          <video className='w-full h-full object-cover' muted loop autoPlay>
            <source src={src} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        )}
        <div className='absolute inset-0 bg-black/40' />
      </div>
      <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl uppercase'>{title}</h1>
    </section>
  );
};
