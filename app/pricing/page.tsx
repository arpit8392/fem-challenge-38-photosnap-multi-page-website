import BetaMode from '@/components/BetaMode'
import Hero from '@/components/Hero'
import PlanCTA from '@/components/PlanCTA'
import PricingComparison from '@/components/PricingComparison'

const PricingPage = () => {
	return (
		<>
			<Hero
				title='Pricing'
				description='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
				imagePath='pricing'
				imageName='hero.jpg'
			/>
			<PlanCTA />
			<PricingComparison />
			<BetaMode />
		</>
	)
}
export default PricingPage
