'use client';
import {useRouter} from 'next/navigation';

export function Search() {
  const router = useRouter();

  return (
    <div className="flex items-center bg-muted focus-within:border-primary text-foreground border-secondary border rounded-md pl-2 transition-colors lg:w-1/2">
      <svg
        role="img"
        aria-label="Search icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        className="flex w-full bg-transparent text-base border-none p-2 placeholder:text-zinc-400 outline-none"
        type="search"
        placeholder="Search"
        onChange={(e) => {
          router.push(`/blog?search=${e.target.value}`);
        }}
      />
    </div>
  );
}
