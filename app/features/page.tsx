import BetaMode from '@/components/BetaMode'
import FeatureItem from '@/components/FeatureItem'
import Hero from '@/components/Hero'
import { features } from '@/data'

const FeaturesPage = () => {
	return (
		<>
			<Hero
				title='Features'
				description='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
				imagePath='features'
				imageName='hero.jpg'
			/>
			<section className='px-8 py-16 md:px-10 md:py-28 lg:p-40'>
				<ul className='grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-4 md:gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24'>
					{features.map((item) => (
						<li key={item.id} className='md:place-self-end'>
							<FeatureItem {...item} />
						</li>
					))}
				</ul>
			</section>
			<BetaMode />
		</>
	)
}
export default FeaturesPage
