import Button from 'components/_common/Button';
import Image from 'next/image';

const Graduation = () => {
  const liTexts = [
    'Аренда двух залов 3 часа',
    'Ведущие - персонажи ТОП игры “AmongUs” 1 час',
    'Дискотека с DJ Marshmello 30 мин',
    'Современное музыкальное сопровождение праздника',
    'Выпускной салют из конфетти',
    'Яркая атрибутика для фото',
    'Караоке, Just dance',
  ];

  return (
    <div>
      <div className="border-b border-l border-r border-red-400 flex px-48 py-12">
        <div className="py-7">
          <h1 className="mb-4">
            <strong className="block text-65px text-my-813e83">ВЫПУСКНЫЕ 2021</strong>
            <span className="text-42px text-my-ec9c25">ДЛЯ ДЕТСКОГО САДА</span>
          </h1>
          <ul className="mb-8">
            {liTexts.map((text, index) => (
              <li className="mb-2" key={index}>
                <span className="bg-my-4daaba h-7px inline-block mb-2px mr-3 rounded-full w-7px"></span>
                {text}
              </li>
            ))}
          </ul>
          <Button />
        </div>
        <div className="w-1/3 relative">
          <Image src="/images/graduation.png" alt="btn-icon" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Graduation;
