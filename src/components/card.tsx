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
    <div className="group relative hover:scale-[.98] transition-transform rounded-xl p-[1.5px] items-center flex justify-center">
      <div className="absolute inset-0 rounded-xl bg-orange-400 blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative flex w-full h-full bg-zinc-800 flex-col gap-2 p-4 rounded-xl text-sm md:text-base">
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="text-zinc-400 text-justify">{description}</span>
        {date && (
          <span className="text-end text-zinc-400 text-sm">
            {getRelativeTime(new Date(date))}
          </span>
        )}
      </div>
    </div>
  );
}
