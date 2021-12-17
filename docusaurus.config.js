const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Exvoid Wiki',
    tagline: 'Wiki officiel / Official wiki',
    url: 'https://wiki.exvoid.net',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'ExvoidNEt',
    projectName: 'wiki',
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
    },
    themeConfig: {
        navbar: {
            title: 'Wiki',
            hideOnScroll: true,
            logo: {
                alt: 'Wiki Logo',
                src: 'img/logo.png',
            },
            items: [{
                    to: "/",
                    activeBasePath: "servers/getting_started",
                    label: "Expérience",
                    position: "right",
                },
                {
                    to: "/about",
                    label: "À-Propos",
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
                    items: [{
                            label: 'Feedbacky',
                            href: 'https://feedback.exvoid.net',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.com',
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
            content: '<b>Le wiki est présentement en développement! / English localization not yet available.</b>',
            isCloseable: false,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    sidebarCollapsible: true,
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    routeBasePath: '/',
                    admonitions: {
                        icons: "emoji",
                        customTypes: {
                            réponse: {
                                keyword: "réponse",
                                emoji: "📣",
                            },
                        },
                    },
                    editUrl: 'https://github.com/ExvoidNet/wiki/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};