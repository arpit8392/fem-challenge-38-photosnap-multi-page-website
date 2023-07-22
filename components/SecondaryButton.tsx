import clsx from 'clsx'
import Link from 'next/link'

type Props = {
	title: string
	link: string
	isDark?: boolean
}

const SecondaryButton = ({ title, link, isDark }: Props) => {
	return (
		<Link
			href={link}
			className={clsx(
				'flex items-center gap-4 text-xs font-bold uppercase tracking-[2px] hover:underline',
				isDark ? 'text-white' : 'text-black'
			)}>
			{title}
			<span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='43'
					height='14'
					className={clsx(isDark ? 'stroke-white' : 'stroke-black')}>
					<g fill='none' fill-rule='evenodd'>
						<path d='M0 7h41.864M35.428 1l6 6-6 6' />
					</g>
				</svg>
			</span>
		</Link>
	)
}
export default SecondaryButton
