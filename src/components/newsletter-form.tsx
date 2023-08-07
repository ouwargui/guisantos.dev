'use client';

import React from 'react';
import {experimental_useFormStatus as useFormStatus} from 'react-dom';

export function NewsletterForm() {
  const {pending} = useFormStatus();

  return (
    <>
      <input
        className="bg-zinc-800 text-white p-2 rounded-r-none rounded-l-xl border-y border-l border-white outline-none w-full h-12"
        type="email"
        name="email"
        placeholder="Email address"
        disabled={pending}
      />
      <button
        className="flex bg-white font-medium text-zinc-950 p-2 rounded-e-xl border-y border-r border-white transition-transform w-28 md:w-36 h-12 items-center justify-center"
        type="submit"
        disabled={pending}
      >
        {pending ? (
          <div className="border-2 border-zinc-400 border-t-2 border-t-zinc-950 rounded-full w-5 h-5 animate-spin" />
        ) : (
          'Subscribe'
        )}
      </button>
    </>
  );
}
