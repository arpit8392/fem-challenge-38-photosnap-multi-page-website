import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const dm_sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
	title: 'Photosnap Multipage Website',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${dm_sans.className} scroll-smooth antialiased bg-white`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
