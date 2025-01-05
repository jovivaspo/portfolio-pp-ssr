import { MotionDiv } from '@/components/Motions/MotionDiv';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

export default function GetInTouchSection() {
  return (
    <section>
      <div className='container mx-auto'>
        <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>Let's create something amazing together</h2>
          <p className='text-gray-my-gray mb-8'>Whether you need professional photography or video production, I'm here to help bring your vision to life.</p>
          <Button size='lg' as={Link} href='/contact'>
            Get in touch
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
