import { IframeVimeo } from '../moleculas/IframeVimeo/IframeVimeo.component';
import IframeYoutube from '../moleculas/IframeYoutube/IframeYoutube.component';

export const FreelanceSection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-24'>
      <div className='my-2 flex flex-col gap-2 px-8'>
        <p className='text-center'>
          <b>FREELANCE</b>
        </p>
        <p className='text-center text-my-gray'>External collaboration taking on a supporting role in these audiovisual projects. </p>
      </div>
      <div className='mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-24 w-[100%] justify-center'>
        <IframeYoutube src='https://www.youtube.com/embed/sqH7l-3UNM0?si=c9aSOeDclfbeJ17-' />
        <IframeVimeo src='https://player.vimeo.com/video/297813109?h=624d13a6c3' />
      </div>
    </div>
  );
};
