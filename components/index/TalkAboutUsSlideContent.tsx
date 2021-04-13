import Image from 'next/image';

interface Props {
  img: string;
  name: string;
  rate: number;
  text: string;
}

const FilledStars = (props: { n: number }) => {
  if (props.n === 0) return null;

  return (
    <>
      {[...Array(props.n)].map((_, i) => (
        <span className="font-icon text-3xl text-my-ff7700" key={i}>
          &#xe802;{' '}
        </span>
      ))}
    </>
  );
};

const EmptyStars = (props: { n: number }) => {
  if (props.n === 0) return null;

  return (
    <>
      {[...Array(props.n)].map((_, i) => (
        <span className="font-icon text-3xl text-my-c4c4c4" key={i}>
          &#xe802;{' '}
        </span>
      ))}
    </>
  );
};

const TalkAboutUsSlideContent = (props: Props) => {
  // https://stackoverflow.com/questions/34189370/how-to-repeat-an-element-n-times-using-jsx
  return (
    <div className="bg-white flex overflow-visible rounded-3xl">
      <div className="flex-shrink-0 -ml-24 flex">
        <Image src={props.img} alt="talking-about-person" width={285} height={249} className="block" />
      </div>
      <div className="p-16">
        <div className="font-bold text-my-22279a text-2xl mb-2">{props.name}</div>
        <div className="mb-3">
          <FilledStars n={props.rate} />
          <EmptyStars n={5 - props.rate} />
        </div>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default TalkAboutUsSlideContent;
