import type {ComponentProps} from 'react';

export function Video(props: ComponentProps<'video'>) {
  return (
    <div className="self-center max-w-[222px] aspect-[222/480] overflow-clip rounded-lg">
      <video autoPlay loop muted playsInline {...props} />
    </div>
  );
}
