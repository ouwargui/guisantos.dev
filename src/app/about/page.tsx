import {Hyperlink} from '@/components/hyperlink';
import React from 'react';
import {WorkHistory} from '@/components/work-history';

const workHistory: WorkHistory[] = [
  {
    title: 'Software Engineer II at IBM (2022 - current)',
    responsibilities: [
      'Leading the development of a React Native app, improving the NPS and the development process by implementing CI/CD pipelines and automated tests.',
      'Working on a global project with a team spread across the world that is changing how inner source is done at IBM.',
      'Developing reusable and maintainable components for mobile applications.',
      'Transforming business rules into accomplishable, easy-to-understand, and well-scoped user stories for my teammates.',
      'Ensuring the applications are accessible following the W3 WAI guidelines.',
      'Working with the design team to ensure the applications are pixel-perfect, easy to use, and follow the IBM Design System.',
    ],
  },
  {
    title: 'Software Engineer I at IBM (2021 - 2022)',
    responsibilities: [
      'Wrote structured, tested, readable, and maintainable code.',
      'Assisted in developing and implementing systems architecture designs, patterns, and approaches.',
      'Designed and developed custom components in 4 distinct projects with different stacks, from web to mobile, from backend to frontend.',
      'Implemented monitoring for servers and mobile applications.',
      'Developed REST and GraphQL APIs.',
    ],
  },
  {
    title: 'Software Engineer Intern at IBM (2020 - 2021)',
    responsibilities: [
      'Provided support for legacy applications.',
      'Developed new routes for our APIs.',
      'Assisted in the management of application containers.',
    ],
  },
  {
    title: 'Commercial Sales Operations Student at IBM (2019 - 2020)',
    responsibilities: [
      'Created macros for spreadsheets.',
      'Managed the technologies used by the office.',
      'Created reports for the sales team.',
      'Provided support for the sales team.',
    ],
  },
];

export default function About() {
  return (
    <main className="relative flex flex-1 flex-col gap-16 p-8 md:max-w-screen-md lg:max-w-screen-lg text-white">
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">About me</h2>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          Hi, I&apos;m Guilherme. I&apos;m a software engineer at IBM, where I
          work mostly with Node.js, React, and React Native. My main
          responsibilities are to develop and maintain web and mobile
          applications for the company and its clients.
        </p>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          Currently, I&apos;m leading the development of a React Native app for
          a major player in the technical support area in Brazil, while also
          working on a web application written in React for the front-end and
          Node.js for the back-end for the same client.
        </p>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          Outside of work, I like to learn new things and improve my skills,
          while staying up to date with the latest technologies and trends.
          I&apos;m also starting to get into the world of open source and doing
          some contributions to projects that I like and use daily.
        </p>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          When I&apos;m not coding, I&apos;m probably playing videogames,
          watching sports or hanging out with my friends.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Open source</h2>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          While I&apos;m still new to the world of open source, I&apos;m trying
          to contribute to projects that I like and I hope to be able to fill up
          this section with more projects and contributions in the future.
        </p>
        <ul className="list-disc list-inside flex flex-col text-justify gap-1 text-sm md:text-base lg:text-lg">
          <li>
            <Hyperlink href="https://github.com/nodejs/nodejs.org">
              Node.js
            </Hyperlink>
            : I helped to translate the new Node.js website into Brazilian
            portuguese with more than <span className="font-bold">1900</span>{' '}
            words translated.
          </li>
          <li>
            <Hyperlink href="https://github.com/calcom/cal.com/pull/8978">
              Cal.com
            </Hyperlink>
            : Fixed a visual bug on the website where all items on the sidebar
            weren&apos;t wrapping, causing the text to be cut off.
          </li>
          <li>
            <Hyperlink href="https://github.com/nandorojo/zeego/pull/38#event-8701924358">
              Zeego
            </Hyperlink>
            : Added documentation for a new feature to unblock a pull request.
          </li>
          <li>
            <Hyperlink href="https://github.com/expo/expo/pull/21487">
              Expo
            </Hyperlink>
            : Fixed a typo on the docs.
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Work history</h2>
        <ul className="list-disc list-inside flex flex-col text-justify gap-8 text-sm md:text-base lg:text-lg">
          {workHistory.map((history, index) => (
            <WorkHistory key={index.toString()} {...history} />
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Recognitions</h2>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          I&apos;m proud to have been recognized by IBM as a top talent on the
          CIO organization since 2021. With this recognition, I&apos;ve been
          able to participate in some events and training with other top talents
          from the company.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">My setup</h2>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          I&apos;m currently using a MacBook Pro 16&apos; (M1, 2021) for coding
          and any flat surface as a desk. I don&apos;t use an external mouse or
          keyboard because I actually like the MacBook&apos;s keyboard and
          trackpad and feel very productive with them.
        </p>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          I&apos;m using the default terminal on macOS with{' '}
          <Hyperlink href="https://github.com/spaceship-prompt/spaceship-prompt">
            spaceship
          </Hyperlink>{' '}
          as my prompt and{' '}
          <Hyperlink href="https://ohmyz.sh/">Oh My Zsh</Hyperlink> as my shell.
          I use{' '}
          <Hyperlink href="https://code.visualstudio.com/">VSCode</Hyperlink> as
          my main editor, with the{' '}
          <Hyperlink href="https://draculatheme.com/">Dracula</Hyperlink> theme
          and the{' '}
          <Hyperlink href="https://github.com/tonsky/FiraCode">
            Fira Code
          </Hyperlink>{' '}
          font. I tried to use Vim, but I just couldn&apos;t get used to it and
          felt like my productivity was going down, so I switched back to{' '}
          <Hyperlink href="https://code.visualstudio.com/">VSCode</Hyperlink>.
        </p>
        <p className="text-justify text-sm md:text-base lg:text-lg">
          I use <Hyperlink href="https://arc.net/">Arc</Hyperlink> as my main
          browser and I really make use of the workspaces feature, having one
          workspace for work and another for personal use.
        </p>
      </section>
    </main>
  );
}
