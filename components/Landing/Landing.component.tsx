import AboutMeSection from './components/AboutMeSection/AboutMe.component';
import FeatureWorkSection from './components/FeatureWorkSection/FeatureWorkSection.component';
import HeroSection from './components/HeroSection/HeroSection.component';
import { ServicesSection } from './components/ServicesSection/ServicesSection.component';

export default function Landing() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16'>
      <HeroSection />
      <FeatureWorkSection />
      <ServicesSection />
      <AboutMeSection />
    </div>
  );
}
