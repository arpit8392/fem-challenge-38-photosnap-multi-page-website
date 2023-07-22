import clsx from 'clsx'
import Link from 'next/link'

type Props = {
	title: string
	link: string
	isDark?: boolean
}
const PrimaryButton = ({ title, link, isDark }: Props) => {
	return (
		<Link
			href={link}
			className={clsx(
				'py-4 text-center text-[15px] font-bold uppercase tracking-[2.5px] hover:bg-lightGrey hover:text-black',
				isDark ? 'bg-black text-white ' : 'bg-white text-black'
			)}>
			{title}
		</Link>
	)
}
export default PrimaryButton
