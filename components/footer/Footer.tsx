import Image from 'next/image';
import { YMaps, Map } from 'react-yandex-maps';

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
      <div className="h-340px w-665px max-w-full">
        <YMaps>
          <Map defaultState={{ center: [44.96153, 34.116506], zoom: 15 }} width="100%" height="100%" />
        </YMaps>
      </div>
    </footer>
  );
};

export default Footer;
