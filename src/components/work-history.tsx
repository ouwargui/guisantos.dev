import React from 'react';

export type WorkHistory = {
  title: string;
  responsibilities: string[];
};

export function WorkHistory({title, responsibilities}: WorkHistory) {
  return (
    <li className="list-none flex flex-col gap-1">
      <h3 className="font-medium text-white text-base md:text-lg lg:text-xl">
        {title}
      </h3>
      <ul className="list-disc list-inside flex flex-col gap-1 md:gap-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index.toString()}>{responsibility}</li>
        ))}
      </ul>
    </li>
  );
}
