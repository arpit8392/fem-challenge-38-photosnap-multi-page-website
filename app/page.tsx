import BetaMode from '@/components/BetaMode'
import Features from '@/components/Features'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import { features, stories } from '@/data'

export default function Home() {
	return (
		<div className='grid grid-cols-1'>
			<Hero />
			<Highlights />
			<Gallery data={stories.slice(0, 4)} />
			<Features data={features.slice(0, 3)} />
		</div>
	)
}
