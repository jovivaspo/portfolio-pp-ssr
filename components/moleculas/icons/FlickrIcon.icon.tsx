import { IconSvgProps } from '@/types';

export const FlickrIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      fill='currentColor'
      height={size || height}
      width={size || width}
      {...props}
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='-143 145 512 512'
      xmlSpace='preserve'
    >
      <path
        d='M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,457.4
   C10.3,457.4-15,432.1-15,401c0-31.1,25.2-56.4,56.4-56.4c31.2,0,56.4,25.3,56.4,56.4C97.8,432.1,72.6,457.4,41.4,457.4z
    M184.6,457.4c-31.2,0-56.4-25.3-56.4-56.4c0-31.1,25.2-56.4,56.4-56.4c31.1,0,56.4,25.3,56.4,56.4
   C241,432.1,215.8,457.4,184.6,457.4z'
      />
    </svg>
  );
};
