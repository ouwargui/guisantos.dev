type Props = {
  title: string;
  description: string;
};

export function NewsletterEmailTemplate(props: Props) {
  return (
    <div>
      <h1>Newsletter</h1>
      <h2>There&apos;s a new post on my blog!</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
