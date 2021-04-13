import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <Image src="/images/logo.png" alt="logo" width={252} height={78} priority />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
