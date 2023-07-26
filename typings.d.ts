type Highlight = {
	id: number
	title: string
	description: string
	image: string
	link: string
}

type Story = {
	id: number
	createdDate: string
	title: string
	author: string
	image: string
}

type Feature = {
	id: number
	heading: string
	description: string
	icon: any
}

interface Pricing {
	monthly: number
	annually: number
}

interface Frequency {
	value: 'monthly' | 'annually' // Assuming 'value' can only be 'monthly' or 'annually'
	label: string
	priceSuffix: string
}

interface PricingTiers {
	plan: string
	summary: string
	pricing: Pricing
	link: string
}
