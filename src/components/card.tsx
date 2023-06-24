'use client';

import React from 'react';
import {getRelativeTime} from '../utils/date';

type Props = {
  title: string;
  description: string;
  date?: string;
};

export function Card({title, description, date}: Props) {
  return (
    <div className="group relative hover:scale-95 overflow-hidden transition-transform rounded-xl p-[1.5px] items-center flex justify-center">
      <div className="flex w-full h-full bg-zinc-800 flex-col gap-2 p-4 rounded-xl text-sm md:text-base">
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="text-zinc-400 text-justify">{description}</span>
        {date && (
          <span className="text-end text-zinc-400 text-sm">
            {getRelativeTime(new Date(date))}
          </span>
        )}
      </div>
      <div className="absolute bg-white self-center -z-10 w-[calc(100%+2rem)] aspect-square rounded-full group-hover:bg-gradient-to-br group-hover:from-orange-200 group-hover:to-orange-900 group-hover:animate-[spin_1s_linear_infinite]" />
    </div>
  );
}
