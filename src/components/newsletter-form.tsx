'use client';
import {useFormStatus} from 'react-dom';

export function NewsletterForm() {
  const {pending} = useFormStatus();

  return (
    <>
      <input
        className="bg-muted text-foreground p-2 rounded-r-none rounded-l-xl border-y border-l border-foreground outline-none w-full h-12"
        type="email"
        name="email"
        placeholder="Email address"
        disabled={pending}
      />
      <button
        className="flex bg-foreground font-medium text-background p-2 rounded-e-xl border-y border-r border-foreground transition-transform w-28 md:w-36 h-12 items-center justify-center"
        type="submit"
        disabled={pending}
      >
        {pending ? (
          <div className="border-2 border-foreground rounded-full w-5 h-5 animate-spin" />
        ) : (
          'Subscribe'
        )}
      </button>
    </>
  );
}
