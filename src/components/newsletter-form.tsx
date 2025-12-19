'use client';
import {useActionState} from 'react';
import {subscribeToNewsletter} from '@/app/(v1)/blog/actions';

export function NewsletterForm() {
  const [subscribed, subscribeToNewsletterAction, isPending] = useActionState(
    subscribeToNewsletter,
    false,
  );

  return subscribed ? (
    <p className="flex bg-foreground font-medium text-background p-2 rounded-xl border border-foreground transition-transform w-full h-12 items-center justify-center">
      Thanks!
    </p>
  ) : (
    <form
      className="flex justify-start items-center"
      action={subscribeToNewsletterAction}
    >
      <input
        className="bg-muted text-foreground p-2 rounded-r-none rounded-l-xl border-y border-l border-foreground outline-none w-full h-12"
        type="email"
        name="email"
        placeholder="Email address"
        disabled={isPending}
      />
      <button
        className="flex bg-foreground font-medium text-background p-2 rounded-e-xl border-y border-r border-foreground transition-transform w-28 md:w-36 h-12 items-center justify-center"
        type="submit"
        disabled={isPending || subscribed}
      >
        Subscribe
      </button>
    </form>
  );
}
