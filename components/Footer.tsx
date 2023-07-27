import Logo from '@/public/assets/shared/desktop/logo-light.svg'
import Image from 'next/image'
import SecondaryButton from './SecondaryButton'
import { navLinks } from '@/data'
import Link from 'next/link'
import SocialLinks from './SocialLinks'

// TODO: Hover colors on all the footer links (SVGs) are same color - first one which is not as per the design

const Footer = () => {
	return (
		<footer className='flex flex-col items-center gap-32 bg-black px-8 py-14 text-white md:flex-row md:items-baseline md:justify-between md:px-10 md:py-16 lg:px-44'>
			<div className='flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-12 lg:gap-28'>
				<div className='flex flex-col items-center gap-8 md:items-start md:gap-16 lg:gap-28'>
					<div className='flex flex-col gap-8'>
						<Image src={Logo} alt='' className='' />
						<ul className='hidden items-center gap-7 md:flex lg:hidden'>
							<li>
								<Link
									href={'/'}
									className='text-xs font-bold uppercase tracking-[2px] text-white hover:text-white/30'>
									Home
								</Link>
							</li>
							{navLinks.map((item, index) => (
								<li key={index}>
									<Link
										href={item.href}
										className='text-xs font-bold uppercase tracking-[2px] text-white hover:text-white/30'>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<SocialLinks />
				</div>
				<ul className='flex flex-col items-center gap-5 md:hidden md:items-start lg:flex'>
					<li>
						<Link
							href={'/'}
							className='text-xs font-bold uppercase tracking-[2px] text-white hover:text-white/30'>
							Home
						</Link>
					</li>
					{navLinks.map((item, index) => (
						<li key={index}>
							<Link
								href={item.href}
								className='text-xs font-bold uppercase tracking-[2px] text-white hover:text-white/30'>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col items-center gap-9 md:items-start md:gap-28'>
				<div className='md:self-end'>
					<SecondaryButton title='Get an Invite' link='#' isDark />
				</div>
				<p className='text-[15px] text-white/50'>
					Copyright 2019. All Rights Reserved
				</p>
			</div>
		</footer>
	)
}
export default Footer
