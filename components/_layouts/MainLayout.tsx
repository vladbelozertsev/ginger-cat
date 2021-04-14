import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
// import dynamic from 'next/dynamic';

// const Footer = dynamic(() => import('components/footer/Footer'));

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
