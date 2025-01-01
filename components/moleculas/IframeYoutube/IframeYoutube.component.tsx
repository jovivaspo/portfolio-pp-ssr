interface Props {
  src: string;
  padding?: string;
}

const IframeYoutube: React.FC<Props> = ({ src, padding = '56.25%' }) => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          paddingBottom: padding,
          height: 0,
          overflow: 'hidden',
          maxWidth: '100%',
          background: '#000',
        }}
      >
        <iframe
          loading='lazy'
          src={src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default IframeYoutube;
