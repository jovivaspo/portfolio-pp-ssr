'use client';
import { Modal, ModalBody, ModalContent } from '@nextui-org/modal';
import { Spinner } from '@nextui-org/spinner';
import { CldImage } from 'next-cloudinary';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
const ModalImage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const photoId = searchParams.get('photoId');

  const onLoadImage = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsOpen(!!photoId);
  }, [photoId]);

  const handleClose = () => {
    setIsOpen(false);
    router.push('/photography');
  };

  if (!photoId) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='5xl' placement='center' classNames={{ closeButton: 'bg-black opacity-60 hover:opacity-100 hover:bg-black' }}>
      <ModalContent>
        <>
          <ModalBody className='p-0'>
            {isLoading && (
              <div className='absolute inset-0 flex items-center justify-center'>
                <Spinner color='default' size='lg' />
              </div>
            )}
            <CldImage onLoad={onLoadImage} className='w-full h-full' width='1200' height='800' src={photoId} sizes='100vw' alt='Description of my image' />
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default ModalImage;
