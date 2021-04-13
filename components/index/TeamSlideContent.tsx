import Image from 'next/image';

interface Props {
  img: string;
  isActive: boolean;
  name: string;
  text: string;
}

const TeamSlideContent = (props: Props) => {
  const tr = (s: number) => `transition-all duration-${s * 1000}`;

  return (
    <div
      className={`${props.isActive ? 'bg-my-caa5d7 h-571px' : 'bg-my-99c9e0 h-435px'}
        p-7 rounded-2xl text-center ${tr(1.5)}`}
    >
      <div className="overflow-hidden h-full">
        <div className={`${props.isActive ? 'h-80' : 'h-60'} ${tr(1.5)} relative`}>
          <Image src={props.img} alt="team-member" layout="fill" objectFit="contain"></Image>
        </div>
        <h3 className={`${props.isActive ? 'text-28px' : 'text-xl'} ${tr(1.5)} my-3 font-bold`}>{props.name}</h3>
        <div>{props.text}</div>
        {/* <div className={`${props.isActive ? '' : 'text-xs'} overflow-ellipsis`}>{props.text}</div> */}
      </div>
    </div>
  );
};

export default TeamSlideContent;
