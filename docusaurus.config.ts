import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'crzvrc-docs',
  tagline: 'docs',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://David123car7.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'David123car7', // Usually your GitHub org/user name.
  projectName: 'crzvrc-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/David123car7/crzvrc-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark', 
      disableSwitch: true, 
      respectPrefersColorScheme: false, 
    },
    navbar: {
      title: 'CrZVRC',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
        height: 1000,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/tos/',
          activeBaseRegex: '^/crzvrc-docs/docs/tos/?$',
          position: 'left',
          label: 'Terms of Service',
        },
        {
          to: '/docs/tos/privacy-policy',
          position: 'left',
          label: 'Privacy Policy',
        },
        {
          href: 'https://github.com/David123car7/crzvrc-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Stores',
          items: [
            {
              label: 'Jinxxy',
              href: 'https://jinxxy.com/CrZ3d',
            },
            {
              label: 'Booth',
              href: 'https://crz3d.booth.pm/',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/3W7h3Bp3mH',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@CrZ3D',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/David123car7',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CrZVRC, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
