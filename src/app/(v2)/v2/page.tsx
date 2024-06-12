import {notFound} from 'next/navigation';

export default function Page() {
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }

  return <div>hehe boi</div>;
}
