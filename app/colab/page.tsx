import { DeloitteSection } from '@/components/DeloitteSection/DeloitteSection.component';
import { FreelanceSection } from '@/components/FreelanceSection/FreelanceSection.component';
import { HeaderHero } from '@/components/HeaderHero/HeaderHero.component';

export default function ColabPage() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16'>
      <HeaderHero type='image' src='https://res.cloudinary.com/dme5pqzrj/image/upload/v1698424080/portafolio-pp/header-feat-collaboration_zahc6o.jpg' title='Feat/Collaboration' />

      <FreelanceSection />

      <DeloitteSection />
    </div>
  );
}
