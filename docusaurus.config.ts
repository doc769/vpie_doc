import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.vpietc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'doc769', // Usually your GitHub org/user name.
  projectName: 'vpie_doc', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ja', 'ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'djdao',
        path: 'docs-djdao',
        routeBasePath: 'djdao',
        sidebarPath: './sidebars-djdao.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'gamo2',
        path: 'docs-gamo2',
        routeBasePath: 'gamo2',
        sidebarPath: './sidebars-gamo2.ts',
      },
    ],
  ],

  themes: [
    ['@easyops-cn/docusaurus-search-local', {
      hashed: true,
      language: ['zh', 'en', 'ja'],
      indexBlog: false,
      docsRouteBasePath: ['/', '/djdao', '/gamo2'],
    }],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: 'announcement-2026-03',
      content: '🎉 欢迎访问 nanos world 文档站！本站正在持续建设中。',
      backgroundColor: '#5fa0ff',
      textColor: '#ffffff',
      isCloseable: true,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'nanos world',
      logo: {
        alt: 'nanos world',
        src: 'img/nanos-world.png',
        href: '/',
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'welcome',
          docsPluginId: 'djdao',
          position: 'right',
          label: 'DJDAO',
        },
        {
          type: 'doc',
          docId: 'welcome',
          docsPluginId: 'gamo2',
          position: 'right',
          label: 'GAMO2',
        },
        {
          href: 'https://discord.com',
          position: 'right',
          className: 'header-right-link header-discord-link',
          'aria-label': 'Discord',
        },
        {
          href: 'https://x.com/GamoTwo',
          position: 'right',
          className: 'header-right-link header-twitter-link',
          'aria-label': 'Twitter',
        },
        {
          href: 'https://www.dj-dao.com',
          position: 'right',
          className: 'header-right-link header-djdao-link',
          'aria-label': 'DJ DAO',
        },
        {
          href: 'https://gamo2.com',
          position: 'right',
          className: 'header-right-link header-gamo2-link',
          'aria-label': 'GAMO2',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              href: 'https://crowdin.com/project/nanos-world-docs/',
              label: 'Help Us Translate',
            },
            {
              type: 'html',
              className: 'crowdin-progress-item',
              value: '<a title="Help Us Translate" target="_blank" href="https://crowdin.com/project/nanos-world-docs/"><img src="https://badges.crowdin.net/nanos-world-docs/localized.svg"></a>'
            }
          ],
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Go Horse Studios.`,
      style: 'light',
      links: [
        {
          label: 'Terms of Service',
          href: 'https://gohorsestudios.com/tos',
        },
        {
          label: 'Privacy',
          href: 'https://gohorsestudios.com/privacy',
        },
        {
          label: 'Imprint',
          href: 'https://gohorsestudios.com/imprint',
        }
      ]
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
