import BetaMode from '@/components/BetaMode'
import FeatureItem from '@/components/FeatureItem'
import Features from '@/components/Features'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import { features, stories } from '@/data'

export default function Home() {
	return (
		<>
			<Hero
				title='Create and share your photo stories.'
				description='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
				embedCTALink
				imageName='create-and-share.jpg'
				imagePath='home'
			/>
			<Highlights />
			<Gallery data={stories.slice(0, 4)} />
			<section className='px-8 py-20 md:px-40 md:py-32'>
				<ul className='grid grid-cols-1 gap-14 md:gap-20 lg:grid-cols-3 lg:gap-8'>
					{features.slice(0, 3).map((item) => (
						<li key={item.id} className='lg:place-self-end'>
							<FeatureItem {...item} />
						</li>
					))}
				</ul>
			</section>
		</>
	)
}
