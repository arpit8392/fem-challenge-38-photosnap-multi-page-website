import SecondaryButton from '@/components/SecondaryButton'
import Image from 'next/image'

type Props = {
	title: string
	description: string
	imageName: string
	imagePath: string
	embedCTALink?: boolean
}

const Hero = ({
	title,
	description,
	imageName,
	imagePath,
	embedCTALink,
}: Props) => {
	return (
		<section>
			<figure className='grid grid-cols-1 md:grid-cols-5'>
				<picture className='md:order-last md:col-span-2 lg:col-span-3'>
					<Image
						src={`/assets/${imagePath}/mobile/${imageName}`}
						alt={`${title} picture`}
						priority
						width={375}
						height={294}
						className='block w-full object-cover object-center md:hidden'
					/>
					<Image
						src={`/assets/${imagePath}/tablet/${imageName}`}
						alt={`${title} picture`}
						priority
						width={375}
						height={294}
						className='hidden w-full object-cover object-center md:block lg:hidden'
					/>
					<Image
						src={`/assets/${imagePath}/desktop/${imageName}`}
						alt={`${title} picture`}
						priority
						width={273}
						height={650}
						className='hidden h-full w-full object-cover object-center lg:block'
					/>
				</picture>
				<figcaption className='flex flex-col bg-black px-8 py-18 md:col-span-3 md:justify-center md:px-14 lg:col-span-2 lg:px-28'>
					<div className='relative flex flex-col gap-6 text-white md:gap-12'>
						<div className='absolute -top-[72px] h-[6px] w-[128px] bg-accent-gradient md:-left-14 md:top-0 md:h-full md:w-[6px] lg:-left-28' />
						<div className='flex flex-col gap-4 md:gap-5'>
							<h1 className='text-[32px]/10 font-bold uppercase tracking-[3.33px] md:text-[40px]/[48px] md:tracking-[4.167px]'>
								{title}
							</h1>
							<p className='text-[15px]/[25px] text-white/60'>{description}</p>
						</div>
						{embedCTALink && (
							<SecondaryButton title='Get an Invite' link='#' isDark />
						)}
					</div>
				</figcaption>
			</figure>
		</section>
	)
}
export default Hero
