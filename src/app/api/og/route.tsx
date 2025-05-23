import {ImageResponse} from 'next/og';

export const runtime = 'edge';

const redHatMonoRegular = fetch(
  new URL('../../../../public/fonts/RedHatMono-Regular.ttf', import.meta.url)
    .href,
).then((res) => res.arrayBuffer());

const redHatMonoBold = fetch(
  new URL('../../../../public/fonts/RedHatMono-Bold.ttf', import.meta.url).href,
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  try {
    const fonts = await Promise.all([redHatMonoRegular, redHatMonoBold]);

    const {searchParams} = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Default title';

    const hasDate = searchParams.has('date');
    const date = hasDate ? searchParams.get('date') : 'Default date';

    const hasWidth = searchParams.has('width');
    const hasHeight = searchParams.has('height');

    const width = hasWidth ? Number(searchParams.get('width')) : 800;
    const height = hasHeight ? Number(searchParams.get('height')) : 600;

    return new ImageResponse(
      <div
        style={{
          backgroundColor: '#0c0d11',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          color: '#47a39f',
          fontFamily: 'Red Hat Mono Regular',
          fontSize: '20px',
          padding: '60px 100px',
        }}
      >
        <span>{date}</span>
        <h1
          style={{
            fontFamily: 'Red Hat Mono Bold',
            fontSize: '60px',
          }}
        >
          {title}
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            color: '#67fdf2',
          }}
        >
          <span>guisantos.dev</span>
          <img
            width="64"
            height="64"
            src="https://github.com/ouwargui.png"
            style={{borderRadius: 32}}
            alt="Guilherme Santos"
          />
        </div>
      </div>,
      {
        width: width,
        height: height,
        fonts: [
          {
            name: 'Red Hat Mono Regular',
            data: fonts[0],
            style: 'normal',
          },
          {
            name: 'Red Hat Mono Bold',
            data: fonts[1],
            style: 'normal',
          },
        ],
      },
    );
  } catch (error) {
    console.error(error);
    return new Response('Failed to generate image', {status: 500});
  }
}
