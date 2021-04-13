import Image from 'next/image';

const OurPartners = () => {
  return (
    <div className="px-24 py-12" style={{ backgroundColor: '#F3F4F6' }}>
      <h2 className="text-32px text-center font-bold my-12">Наши партнеры</h2>
      <div className=" flex justify-center flex-wrap">
        <div className="relative w-44 h-28 mx-8 mb-7">
          <Image src="/images/partner.png" alt="partner" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-44 h-28 mx-8 mb-7">
          <Image src="/images/partner.png" alt="partner" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-44 h-28 mx-8 mb-7">
          <Image src="/images/partner.png" alt="partner" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-44 h-28 mx-8 mb-7">
          <Image src="/images/partner.png" alt="partner" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-44 h-28 mx-8 mb-7">
          <Image src="/images/partner.png" alt="partner" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-44 h-28 mx-8 mb-7">
          <Image src="/images/partner.png" alt="partner" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-44 h-28 mx-8 mb-7">
          <Image src="/images/partner.png" alt="partner" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-44 h-28 mx-8 mb-7">
          <Image src="/images/partner.png" alt="partner" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
