import { CameraIcon } from '@/components/moleculas/icons/CameraIcon.icon';
import { PencilIcon } from '@/components/moleculas/icons/PencilIcon.icon copy';
import { VideoIcon } from '@/components/moleculas/icons/VideoIcon.icon';
import Subtitle from '@/components/moleculas/Subtitle/Subtitle.component';
import { MotionDiv } from '@/components/Motions/MotionDiv';
const services = [
  {
    icon: <VideoIcon className='w-12 h-12' />,
    title: 'Motion Graphics',
    description: 'Engaging animations that bring your ideas to life, perfect for explainer videos, product demos, and brand stories.',
  },
  {
    icon: <CameraIcon className='w-12 h-12 ' />,
    title: 'Filmmaking',
    description: 'From concept to final cut, I create compelling short films, documentaries, and corporate videos that captivate audiences.',
  },
  {
    icon: <PencilIcon className='w-12 h-12 ' />,
    title: 'Visual Storytelling',
    description: 'Crafting narratives that resonate with your audience through a perfect blend of visuals, motion, and sound.',
  },
];

export function ServicesSection() {
  return (
    <section>
      <div className='container mx-auto px-4 flex flex-col gap-16'>
        <div className='my-2 flex flex-col gap-2'>
          <Subtitle subtitle='Services' className='text-center' />
          <h3 className='text-center text-my-gray'>From concept to final cut, I create compelling short films, documentaries, and corporate videos that captivate audiences.</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='dark:bg-default-500 p-6 rounded-lg shadow-md'
            >
              <div className='mb-4'>{service.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p>{service.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
