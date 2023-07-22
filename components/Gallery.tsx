import StoryItem from './StoryItem'

type Props = {
	data: Story[]
}
const Gallery = ({ data }: Props) => {
	return (
		<section>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				{data.map((item) => (
					<li key={item.id}>
						<StoryItem {...item} />
					</li>
				))}
			</ul>
		</section>
	)
}
export default Gallery
