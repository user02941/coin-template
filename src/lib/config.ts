export const site = {
	name: 'SLEEPCAT',
	ticker: '$SLEEPCAT',
	tagline: 'The cat that slept through the crash and woke up rich',
	description:
		'SleepCat never watches the charts. He never panic sells. He closes his eyes, ignores the red candles, and wakes up to green ones. Now the trenches want in on the nap.',

	// Contract Address - IMPORTANT
	contractAddress: '',

	logo: '/hero.webp',
	heroImage: '/hero.webp',

	buyUrl: 'https://pump.fun',
	buyLabel: 'Buy $SLEEPCAT',

	nav: [
		{ label: 'Home', href: '#home' },
		{ label: 'The Legend', href: '#lore' },
		{ label: 'How to Buy', href: '#how-to-buy' },
		{ label: 'Roadmap', href: '#roadmap' }
	],

	socials: [
		{ label: 'X / Twitter', href: 'https://x.com' },
	],

	stats: [
		{ label: 'Chain', value: 'Solana' },
		{ label: 'Supply', value: '1B' },
		{ label: 'Tax', value: '0%' }
	],

	lore: {
		heading: 'Who is SleepCat?',
		paragraphs: [
			'Nobody remembers when SleepCat first appeared in the trenches. Some say he was curled up on a wallet since genesis. What everyone agrees on: he has never once opened his eyes for a dip, and he has never missed a pump.',
			'While the trenches burned through sleepless nights staring at candles, SleepCat stayed curled up, tail over nose, completely unbothered. Degens who copied his position and did nothing else outperformed the ones who watched every tick.',
			'SleepCat\'s mission is simple: prove that conviction beats panic, and that the best trade is sometimes the nap. Stack $SLEEPCAT, close the laptop, and let the cat do what the cat does.'
		]
	},

	buyGuide: {
		heading: 'How to Buy $SLEEPCAT',
		steps: [
			{ number: '1', text: 'Buy <strong>SOL</strong> on any exchange (Binance, Coinbase, Kraken).' },
			{ number: '2', text: 'Send SOL to your <strong>Phantom</strong> or <strong>Solflare</strong> wallet.' },
			{ number: '3', text: 'Go to <strong>Pump.fun</strong>, paste the contract address, and swap.' }
		],
		disclaimer: 'No stress. SleepCat already bought.'
	},

	roadmap: {
		heading: 'The SleepCat Roadmap',
		phases: [
			{ 
				phase: 'Phase 1', 
				name: 'Sleep', 
				description: 'Launch. Curl up. Ignore the chart.' 
			},
			{ 
				phase: 'Phase 2', 
				name: 'Wake Up', 
				description: 'Open one eye. See what the world did.' 
			},
			{ 
				phase: 'Phase 3', 
				name: 'Profit', 
				description: 'Stretch. Yawn. Buy a second cat bed.' 
			}
		]
	},

	disclaimer:
		'$SLEEPCAT is a memecoin with no intrinsic value or expectation of financial return. Not financial advice. Do your own research.'
};