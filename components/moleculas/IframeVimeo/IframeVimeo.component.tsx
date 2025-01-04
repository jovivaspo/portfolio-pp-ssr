import React from 'react';
interface Props {
  src: string;
}
export const IframeVimeo: React.FC<Props> = ({ src }) => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          maxWidth: '100%',
          background: '#000',
        }}
      >
        <iframe
          loading='lazy'
          src={src}
          title='Vimeo video player'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          frameBorder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>

      <script src='https://player.vimeo.com/api/player.js'></script>
    </>
  );
};
