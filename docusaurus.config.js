// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Exvoid Wiki',
  tagline: 'Wiki officiel d\'Exvoid Network. / Official Exvoid Network wiki.',
  url: 'https://wiki.exvoid.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'ExvoidNet',
  projectName: 'wiki',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  sidebarCollapsible: true,
		  showLastUpdateAuthor: true,
		  showLastUpdateTime: true,		  
		  routeBasePath: '/',
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
      navbar: {
        title: 'Wiki',
        logo: {
          alt: 'Wiki Logo',
          src: 'img/logo.png',
        },
		items: [
		  {
			to: "introduction",
			activeBasePath: "/introduction",
			label: "Introduction",
			position: "right",
		  },
		  {
			to: "servers/getting_started",
			label: "Serveurs",
		 	position: "right",
		  },
		  {
			to: "support/troubleshooting",
			label: "Soutien",
		 	position: "right",
		  },
		  {
			type: 'dropdown',
			label: 'Communauté',
			position: 'right',
			items: [
			  {
				label: 'Discord',
				href: 'https://discord.com',
			  },
			  {
				label: 'Feedbacky',
				href: 'https://feedback.exvoid.net',
			  },
			  {
				label: 'Steam',
				href: 'https://steamcommunity.com/groups/exvoidnetwork',
			  },
			],
		  },
          {
            href: 'https://github.com/ExvoidNet/wiki/',
            label: 'Contribuer',
            position: 'right',
          },
		  {
			type: 'localeDropdown',
			position: 'left',
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
		copyright: `${new Date().getFullYear()} © <b>Exvoid Network</b>`,
      },
	  announcementBar: {
		id: 'announcement',
		content:
			'<b>Le wiki est présentement en développement! / English localization not yet available.</b>',
		backgroundColor: '#ff0c00',
		textColor: '#ffffff',
		isCloseable: true,
	  },  
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
