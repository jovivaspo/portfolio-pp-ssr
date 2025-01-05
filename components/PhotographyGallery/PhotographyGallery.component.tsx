import Image from 'next/image';
import Link from 'next/link';
import { FlickrIcon } from '../moleculas/icons/FlickrIcon.icon';
import { FullScreenIcon } from '../moleculas/icons/FullScreen.icon';
import { photographyGalleryService } from './photographyGallery.service';
export default async function PhotographyGallery() {
  const imageData = await photographyGalleryService.getImages();

  return (
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-24'>
      {imageData.map(({ title, id, link }) => (
        <div key={id} className='relative group flex flex-col gap-2'>
          <Link href={`/photography?photoId=${id}`} scroll={false} className='absolute z-10 top-3 right-2 cursor-pointer text-default-500 opacity-60 hover:opacity-100 hover:text-default-500'>
            <FullScreenIcon size={20} />
          </Link>
          <Link href={link} className='absolute top-3 left-2 cursor-pointer z-10 text-default-500 opacity-60 hover:opacity-100 hover:text-default-500' target='_blank'>
            <FlickrIcon size={24} />
          </Link>
          <div className='overflow-hidden rounded-lg'>
            <div className='transform transition-transform duration-300 ease-in-out group-hover:scale-105'>
              <Image
                alt={title}
                className='rounded-lg brightness-85 transition will-change-auto group-hover:brightness-110'
                style={{ transform: 'translate3d(0, 0, 0)' }}
                quality={90}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${id}.jpg`}
                width={720}
                height={480}
                sizes='(max-width: 640px) 100vw,
                      (max-width: 1280px) 50vw,
                      (max-width: 1536px) 33vw,
                      25vw'
              />
            </div>
          </div>
          <h3 className='text-center italic'>{title}</h3>
        </div>
      ))}
    </div>
  );
}
