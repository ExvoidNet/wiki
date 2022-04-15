// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki',
  tagline: 'Wiki officiel/official',
  url: 'https://wiki.exvoid.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'ExvoidNet',
  projectName: 'wiki',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
          sidebarCollapsible: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          breadcrumbs: true,
          editUrl: 'https://github.com/ExvoidNet/wiki/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: true,
      navbar: {
        title: 'Wiki',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: "/",
            activeBasePath: "index",
            label: "Acceuil",
            position: "left",
          },
          {
            type: 'dropdown',
            label: 'Expériences',
            position: "left",
            items: [
              {
                label: 'Minecraft',
                to: 'servers/minecraft/gettingStarted'
              },
              {
                label: 'Unturned',
                to: 'servers/unturned/gettingStarted'
              }
            ]
          },
          {
            to: 'resources/resources',
            label: "Ressources",
            position: "left",
          },
          {
            href: 'https://discord.exvoid.net/',
            label: 'Communauté',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        logo: {
          alt: 'Exvoid Network',
          src: '/img/header.png',
          href: 'https://exvoid.net',
      },
        copyright: `${new Date().getFullYear()} © <b>Exvoid Network</b>`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        logo: {
          alt: 'Exvoid Network',
          src: '/img/header.png',
          href: 'https://exvoid.net',
       },
        copyright: `${new Date().getFullYear()} © <b>Exvoid Network</b>`,
        announcementBar: {
          id: 'announcement',
          content: '<b>Le wiki est présentement en développement! / English localization not yet available.</b>',
          isCloseable: false,
        },
      },
    }),
};

module.exports = config;
