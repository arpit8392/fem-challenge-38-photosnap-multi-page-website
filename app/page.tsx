import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import { features } from '@/data'

export default function Home() {
	return (
		<div className='grid grid-cols-1'>
			<Hero />
			<Highlights />
			
			<Features data={features.slice(0, 3)} />
		</div>
	)
}
