import Image from 'next/image';
import { aboutService } from './about.service';
import './styles/about.css';
export default async function About() {
  const content = await aboutService.getContent();
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16 items-center'>
      <div className='my-4'>
        <p className='text-center'>
          <b>This is me</b>
        </p>
        <p className='my-4'>PABLO POCOSTALES</p>
      </div>
      <div className='w-full'>
        <Image
          src='https://res.cloudinary.com/dme5pqzrj/image/upload/v1733740478/portafolio-pp/about_klywm3.jpg'
          alt='About me - Pablo Pocostales Proffesional Motion Graphics Designer & Filmmaker'
          quality={100}
          width={1200}
          height={600}
          className='w-full h-full object-cover'
          priority
        />
      </div>
      <div className='mt-8 md:mt-16 p-4 w-full whitespace-pre-line'>
        <p className='text-center my-4 mb-16'>
          <b>My story</b>
        </p>

        <p className='my-8 text-sm w-full text-start'>{content.content}</p>
      </div>
      <a href='./CV-PabloPocostales-2024.pdf' target='_blank' rel='noopener noreferrer' download>
        <button className='btn-download'>
          <p>Download here...</p>
        </button>
      </a>
    </div>
  );
}
