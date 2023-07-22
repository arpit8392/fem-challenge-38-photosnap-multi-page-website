import Hero from '@/app/Hero'
import Features from './Features'

export default function Home() {
	return (
		<div className='grid grid-cols-1'>
			<Hero />
			<Features />
		</div>
	)
}
