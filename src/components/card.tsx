'use client';
import {getRelativeTime} from '../utils/date';

type Props = {
  title: string;
  description: string;
  date?: string;
};

export function Card({title, description, date}: Props) {
  return (
    <div className="group relative hover:scale-[.98] transition-transform rounded-xl p-[1.5px] items-center flex justify-center">
      <div className="relative flex w-full h-full bg-muted flex-col gap-2 p-4 rounded-xl text-sm md:text-base">
        <h2 className="font-semibold text-secondary text-lg">{title}</h2>
        <span className="text-foreground text-justify">{description}</span>
        {date && (
          <span className="text-end text-muted text-sm">
            {getRelativeTime(new Date(date))}
          </span>
        )}
      </div>
    </div>
  );
}
