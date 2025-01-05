import { MotionDiv } from '@/components/Motions/MotionDiv';
import { MotionH1 } from '@/components/Motions/MotionH1';
import { MotionParagraph } from '@/components/Motions/MotionParagraph';
import HeroBackground from './components/HeroBackground/HeroBackground.component';

export default function HeroSection() {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <MotionDiv initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} className='absolute inset-0'>
        <HeroBackground />
        <div className='absolute inset-0 bg-black/40' />
      </MotionDiv>
      <div className='relative flex h-full flex-col items-center justify-center text-white w-full'>
        <MotionH1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'
        >
          PABLO
          <br />
          POCOSTALES
        </MotionH1>
        <MotionParagraph initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className='text-center mt-6 text-lg text-gray-200 sm:text-xl'>
          Motion Graphics Designer & Filmmaker
        </MotionParagraph>
        <MotionDiv initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className='mt-8'>
          <p className='text-sm font-medium text-gray-300'>Based in Luxembourg</p>
        </MotionDiv>
        <MotionDiv initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }} className='absolute bottom-8 left-0 right-0 flex justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <div className='h-16 w-0.5 bg-white/20' />
            <p className='text-sm font-medium text-white/60'>Scroll to explore</p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
