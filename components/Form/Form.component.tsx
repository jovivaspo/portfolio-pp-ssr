'use client';

import { Spinner } from '@nextui-org/spinner';
import React from 'react';

const initForm = {
  email: '',
  name: '',
  message: '',
};

export const Form = () => {
  const [form, setForm] = React.useState(initForm);
  const [error, setError] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const handlerChange = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlerSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsSubmit(true);

    try {
      if (!form.email || !form.message || !form.name) {
        throw new Error();
      }
      // console.log(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email));
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
        throw new Error();
      }

      const resp = await fetch('https://formsubmit.co/ajax/Pocostales7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          message: form.message,
        }),
      });

      const data = await resp.json();

      if (data) {
        alert('Thank you for your message!');
        setForm(initForm);
      }
      /*setTimeout(() => {
        alert(
          "Thank you for your message! We will get back to you as soon as possible."
        );
        setIsSubmit(false);
      }, 1000);*/
    } catch (e) {
      if (!form.email || !form.message || !form.name) {
        setError(true);
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
        setError(true);
      } else {
        setError(true);
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <form id='formulario' className='mx-auto flex flex-col justify-center items-center gap-8 p-4 pt-16 w-full md:w-[80%] lg:w-[780px] mt-32'>
      <div className='flex flex-col gap-2 w-[90%] md:max-w-[720px]'>
        <label htmlFor='name' className='text-sm font-semibold'>
          FULL NAME
        </label>
        <input
          autoComplete='off'
          className='bg-transparent focus:outline-none text-sm w-full p-1 border-b'
          type='text'
          name='name'
          onChange={handlerChange}
          value={form.name}
          placeholder='Your name here...'
        />
        <div className='h-[16px] flex items-start'>{error && !form.name && <span className='text-red-500 text-xs'>Please enter a name</span>}</div>
      </div>
      <div className='flex flex-col gap-2  w-[90%] md:max-w-[680px]'>
        <label htmlFor='email' className='text-sm font-semibold'>
          EMAIL
        </label>
        <input
          autoComplete='off'
          className='bg-transparent focus:outline-none text-sm w-full p-1 border-b'
          type='email'
          name='email'
          onChange={handlerChange}
          value={form.email}
          placeholder='example@gmail.com'
        />
        <div className='h-[16px] flex items-start'>
          {error && !form.email ? (
            <span className='text-red-500 text-xs'>Please enter an email</span>
          ) : error && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email) ? (
            <span className='text-red-500 text-xs'>Please enter a valid email</span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='flex flex-col gap-2  w-[90%] md:max-w-[680px]'>
        <label htmlFor='message' className='text-sm font-semibold'>
          MESSAGE
        </label>
        <textarea
          className='bg-transparent border text-sm  w-full focus:outline-none p-4'
          name='message'
          id='message'
          onChange={handlerChange}
          value={form.message}
          placeholder='Your message...'
        ></textarea>
        <div className='h-[16px] flex items-start'>{error && !form.name && <span className='text-red-500 text-xs'>Please enter a message</span>}</div>
        <button
          disabled={isSubmit}
          onClick={handlerSubmit}
          style={{
            opacity: isSubmit ? 0.5 : 1,
            cursor: isSubmit ? 'auto' : 'pointer',
          }}
          className=' gap-2 my-8 self-end w-[100px] px-4 py-2 flex justify-center items-center border border-gray-400 font-semibold '
        >
          {isSubmit && <Spinner color='white' size='sm' />}
          Submit
        </button>
      </div>
    </form>
  );
};
