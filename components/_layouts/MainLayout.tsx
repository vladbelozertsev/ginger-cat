import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

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
