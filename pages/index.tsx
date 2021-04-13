import TalkAboutUs from 'components/index/TalkAboutUs';
import Graduation from 'components/index/Graduation';
import HolidayAddition from 'components/index/HolidayAddition';
import MainLayout from 'components/_layouts/MainLayout';
import Partners from 'components/index/Partners';
import Team from 'components/index/Team';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Рыжий Кот</title>
      </Head>
      <Graduation />
      <HolidayAddition />
      <Partners />
      <Team />
      <TalkAboutUs />
    </>
  );
};
Index.Layout = MainLayout;

export default Index;
