export const LogoAnimated = () => {
  return (
    <div className='filter brightness-110 mix-blend-multiply'>
      <video className='w-full h-full object-cover' muted loop autoPlay>
        <source src='/PP_LOGO-animated-loop.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
