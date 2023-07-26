import ResponsiveIcon from '@/public/assets/features/desktop/responsive.svg'
import BoostExposureIcon from '@/public/assets/features/desktop/boost-exposure.svg'
import CustomDomainIcon from '@/public/assets/features/desktop/custom-domain.svg'
import DragDropIcon from '@/public/assets/features/desktop/drag-drop.svg'
import EmbedIcon from '@/public/assets/features/desktop/embed.svg'
import NoLimitIcon from '@/public/assets/features/desktop/no-limit.svg'

export const navLinks = [
	{
		title: 'stories',
		href: '/stories',
	},
	{
		title: 'features',
		href: '/features',
	},
	{
		title: 'pricing',
		href: '/pricing',
	},
]

export const highlights: Highlight[] = [
	{
		id: 1,
		title: 'Beautiful stories every time',
		description:
			'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
		image: 'beautiful-stories.jpg',
		link: '#',
	},
	{
		id: 2,
		title: 'Designed for everyone',
		description:
			'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
		image: 'designed-for-everyone.jpg',
		link: '#',
	},
]

export const stories: Story[] = [
	{
		id: 1,
		createdDate: 'April 16th 2020',
		title: 'The Mountains',
		author: 'John Appleseed',
		image: 'mountains.jpg',
	},
	{
		id: 2,
		createdDate: 'April 14th 2020',
		title: 'Sunset Cityscapes',
		author: 'Benjamin Cruz',
		image: 'cityscapes.jpg',
	},
	{
		id: 3,
		createdDate: 'April 11th 2020',
		title: '18 Days Voyage',
		author: 'Alexei Borodin',
		image: '18-days-voyage.jpg',
	},
	{
		id: 4,
		createdDate: 'April 9th 2020',
		title: 'Architecturals',
		author: 'Samantha Brooke',
		image: 'architecturals.jpg',
	},
	{
		id: 5,
		createdDate: 'April 7th 2020',
		title: 'World Tour 2019',
		author: 'Timothy Wagner',
		image: 'world-tour.jpg',
	},
	{
		id: 6,
		createdDate: 'April 3rd 2020',
		title: 'Unforeseen Corners',
		author: 'William Malcolm',
		image: 'unforeseen-corners.jpg',
	},
	{
		id: 7,
		createdDate: 'March 29th 2020',
		title: 'King on Africa: Part II',
		author: 'Tim Hillenburg',
		image: 'king-on-africa.jpg',
	},
	{
		id: 8,
		createdDate: 'March 21st 2020',
		title: 'The Trip to Nowhere',
		author: 'Felicia Rourke',
		image: 'trip-to-nowhere.jpg',
	},
	{
		id: 9,
		createdDate: 'March 19th 2020',
		title: 'Rage of The Sea',
		author: 'Mohammed Abdul',
		image: 'rage-of-the-sea.jpg',
	},
	{
		id: 10,
		createdDate: 'March 16th 2020',
		title: 'Running Free',
		author: 'Michelle',
		image: 'running-free.jpg',
	},
	{
		id: 11,
		createdDate: 'March 11th 2020',
		title: 'Behind the Waves',
		author: 'Lamarr Wilson',
		image: 'behind-the-waves.jpg',
	},
	{
		id: 12,
		createdDate: 'March 9th 2020',
		title: 'Calm Waters',
		author: 'Samantha Brooke',
		image: 'calm-waters.jpg',
	},
	{
		id: 13,
		createdDate: 'March 5th 2020',
		title: 'The Milky Way',
		author: 'Benjamin Cruz',
		image: 'milky-way.jpg',
	},
	{
		id: 14,
		createdDate: 'March 4th 2020',
		title: 'Night at The Dark Forest',
		author: 'Mohammed Abdul',
		image: 'dark-forest.jpg',
	},
	{
		id: 15,
		createdDate: 'March 1st 2020',
		title: 'Somwarpet’s Beauty',
		author: 'Michelle',
		image: 'somwarpet.jpg',
	},
	{
		id: 16,
		createdDate: 'February 25th 2020',
		title: 'Land of Dreams',
		author: 'William Malcolm',
		image: 'land-of-dreams.jpg',
	},
]

export const features: Feature[] = [
	{
		id: 1,
		heading: '100% Responsive',
		description:
			'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
		icon: ResponsiveIcon,
	},
	{
		id: 2,
		heading: 'No Photo Upload Limit',
		description:
			'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
		icon: NoLimitIcon,
	},
	{
		id: 3,
		heading: 'Available to Embed',
		description:
			'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
		icon: EmbedIcon,
	},
	{
		id: 4,
		heading: 'Custom Domain',
		description:
			'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
		icon: CustomDomainIcon,
	},
	{
		id: 5,
		heading: 'Boost Your Exposure',
		description:
			'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
		icon: BoostExposureIcon,
	},
	{
		id: 6,
		heading: 'Drag & Drop Image',
		description:
			'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
		icon: DragDropIcon,
	},
]

export const frequencies = [
	{ value: 'monthly', label: 'Monthly', priceSuffix: 'per month' },
	{ value: 'annually', label: 'Annually', priceSuffix: 'per year' },
]

export const pricingTiers = [
	{
		plan: 'Basic',
		summary:
			'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
		pricing: {
			monthly: 19,
			annually: 190,
		},
		link: '#',
	},
	{
		plan: 'Pro',
		summary:
			'More advanced features available. Recommended for photography veterans and professionals.',
		pricing: {
			monthly: 39,
			annually: 390,
		},
		link: '#',
	},
	{
		plan: 'Business',
		summary:
			'Additional features available such as more detailed metrics. Recommended for business owners.',
		pricing: {
			monthly: 99,
			annually: 990,
		},
		link: '#',
	},
]

export const pricingPlanFeatures = [
	{
		feature: 'Unlimited Story Posting',
		tiers: {
			Basic: true,
			Pro: true,
			Business: true,
		},
	},
	{
		feature: 'Unlimited Photo Upload',
		tiers: {
			Basic: true,
			Pro: true,
			Business: true,
		},
	},
	{
		feature: 'Embedding Custom Content',
		tiers: {
			Basic: false,
			Pro: true,
			Business: true,
		},
	},
	{
		feature: 'Customize Metadata',
		tiers: {
			Basic: false,
			Pro: true,
			Business: true,
		},
	},
	{
		feature: 'Advanced Metrics',
		tiers: {
			Basic: false,
			Pro: false,
			Business: true,
		},
	},
	{
		feature: 'Photo Downloads',
		tiers: {
			Basic: false,
			Pro: false,
			Business: true,
		},
	},
	{
		feature: 'Search Engine Indexing',
		tiers: {
			Basic: false,
			Pro: false,
			Business: true,
		},
	},
	{
		feature: 'Custom Analytics',
		tiers: {
			Basic: false,
			Pro: false,
			Business: true,
		},
	},
]
