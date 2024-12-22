import Subtitle from '@/components/moleculas/Subtitle/Subtitle.component';
import { MotionDiv } from '@/components/Motions/MotionDiv';
import Image from 'next/image';
import Link from 'next/link';
const portfolioItems = [
  {
    id: 1,
    title: 'Videography',
    alt: 'Videography - Pablo Pocostales Professional Motion Graphics Designer & Filmmaker',
    video: 'https://res.cloudinary.com/dme5pqzrj/video/upload/v1698424387/portafolio-pp/videography-cover_relqfp.mp4',
    link: 'videography',
  },
  {
    id: 2,
    alt: 'Photography - Pablo Pocostales Professional Motion Graphics Designer & Filmmaker',
    title: 'Photography',
    image: 'https://res.cloudinary.com/dme5pqzrj/image/upload/v1698423838/portafolio-pp/header-photography_iyd0f1.jpg',
    link: 'photography',
  },
  {
    id: 3,
    alt: 'Feat/Collaboration - Pablo Pocostales Professional Motion Graphics Designer & Filmmaker',
    title: 'Feat/Collaboration',
    image: 'https://res.cloudinary.com/dme5pqzrj/image/upload/v1698424080/portafolio-pp/header-feat-collaboration_zahc6o.jpg',
    link: 'feat-collaboration',
  },
  {
    id: 4,
    alt: 'Designs - Pablo Pocostales Professional Motion Graphics Designer & Filmmaker',
    title: 'Designs',
    image: 'https://res.cloudinary.com/dme5pqzrj/image/upload/c_fit,h_600,w_800/v1698443523/portafolio-pp/header-design_r06ksg.png',
    link: 'designs',
  },
];
export default function FeatureWorkSection() {
  return (
    <section className='container mx-auto flex flex-col gap-16 p-6 py-20'>
      <Subtitle subtitle='Feature Work' className='text-center' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {portfolioItems.map((item, index) => (
          <MotionDiv key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
            <div className='relative overflow-hidden group rounded-lg shadow-lg w-full h-full '>
              {item?.image && <Image src={item.image} alt={item.alt} width={800} height={600} className='object-cover h-full transition-transform duration-500 ' />}
              {item?.video && (
                <video className='w-full h-full object-cover' muted loop>
                  <source src={item.video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              )}
              <Link href={`/${item.link}`} className='absolute inset-0 bg-black bg-opacity-50 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center'>
                <h3 className='text-white text-xl uppercase'>{item.title}</h3>
              </Link>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
