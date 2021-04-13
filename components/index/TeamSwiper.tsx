import { Swiper, SwiperSlide } from 'swiper/react';
import { ourTeamItems } from 'utils/our-team';
import TeamSlideContent from './TeamSlideContent';

const TeamSwiper = () => (
  // https://github.com/nolimits4web/swiper/issues/3855
  // https://github.com/nolimits4web/swiper/issues/3788
  <>
    <Swiper
      className="index__TeamSwiper-container"
      centeredSlides
      loop
      slidesPerView={3}
      spaceBetween={50}
      navigation={{
        prevEl: '.index__Team-swiper-prev',
        nextEl: '.index__Team-swiper-next',
      }}
      breakpoints={{
        700: {
          spaceBetween: 15,
        },
      }}
    >
      {ourTeamItems.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <TeamSlideContent isActive={isActive} name={item.name} text={item.text} img={item.img} />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  </>
);

export default TeamSwiper;
