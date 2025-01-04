import { Form } from '@/components/Form/Form.component';

export default function ContactPage() {
  return (
    <div className='w-full h-full flex flex-col md:gap-24 gap-16 mb-24'>
      <div className='w-full flex flex-col justify-center items-center mt-24 px-8'>
        <div className='my-2 flex flex-col gap-2'>
          <h2 className='text-center font-bold'>Get in Touch</h2>

          <h3 className='text-center text-my-gray'> Have a project in mind? Let's work together to create something amazing.</h3>

          <Form />
        </div>
      </div>
    </div>
  );
}
