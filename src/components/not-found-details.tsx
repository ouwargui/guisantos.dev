import {Hyperlink} from './hyperlink';

type Props = {
  description: string;
  href: string;
  buttonText: string;
};

export function NotFoundDetails(props: Props) {
  return (
    <div className="absolute flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-foreground mb-8 text-sm md:text-base">
        {props.description}
      </p>
      <Hyperlink
        type="NextLink"
        href={props.href}
        className="text-primary hover:text-secondary font-semibold py-2 px-4 rounded"
      >
        {props.buttonText}
      </Hyperlink>
    </div>
  );
}
