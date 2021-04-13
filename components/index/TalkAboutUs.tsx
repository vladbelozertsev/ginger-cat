import React from 'react';
// import TalkAboutUsSwiper from './TalkAboutUsSwiper';
import dynamic from 'next/dynamic';

const TalkAboutUsSwiper = dynamic(() => import('./TalkAboutUsSwiper'));

const TalkAboutUs = () => {
  return (
    <div className="px-12 pt-10 pb-20">
      <h2 className="text-center text-32px mb-9">О нас говорят</h2>
      <TalkAboutUsSwiper />
      <div className="index__TalkAboutUs-swiper-pagination"></div>
    </div>
  );
};

export default TalkAboutUs;
