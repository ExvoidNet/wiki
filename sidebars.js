// @ts-check
const sidebars = {
	exvoidnet: [
		'about',
		'staff',
		'guidelines',
		'legal',
		'donate',
		'feedback',
		'apply',
	],

	servers: [
		'servers/getting_started',
		{
		  type: 'category',
		  label: 'Serveurs',
		  collapsed: false,
		  collapsible: true,
		  items: [
			  {
				  Minecraft: [
					  {
						  Modes: [
							  'servers/minecraft/subservers/hub',
							  'servers/minecraft/subservers/survival',
							  'servers/minecraft/subservers/creative',
							  'servers/minecraft/subservers/arena',
							  'servers/minecraft/subservers/minigames',
							  'servers/minecraft/subservers/remission',
							  'servers/minecraft/subservers/zombie',
							  'servers/minecraft/subservers/roleplay',
							],
						},
					],
				},  
			],
		},
	],

	support: [
		'support/troubleshooting',
	],

};
  module.exports = sidebars;

  