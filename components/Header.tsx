'use client'

import Logo from '@/public/assets/shared/desktop/logo.svg'
import MenuIcon from '@/public/assets/shared/mobile/menu.svg'
import CloseIcon from '@/public/assets/shared/mobile/close.svg'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/data'
import { Dialog } from '@headlessui/react'
import PrimaryButton from './PrimaryButton'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='relative px-6 py-7 md:px-10 lg:px-40'>
			<nav className='flex items-center justify-between'>
				<Link href='/'>
					<Image src={Logo} alt='Photosnap' className='w-auto object-contain' />
				</Link>
				<button
					className='block md:hidden'
					onClick={() => setIsOpen((prev) => !prev)}>
					<Image
						src={isOpen ? CloseIcon : MenuIcon}
						alt={isOpen ? 'Close Icon' : 'Menu Icon'}
						className='w-auto object-contain'
					/>
					<span className='sr-only'>
						{isOpen ? 'Close Mobile Menu' : 'Open Mobile Menu'}
					</span>
				</button>
				<ul className='hidden items-center gap-9 md:flex'>
					{navLinks.map((navLink, index) => (
						<li key={index}>
							<Link
								href={navLink.href}
								className='text-xs font-bold uppercase tracking-[2px] text-black hover:text-black/30'>
								{navLink.title}
							</Link>
						</li>
					))}
				</ul>
				<Link
					href={'#'}
					className='hidden bg-black px-6 py-3 text-xs font-bold uppercase tracking-[2px] text-white hover:bg-lightGrey hover:text-black md:block'>
					Get an Invite
				</Link>
			</nav>
			<Dialog
				as='div'
				className='md:hidden'
				open={isOpen}
				onClose={() => setIsOpen(false)}>
				<div className='fixed inset-0 bg-black/50' aria-hidden='true' />
				<Dialog.Panel className='absolute top-20 z-50 flex w-full flex-col gap-5 overflow-hidden bg-white p-10 text-black'>
					<ul className='flex flex-col items-center gap-5'>
						{navLinks.map((item, index) => (
							<li key={index}>
								<Link
									className='text-[15px] font-bold uppercase tracking-[2.5px] text-black hover:text-black/30'
									href={item.href}>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
					<hr className='border-black/25' />
					<PrimaryButton title='Get an invite' link='#' isDark />
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
export default Header
