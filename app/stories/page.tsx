import Gallery from '@/components/Gallery'
import SecondaryButton from '@/components/SecondaryButton'
import { stories } from '@/data'
import Image from 'next/image'

const StoriesPage = () => {
	return (
		<>
			<section className='flex flex-col'>
				<picture className='relative h-[317px] w-full md:h-[650px]'>
					<Image
						src={`/assets/stories/mobile/moon-of-appalacia.jpg`}
						alt={`Featured picture`}
						priority
						fill
						className='block md:hidden'
					/>
					<Image
						src={`/assets/stories/tablet/moon-of-appalacia.jpg`}
						alt={`Featured picture`}
						priority
						fill
						className='hidden md:block lg:hidden'
					/>
					<Image
						src={`/assets/stories/desktop/moon-of-appalacia.jpg`}
						alt={`Featured picture`}
						priority
						fill
						className='hidden lg:block'
					/>
				</picture>
				<article className='md:absolute'>
					<div className='flex flex-col gap-6 bg-black px-7 py-12 text-white md:bg-inherit md:px-10 md:py-28 lg:px-28'>
						<div className='flex flex-col gap-4'>
							<p className='text-xs font-bold uppercase tracking-[2px]'>
								Last Month’s Featured Story
							</p>
							<h1 className='text-[32px]/10 font-bold uppercase tracking-[3.333px] md:max-w-xs md:pt-2 md:text-[40px]/[48px] md:tracking-[4.167px]'>
								Hazy Full Moon of Appalachia
							</h1>
							<p className='flex items-center gap-2 text-[13px] text-white/75'>
								March 2nd 2020
								<span className='text-white'>by John Appleseed</span>
							</p>
						</div>
						<p className='text-[15px]/[25px] text-white/60 md:max-w-sm'>
							The dissected plateau area, while not actually made up of
							geological mountains, is popularly called &quot;mountains,&quot;
							especially in eastern Kentucky and West Virginia, and while the
							ridges are not high, the terrain is extremely rugged.
						</p>
						<SecondaryButton title='Read the Story' link='#' isDark />
					</div>
				</article>
			</section>
			<Gallery data={stories} publishDate />
		</>
	)
}
export default StoriesPage
