import { FlickrIcon } from '@/components/moleculas/icons/FlickrIcon.icon';
import { GmailIcon } from '@/components/moleculas/icons/Gmail.icon';
import { LinkdinIcon } from '@/components/moleculas/icons/Linkedin.icon';
import Link from 'next/link';
const menuFooter = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'Videography',
    path: '/videography',
  },
  {
    text: 'Photography',
    path: '/photography',
  },
  {
    text: 'Feat/Collaboration',
    path: '/colab',
  },
  {
    text: 'Designs',
    path: '/designs',
  },
];
export const Footer = () => {
  return (
    <footer className='w-full min-h-[200px]  flex flex-col gap-16 mt-32'>
      <ul className='w-full flex justify-center gap-5'>
        <li className='w-[30px] h-[30px] rounded-full flex justify-center items-center transition-all hover:scale-110'>
          <Link href={'https://www.linkedin.com/in/pablo-pocostales/'} target='_blank'>
            <LinkdinIcon size={24} />
          </Link>
        </li>
        <li className='w-[30px] h-[30px] rounded-full flex justify-center items-center transition-all hover:scale-110'>
          <Link href={'https://www.linkedin.com/in/pablo-pocostales/'} target='_blank'>
            <FlickrIcon size={24} />
          </Link>
        </li>
        <li className='w-[30px] h-[30px] rounded-full flex justify-center items-center transition-all hover:scale-110'>
          <Link href={'https://www.linkedin.com/in/pablo-pocostales/'} target='_blank'>
            <GmailIcon size={24} />
          </Link>
        </li>
      </ul>
      <ul className='w-full flex flex-col items-center justify-center gap-8 p-4 md:flex-row'>
        {menuFooter.map((item, index) => {
          return (
            <li key={index}>
              <Link className='text-sm  sub-menu relative cursor-pointer text-my-gray hover:text-black' href={item.path}>
                {item.text.toLocaleUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
