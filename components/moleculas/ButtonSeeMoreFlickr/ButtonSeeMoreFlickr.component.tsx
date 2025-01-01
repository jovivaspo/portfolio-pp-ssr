import Link from 'next/link';
import './ButtonSeeMoreFlickr.css';
export const ButtonSeeMoreFlickr = () => {
  return (
    <div className='w-full flex justify-center'>
      <Link href='https://www.flickr.com/people/pocostales/' target='_blank'>
        <button className='btn-flickr'>
          <p>See more here...</p>
        </button>
      </Link>
    </div>
  );
};
