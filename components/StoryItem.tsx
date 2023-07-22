import Image from 'next/image'
import Link from 'next/link'

const StoryItem = ({ id, createdDate, title, author, image }: Story) => {
	return (
		<article>
			<div className='relative h-[375px] w-full md:h-[500px]'>
				<Image
					src={`/assets/stories/mobile/${image}`}
					alt={title}
					fill
					className='absolute md:hidden'
				/>
				<Image
					src={`/assets/stories/desktop/${image}`}
					alt={title}
					fill
					className='absolute hidden md:block'
				/>
				<div className='absolute bottom-0 flex w-full flex-col gap-4 bg-dark-overlay px-8 py-10 text-white md:px-11 lg:p-10'>
					<div className='flex flex-col gap-1'>
						<h3 className='text-lg font-bold'>{title}</h3>
						<p className='text-[13px]'>{`by ${author}`}</p>
					</div>
					<hr className='border-white/25' />
					<Link
						href={'#'}
						className='flex items-center justify-between pt-1 text-xs font-bold uppercase tracking-[2px] hover:underline hover:underline-offset-2'>
						Read Story
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='43'
								height='14'
								className='stroke-white'>
								<g fill='none' fillRule='evenodd'>
									<path d='M0 7h41.864M35.428 1l6 6-6 6' />
								</g>
							</svg>
						</span>
					</Link>
				</div>
			</div>
		</article>
	)
}

export default StoryItem
