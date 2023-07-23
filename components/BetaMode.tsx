import Image from 'next/image'
import SecondaryButton from './SecondaryButton'

const BetaMode = () => {
	return (
		<section className='relative h-[288px] w-full md:h-[280px]'>
			<Image
				src={'/assets/shared/mobile/bg-beta.jpg'}
				alt='Beta Mode'
				fill
				className='block md:hidden'
			/>
			<Image
				src={'/assets/shared/tablet/bg-beta.jpg'}
				alt='Beta Mode'
				fill
				className='hidden md:block lg:hidden'
			/>
			<Image
				src={'/assets/shared/desktop/bg-beta.jpg'}
				alt='Beta Mode'
				fill
				className='hidden lg:block'
			/>
			<div className='absolute left-8 top-0 h-[6px] w-[128px] bg-accent-gradient md:left-0 md:h-full md:w-[6px]' />
			<div className='absolute z-50 w-full px-8 py-16 md:px-10 lg:px-40'>
				<div className='flex flex-col gap-6 text-white md:flex-row md:items-center md:justify-between'>
					<p className='text-[32px]/10 font-bold uppercase tracking-[3.333px] md:max-w-md md:text-[40px]/[48px] md:tracking-[4.167px]'>
						We’re in beta.
						<br /> Get your invite today!
					</p>
					<SecondaryButton title='Get an Invite' isDark link='#' />
				</div>
			</div>
		</section>
	)
}
export default BetaMode
