import { InstagramCard } from '../moleculas/InstagramCard/Instagramcard.component';

const listInstagram = [
  {
    link: 'https://www.instagram.com/reel/DD4sT3wv1MG/?utm_source=ig_web_copy_link',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1736078984/portafolio-pp/98630e7f-37c9-4ea1-b1ff-d73db685b03f_gplu7e.jpg',
  },
  {
    link: 'https://www.instagram.com/reel/C-7TRLRNC3Y/?utm_source=ig_web_copy_link',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1736105562/portafolio-pp/WhatsApp_Image_2025-01-05_at_12.01.38_dwsoiw.jpg',
  },
  {
    link: 'https://www.instagram.com/reel/DArS7aIp4Fo/?utm_source=ig_web_copy_link',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/v1736105563/portafolio-pp/WhatsApp_Image_2025-01-05_at_12.00.52_nabx5z.jpg',
  },
  {
    link: 'https://www.instagram.com/reel/DCW8hZTKh_Y/?utm_source=ig_web_copy_link',
    src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1736105562/portafolio-pp/WhatsApp_Image_2025-01-05_at_11.57.24_vm84sy.jpg',
  },

  // {
  //   link: 'https://www.instagram.com/p/CmgQW54rA6T/?igshid=MzRlODBiNWFlZA%3D%3D',
  //   src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1736105562/portafolio-pp/WhatsApp_Image_2025-01-05_at_11.57.24_vm84sy.jpg',
  // },
  // {
  //   link: 'https://www.instagram.com/p/ClOvy0SLA10/',
  //   src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439387/portafolio-pp/02_qvdnio.jpg',
  // },
  // {
  //   link: 'https://www.instagram.com/p/ClT0S2Kp7cS/',
  //   src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439800/portafolio-pp/03_dpgelm.jpg',
  // },
  // {
  //   link: 'https://www.instagram.com/p/CXL5NZ7sDW_/',
  //   src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439752/portafolio-pp/09_ivpl9g.jpg',
  // },
  // {
  //   link: 'https://www.instagram.com/p/B44mkyGjIz2/',
  //   src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698439979/portafolio-pp/14_k7g982.jpg',
  // },
  // {
  //   link: 'https://www.instagram.com/p/CIGACdbAOao/',
  //   src: 'https://res.cloudinary.com/dme5pqzrj/image/upload/f_auto/v1698440056/portafolio-pp/11_auzleb.jpg',
  // },
];

export const SocialMediaSection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-24'>
      <div className='my-2 flex flex-col gap-2'>
        <p className='text-center'>
          <b>DELOITTE - INSTAGRAM</b>
        </p>
        <p className='text-center text-my-gray'>Samples of social media content created in collaboration with the Deloitte Brand and Content team.</p>
      </div>
      <div className='flex w-full justify-center w-[100%] gap-16 md:gap-24 flex-wrap mt-24'>
        {listInstagram.map((item, index) => {
          return <InstagramCard key={index} src={item.src} link={item.link} />;
        })}
      </div>
    </div>
  );
};
