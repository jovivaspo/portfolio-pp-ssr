import AboutMeSection from './components/AboutMeSection/AboutMe.component';
import FeatureWorkSection from './components/FeatureWorkSection/FeatureWorkSection.component';
import HeroSection from './components/HeroSection/HeroSection.component';

export default function Landing() {
  return (
    <div className='w-full h-full flex flex-col md:gap-48 gap-32'>
      <HeroSection />
      <FeatureWorkSection />
      {/* <ServicesSection /> */}
      <AboutMeSection />
      {/* <GetInTouchSection /> */}
    </div>
  );
}
