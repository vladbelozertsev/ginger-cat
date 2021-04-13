import Logo from './Logo';
import Nav from './Nav';
import Phone from './Phone';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className={`${router.asPath === '/' ? 'border-red-400' : ''} border-l border-r  border-t px-16 text-sm`}>
      <div className="bg-my-99c9e0 flex h-136px items-center justify-between px-12 rounded-b-3xl">
        <Logo />
        <Nav />
        <Phone />
      </div>
    </header>
  );
};

export default Header;
