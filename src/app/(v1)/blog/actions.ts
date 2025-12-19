'use server';

import {Resend} from 'resend';
import {NewsletterWelcomeEmailTemplate} from '@/components/newsletter-welcome-email-template';
import {db} from '@/lib/db';
import {newsletter} from '@/lib/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(
  _prevState: boolean,
  formData: FormData,
) {
  const email = formData.get('email');
  if (!email) return false;

  const formattedEmail = email.toString().trim().toLowerCase();

  await db.insert(newsletter).values({
    email: formattedEmail,
  });

  await resend.emails.send({
    from: 'Guilherme Santos <me@guisantos.dev>',
    to: formattedEmail,
    subject: 'Welcome to my newsletter!',
    react: NewsletterWelcomeEmailTemplate(),
  });

  return true;
}
