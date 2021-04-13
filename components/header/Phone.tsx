import Image from 'next/image';
import React from 'react';

const Phone = () => {
  return (
    <div className="flex font-bold items-center">
      <Image src="/images/phone.png" alt="phone" width={32} height={32} />
      <div className="ml-1">+7 (978) 222-86-40</div>
    </div>
  );
};

export default Phone;
