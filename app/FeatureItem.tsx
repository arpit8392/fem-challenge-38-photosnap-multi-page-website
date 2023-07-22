import SecondaryButton from '@/components/SecondaryButton'
import clsx from 'clsx'
import Image from 'next/image'

const FeatureItem = ({ id, title, description, image, link }: Feature) => {
	return (
		<figure className='grid grid-cols-1 md:grid-cols-5'>
			<picture
				className={clsx(
					'md:col-span-2 lg:col-span-3',
					id % 2 === 0 ? 'md:order-last' : 'md:order-first'
				)}>
				<Image
					src={`/assets/home/mobile/${image}`}
					alt={title}
					width={375}
					height={271}
					className='block w-full object-cover object-center md:hidden'
				/>
				<Image
					src={`/assets/home/tablet/${image}`}
					alt={title}
					width={273}
					height={600}
					className='hidden h-full w-full object-cover object-center md:block lg:hidden'
				/>
				<Image
					src={`/assets/home/desktop/${image}`}
					alt={title}
					width={830}
					height={600}
					className='hidden h-full w-full object-cover object-center lg:block'
				/>
			</picture>
			<figcaption className='flex flex-col justify-center gap-6 px-8 py-18 md:col-span-3 md:gap-12 md:px-14 lg:col-span-2 lg:px-28'>
				<div className='flex flex-col gap-4 md:gap-5'>
					<h2 className='text-[32px]/10 font-bold uppercase tracking-[3.333px] md:text-[40px]/[48px] md:tracking-[4.167px]'>
						{title}
					</h2>
					<p className='text-[15px]/[25px] text-black/60'>{description}</p>
				</div>
				<SecondaryButton title='View the Stories' link={link} />
			</figcaption>
		</figure>
	)
}
export default FeatureItem
