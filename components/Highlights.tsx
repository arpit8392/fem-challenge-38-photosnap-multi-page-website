import { highlights } from '@/data'
import HighlightItem from './HighlightItem'

const Highlights = () => {
	return (
		<section>
			<ul className='grid grid-cols-1'>
				{highlights.map((item, index) => (
					<li key={index}>
						<HighlightItem {...item} />
					</li>
				))}
			</ul>
		</section>
	)
}
export default Highlights
