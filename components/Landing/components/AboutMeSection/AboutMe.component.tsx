import Subtitle from '@/components/moleculas/Subtitle/Subtitle.component';
import { MotionDiv } from '@/components/Motions/MotionDiv';
import Image from 'next/image';
import Link from 'next/link';
import { aboutMeService } from './aboutMe.service';

export default async function AboutMeSection() {
  const content = await aboutMeService.getContent();
  return (
    <section className='container mx-auto md:max-h-[400px] flex gap-16 p-6'>
      <MotionDiv className='flex flex-col md:flex-row items-center gap-12' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className='md:w-1/2'>
          <Image
            src='https://res.cloudinary.com/dme5pqzrj/image/upload/v1733740478/portafolio-pp/about_klywm3.jpg'
            alt='About me - Pablo Pocostales Proffesional Motion Graphics Designer & Filmmaker'
            quality={90}
            width={500}
            height={500}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='md:w-1/2 md:h-full whitespace-pre-line flex flex-col gap-6 justify-between'>
          <Subtitle subtitle={content.title} className='md:text-start text-center' />
          <p>{content.content}</p>
          <Link href='/about' className='font-semibold hover:underline'>
            Learn more about my journey
          </Link>
        </div>
      </MotionDiv>
    </section>
  );
}
