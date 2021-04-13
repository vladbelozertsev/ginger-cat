import HolidayAdditionTop from './HolidayAdditionTop';
import Image from 'next/image';
import { holidayAdditionItems } from 'utils/holiday-addition';

const HolidayAddition = () => {
  return (
    <div>
      <HolidayAdditionTop />
      <div className="bg-my-caa5d7 pt-44 pb-36 px-48">
        <h2 className="mb-5 text-32px text-center text-white">Дополнение к празднику</h2>
        <div className="mb-20 text-center text-lg">
          Какой-то текст в 2 строки расположенный на пол ширины <br /> с кратким описанием этого блока
        </div>
        <div className="gap-x-5 gap-y-20 grid grid-cols-3">
          {holidayAdditionItems.map((item, i) => {
            return (
              <div className="text-center" key={i}>
                <div>
                  <Image src={item.img} alt="addition-to-the-holiday" width={285} height={249} />
                </div>
                <h3 className="text-28px text-center mt-3 mb-5 text-white">{item.header}</h3>
                <div>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HolidayAddition;
