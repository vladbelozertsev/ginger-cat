import parse from 'html-react-parser';
import { holidayAdditionTopItems } from 'utils/holiday-addition';
import Button from 'components/_common/Button';

const HolidayAdditionTop = () => {
  return (
    <div className="index__holiday-addition-top-main -mb-32 -mt-2 gap-7 grid grid-cols-4 px-48 text-2">
      {holidayAdditionTopItems.map((item, i) => {
        let bg = 'bg-my';

        if (i === 0) bg += '-99c9e0';
        else if (i === 1) bg += '-9a99e0';
        else if (i === 2) bg += '-f5c964';
        else bg += '-aed686';

        return (
          <div className={`${bg} flex flex-col justify-between p-7 rounded-3xl`} key={i}>
            <div>{parse(item)}</div>
            <div className="text-center mt-7">
              <Button />
            </div>
          </div>
        );
      })}

      <style jsx global>{`
        .index__holiday-addition-top-main {
          font-size: 10px;
        }

        .index__holiday-addition-top-main h3 {
          color: #fff;
          font-size: 24px;
          margin-bottom: 24px;
        }

        .index__holiday-addition-top-main h4 {
          font-weight: bold;
          margin-bottom: 16px;
        }

        .index__holiday-addition-top-main strong {
          font-size: 18px;
        }

        .index__holiday-addition-top-margin-bottom {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default HolidayAdditionTop;
