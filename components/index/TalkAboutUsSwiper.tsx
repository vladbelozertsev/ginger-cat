import TalkAboutUsSlideContent from './TalkAboutUsSlideContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { aboutUsContent } from 'utils/talk-about-us';

const TalkAboutUsSwiper = () => {
  // https://github.com/nolimits4web/swiper/issues/3855
  // https://github.com/nolimits4web/swiper/issues/3788
  // https://react-id-swiper.ashernguyen.site/example/custom-pagination
  // https://codesandbox.io/s/custom-pagination-example-jtf4k?file=/src/App.tsx:789-814
  return (
    <div className="px-28 relative">
      <Swiper
        loop
        pagination={{ el: '.index__TalkAboutUs-swiper-pagination', clickable: true }}
        slidesPerView={1}
        spaceBetween={50}
        navigation={{
          prevEl: '.index__TalkAboutUsSwiper-prev',
          nextEl: '.index__TalkAboutUsSwiper-next',
        }}
        className="index__TalkAboutUsSwiper-container"
      >
        {aboutUsContent.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <TalkAboutUsSlideContent img={item.img} name={item.name} rate={item.rate} text={item.text} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute bottom-2 flex noselect right-40 z-10">
        <span className="index__TalkAboutUsSwiper-prev font-bold font-icon mr-5 noselect p-3 text-my-22279a text-xl">
          &#xe800;
        </span>
        <span className="index__TalkAboutUsSwiper-next font-bold font-icon noselect p-3 text-my-22279a text-xl">
          &#xe801;
        </span>
      </div>
    </div>
  );
};

export default TalkAboutUsSwiper;
