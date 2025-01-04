import AboutMeSection from './components/AboutMeSection/AboutMe.component';
import FeatureWorkSection from './components/FeatureWorkSection/FeatureWorkSection.component';
import GetInTouchSection from './components/GetInTouch/GetInTouch.component';
import HeroSection from './components/HeroSection/HeroSection.component';
import { ServicesSection } from './components/ServicesSection/ServicesSection.component';

export default function Landing() {
  return (
    <div className='w-full h-full flex flex-col md:gap-48 gap-32'>
      <HeroSection />
      <FeatureWorkSection />
      <ServicesSection />
      <AboutMeSection />
      <GetInTouchSection />
    </div>
  );
}
