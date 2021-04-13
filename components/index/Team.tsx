// import TeamSwiper from './TeamSwiper';
import dynamic from 'next/dynamic';

const TeamSwiper = dynamic(() => import('./TeamSwiper'));

const Team = () => {
  return (
    <div className="px-12 pt-12 pb-20 bg-gray-100" style={{ backgroundImage: 'url("/images/team-bg.png")' }}>
      <h2 className="text-center text-32px mb-10">Наша команда</h2>
      <div className="px-28 relative">
        <TeamSwiper />
        <div className="swiper-btn-prev index__Team-swiper-prev">&#xe800;</div>
        <div className="swiper-btn-next index__Team-swiper-next">&#xe801;</div>
      </div>
    </div>
  );
};

export default Team;
