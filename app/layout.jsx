import { Noto_Sans_TC } from 'next/font/google';

import NavBar from '@/components/organisms/NavBar';

import './globals.css';

const notoSansTC = Noto_Sans_TC({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'OPENHCI 2023',
	description: 'OPENHCI 2023 Home Page',
	keywords: '',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={notoSansTC.className} suppressHydrationWarning>
				<NavBar />
				<main className="pt-16 md:pt-20 overflow-hidden">{children}</main>
			</body>
		</html>
	);
}
