module.exports = {
    // Index
    index: [
        // Home
        {
            type: 'doc',
            id: 'index',
        },

        // Support
        {
            type: 'category',
            label: 'Support',
            collapsed: true,
            items: [
                'support/support', 
            ]
        },

        // Exvoid Network
        {
            type: 'category',
            label: 'Exvoid Network',
            collapsed: true,
            items: [
                'about',
                'links',
                'staff', 
                'donate'
            ]
        },

    ],

    // Minecraft
    minecraft: [
        // Getting Started
        {
            type: 'doc',
            id: 'servers/minecraft/gettingStarted',
        },

        // Remission
        {
            type: 'category',
            label: 'Remission',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'servers/minecraft/remission/information',
            },
            items: [
                'servers/minecraft/remission/faq',
            ]
        }

        //  Creative
        /*
        {
            type: 'category',
            label: 'Creative',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'servers/minecraft/creative/information',
            },
            items: [
                'servers/minecraft/unturned/',
            ]
        }
        */

        //  Arena
        /*
        {
            type: 'category',
            label: 'Arena',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'servers/minecraft/arena/information',
            },
            items: [
                'servers/minecraft/arena/',
            ]
        }
        */
       
        //  Arcade
        /*
        {
            type: 'category',
            label: 'Arcade',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'servers/minecraft/arcade/information',
            },
            items: [
                'servers/minecraft/arcade/',
            ]
        }
        */
       
        //  Zombie
        /*
        {
            type: 'category',
            label: 'Zombie',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'servers/minecraft/zombie/information',
            },
            items: [
                'servers/minecraft/zombie/',
            ]
        }
        */
       
        //  Roleplay
        /*
        {
            type: 'category',
            label: 'Roleplay',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'servers/minecraft/roleplay/information',
            },
            items: [
                'servers/minecraft/roleplay/',
            ]
        }
        */
    ],

    // Unturned
    unturned: [
        {
            type: 'doc',
            id: 'servers/unturned/gettingStarted',
        },
    ],
    
    // Resources
    resources: [
        'resources/legal', 
        'resources/guidelines',
        'resources/apply'
    ]
};
