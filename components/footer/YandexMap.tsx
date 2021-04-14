import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const YandexMap = () => {
  console.log('YandexMap');

  return (
    <div className="h-340px w-665px max-w-full">
      <YMaps>
        <Map defaultState={{ center: [44.96153, 34.116506], zoom: 15 }} width="100%" height="100%" />
      </YMaps>
    </div>
  );
};

export default YandexMap;
