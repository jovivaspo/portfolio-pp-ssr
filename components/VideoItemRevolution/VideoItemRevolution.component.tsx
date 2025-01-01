import { useEffect, useRef } from 'react';
import { PlayIcon } from '../moleculas/icons/PlayIcon';

interface Props {
  component: () => React.ReactNode;
  thumbnail: string;
  index: number;
  videoSelect: number;
  setVideoSelect: React.Dispatch<React.SetStateAction<number>>;
  title?: string;
  subTitle?: string;
}
export const VideoItemRevolution: React.FC<Props> = ({ component, thumbnail, index, videoSelect, setVideoSelect, title, subTitle }) => {
  const Component = component;
  const refIconContainer: React.RefObject<HTMLButtonElement> = useRef(null);
  const refImg: React.RefObject<HTMLImageElement> = useRef(null);
  const refContainer: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (videoSelect === -1) return;
    if (videoSelect !== index) {
      refImg.current?.classList.remove('hidden');
      setTimeout(() => {
        refImg.current?.classList.remove('opacity-0');
      }, 600);
      setTimeout(() => {
        refIconContainer.current?.classList.remove('hidden');
        const $iframe = refContainer.current?.querySelector('iframe');

        const src = $iframe?.src;

        if (src) $iframe?.setAttribute('src', src);
      }, 1000);
    }
  }, [videoSelect]);

  const handleClick = () => {
    if (!refIconContainer.current || !refImg.current) return;
    refIconContainer.current?.classList.add('hidden');
    refImg.current?.classList.add('opacity-0');
    setTimeout(() => {
      refImg.current?.classList.add('hidden');
      setVideoSelect(index);
    }, 800);
  };

  return (
    <div ref={refContainer} className='min-w-[340px]'>
      <div className='w-full h-full relative '>
        <img loading='lazy' ref={refImg} alt={title} src={thumbnail} className='w-full h-full object-cover transition-opacity duration-1000 absolute top-0 left-0 z-20' />
        <button ref={refIconContainer} onClick={handleClick} className='absolute top-0 w-full h-full flex justify-center items-center cursor-pointer  z-30'>
          <PlayIcon color='white' />
        </button>
        {<Component />}
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        {title && <p className='font-bold text-sm'>{title.toUpperCase()}</p>}
        {subTitle && <p className='text-my-gray italic font-semibold text-sm'>{subTitle}</p>}
      </div>
    </div>
  );
};
