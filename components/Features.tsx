import FeatureItem from './FeatureItem'

type Props = {
	data: Feature[]
}
const Features = ({ data }: Props) => {
	return (
		<section className='px-8 py-20 md:px-40 md:py-32'>
			<ul className='grid grid-cols-1 gap-14 md:gap-20 lg:grid-cols-3 lg:gap-8'>
				{data.map((item) => (
					<li key={item.id} className='lg:place-self-end'>
						<FeatureItem {...item} />
					</li>
				))}
			</ul>
		</section>
	)
}
export default Features
