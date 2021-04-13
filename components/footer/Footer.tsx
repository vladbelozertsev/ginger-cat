import Image from 'next/image';
import dynamic from 'next/dynamic';

const YandexMap = dynamic(() => import('./YandexMap'), { loading: () => <div>Загрузка...</div> });

const Footer = () => {
  return (
    <footer
      className="px-48 bg-cover py-32 text-white flex"
      style={{ backgroundImage: 'url("/images/footer-bg.png")' }}
    >
      <div className="mr-32">
        <div className="mb-10">
          <Image src="/images/logo.png" alt="logo" width={252} height={78} />
        </div>
        <div className="font-icon text-xl mb-10">
          <a className="mr-10" href="https://vk.com" target="_blank" rel="noopener noreferrer">
            &#xf189;
          </a>
          <a className="mr-10" href="https://www.instagram.com/?hl=ru" target="_blank" rel="noopener noreferrer">
            &#xf16d;
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            &#xf30c;
          </a>
        </div>
        <div className="mb-10">+7 (978) 222-86-40</div>
        <div>Симферополь, проспект Победы, 44-Б</div>
      </div>
      <YandexMap />
    </footer>
  );
};

export default Footer;
