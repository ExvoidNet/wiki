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

        // Modes
        {
            type: 'category',
            label: 'Modes',
            collapsed: true,
            items: [
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
                },
                
                // Creative
                /*
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
                },
                */
                
                // Arenae
                /*
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
                },
                */
                
                // Arcade
                /*
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
                },
                */
                
                // Zombie
                /*
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
                },
                */
                
                // Roleplay
                /*
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
                },*/
            ]
        },
        
        // Resources
        {
            type: 'category',
            label: 'Resources',
            collapsed: true,
            items: [
                'resources/legal'
            ]
        }
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
