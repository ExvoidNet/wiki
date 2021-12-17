// @ts-check
const sidebars = {
	servers: [
		'servers/getting_started',
		{
		  type: 'category',
		  label: 'Minecraft',
		  collapsed: false,
		  collapsible: true,
		  items: [
			  {
				type: 'category',
				label: 'Hub',
				items: [
					{
						type: 'autogenerated',
						dirName: 'servers/minecraft/hub',
					}
				]
			  },
			  {
				type: 'category',
				label: 'Survival',
				items: [
					{
						type: 'autogenerated',
						dirName: 'servers/minecraft/survival',
					}
				]
			  },
			  {
				type: 'category',
				label: 'Creative',
				items: [
					{
						type: 'autogenerated',
						dirName: 'servers/minecraft/creative',
					}
				]
			  },
			  {
				type: 'category',
				label: 'Arena',
				items: [
					{
						type: 'autogenerated',
						dirName: 'servers/minecraft/arena',
					}
				]
			  },
			  {
				type: 'category',
				label: 'Arcade',
				items: [
					{
						type: 'autogenerated',
						dirName: 'servers/minecraft/arcade',
					}
				]
			  },
			  {
				type: 'category',
				label: 'Remission',
				items: [
					{
						type: 'autogenerated',
						dirName: 'servers/minecraft/remission',
					}
				]
			  },
			  {
				type: 'category',
				label: 'Zombie',
				items: [
					{
						type: 'autogenerated',
						dirName: 'servers/minecraft/zombie',
					}
				]
			  },
			  {
				type: 'category',
				label: 'Roleplay',
				items: [
					{
						type: 'autogenerated',
						dirName: 'servers/minecraft/roleplay',
					}
				]
			  },
		   ],	
		},
	],

	exvoidnet: [
		'about',
		'staff',
		'feedback',
		'donate',
//		'apply',
	],

	support: [
		'support/troubleshooting',
		'support/guidelines',
		'support/legal',
	],

};
  module.exports = sidebars;