import IframeYoutube from '../moleculas/IframeYoutube/IframeYoutube.component';

const listVideoDeloittes = [
  'https://www.youtube.com/embed/KkM88VkOh-U?si=IeOgeIvML0baflEP',
  'https://www.youtube.com/embed/GV4z9GbN_lA?si=mvqxx_PrY9nTkhmG',
  'https://www.youtube.com/embed/Z3eNm7YTIKc?si=WlfVHHcWCAoaMaOC',
  'https://www.youtube.com/embed/I_THg7qQD2I?si=1zg87MIZy9FnPQgu',
  'https://www.youtube.com/embed/ZPU_PM-zmEc?si=nYAWkBzf1ta5SUiO',
  'https://www.youtube.com/embed/onNR_bSU_xc?si=Lh312vJkLx9oiVbm',
  'https://www.youtube.com/embed/imidFiPpvsk?si=DZBP3tIJThZ_kSxB',
  'https://www.youtube.com/embed/W7X1BMFmp2k?si=dZaInHlWKmx481q4',
  'https://www.youtube.com/embed/syDw6TDn6rE?si=BA5YuaWB8IfikbPk',
  'https://www.youtube.com/embed/IMGbEFt0Xrs?si=y722lcPELSBXzp6x',
  'https://www.youtube.com/embed/wIcR96jOw3U?si=jh8SZ1l5DrZPEyhy',
  'https://www.youtube.com/embed/fj_Vb1lEWBQ?si=r-NacyJ9t93KSRWA',
  'https://www.youtube.com/embed/4agLySyQDdI?si=ia-bBZBu0PIB1TfW',
  'https://www.youtube.com/embed/OUSyjRKO0fo?si=0h_Me0SJe8oHOyxp',
  'https://www.youtube.com/embed/Ps6R6MAyeiY?si=zuNbGEAv8s8DlTd0',
  'https://www.youtube.com/embed/385R2MXThWs?si=duT_p5SwI56TzH3K',
  'https://www.youtube.com/embed/e_SVIE7I_j0?si=nui9ELvpNcp_X2WI',
  'https://www.youtube.com/embed/jOmXGKgnNZE?si=VcfAP_7Wgt0LNs65',
  'https://www.youtube.com/embed/SRHr_8hfODU?si=n9leuMYBfPnZYHqr',
  'https://www.youtube.com/embed/dVUhmD3D9hE?si=CpDJ0AHnVzSGKhf4',
];

export const DeloitteSection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-24 px-8'>
      <div className='my-2 flex flex-col gap-2'>
        <p className='text-center'>
          <b>DELOITTE</b>
        </p>
        <p className='text-center text-my-gray'>
          Selection of the best videos created in collaboration with the Deloitte Brand and Content team. My contribution as film maker, video editor and motion designer.
        </p>
      </div>
      <div className='mx-auto flex flex-col sm:grid grid-cols-2 gap-16 md:gap-24 mt-24 w-[90%] lg:w-[80%] justify-center'>
        {listVideoDeloittes.map((item, index) => {
          return <IframeYoutube key={index} src={item} />;
        })}
      </div>
    </div>
  );
};
