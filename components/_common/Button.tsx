import Image from 'next/image';

interface Props {
  height?: string;
  text?: string;
}

const Button = (props: Props) => {
  return (
    <button className={`btn  ${props.height || 'h-46px'}`}>
      <span className="btn__image">
        <Image src="/images/btn-icon.png" alt="btn-icon" width={50} height={51.2} />
      </span>
      <span>{props.text || 'Подробнее'}</span>
    </button>
  );
};

export default Button;
