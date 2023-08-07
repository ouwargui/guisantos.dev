import {NewsletterEmailTemplate} from '@/components/newsletter-email-template';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import {Resend} from 'resend';
import {prisma} from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

type NewsletterBody = {
  title?: string;
  description?: string;
};

export async function POST(req: NextRequest) {
  try {
    const auth = req.headers.get('Authorization')?.split(' ')[1];

    if (!auth) {
      return NextResponse.json({err: 'Missing API KEY'}, {status: 401});
    }

    if (auth !== process.env.NEWSLETTER_API_KEY) {
      return NextResponse.json({err: 'Unauthorized'}, {status: 401});
    }

    const {title, description} = (await req.json()) as NewsletterBody;

    if (!title || !description) {
      return NextResponse.json(
        {err: 'Missing title or description'},
        {status: 400},
      );
    }

    const newsletterSubscribers = await prisma.newsletter.findMany();

    if (!newsletterSubscribers.length) {
      return NextResponse.json({msg: 'No subscribers found'}, {status: 200});
    }

    const recipients = newsletterSubscribers.map(
      (subscriber) => subscriber.email,
    );

    const data = await resend.emails.send({
      from: 'Guilherme Santos <me@guisantos.dev>',
      to: recipients,
      subject: 'New post on my blog!',
      react: NewsletterEmailTemplate({title, description}),
    });

    return NextResponse.json(
      {msg: 'Emails sent', details: {id: data.id, recipients}},
      {status: 200},
    );
  } catch (err) {
    return NextResponse.json({err});
  }
}
