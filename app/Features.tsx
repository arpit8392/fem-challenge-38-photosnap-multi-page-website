import { features } from '@/data'
import FeatureItem from './FeatureItem'

const Features = () => {
	return (
		<section>
			<ul className='grid grid-cols-1'>
				{features.map((item, index) => (
					<li key={index}>
						<FeatureItem {...item} />
					</li>
				))}
			</ul>
		</section>
	)
}
export default Features
