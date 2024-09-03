import React from 'react';
import info from '../../assets/info.svg';

export const RoyaltyScore = () => {
  const listItems = [
    { label: 'Altmetrics', value: '1013' },
    { label: 'Citations', value: '22' },
    { label: 'Peer Reviews', value: '07' },
    { label: 'Citizen Score', value: '07' },
    { label: 'Download', value: '13' },
  ];

  return (
    <div className="w-full rounded-3xl border-[1px] border-solid border-border-muted bg-bg-secondary py-2">
      <div className="flex items-center justify-between px-5 max-xl:px-3">
        <h1 className="text-lg font-semibold max-xl:text-base">
          Royalty Score
        </h1>
        <img
          src={info}
          alt="information icon"
          draggable="false"
          className="w-5 cursor-pointer select-none max-xl:w-4"
        />
      </div>

      <div className="my-4 flex w-full flex-col items-center justify-center max-xl:my-3">
        <h2 className="w-full border-l-4 border-solid border-primary text-center text-5xl font-normal max-xl:text-4xl">
          384
        </h2>
        <p className="font-semibold text-text-secondary"> Score</p>
      </div>

      <ul>
        {listItems.map((item, index) => (
          <li
            className="flex px-5 pb-1 text-base max-xl:px-3 max-xl:text-sm"
            key={index}
          >
            <h4 className="text-nowrap font-medium text-text-secondary">
              {item.label}
            </h4>
            <div className="mx-1 mt-4 flex h-full w-full border-b-[1px] border-solid border-border-muted"></div>
            <h4 className="text-text-primary">{item.value}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
