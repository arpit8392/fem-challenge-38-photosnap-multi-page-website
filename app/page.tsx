import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'

export default function Home() {
	return (
		<div className='grid grid-cols-1'>
			<Hero />
			<Highlights />
		</div>
	)
}
