import {Skeleton} from '@/components/skeleton';

export default async function BlogPostLoading() {
  return (
    <main className="flex flex-col gap-10 flex-1 w-full md:max-w-screen-md lg:max-w-screen-lg p-8">
      <header className="flex flex-col text-sm md:text-base w-full gap-1">
        <Skeleton className="h-12 w-full sm:w-2/3" />
        <div className="flex gap-2 text-foreground w-full sm:w-1/2">
          <Skeleton className="h-4 w-1/2 sm:w-2/3" />
          <Skeleton className="h-4 w-1/2 sm:w-1/3" />
        </div>
      </header>
      <article className="w-full !max-w-full flex flex-col gap-4 flex-1">
        <Skeleton className="flex-1 w-full" />
      </article>
    </main>
  );
}
