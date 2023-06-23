import { Noto_Sans_TC } from 'next/font/google';
import Script from 'next/script'

import './globals.css';

const notoSansTC = Noto_Sans_TC({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'OPENHCI 2023',
	description:
		'OPENHCI 2023 是一個專門推廣人機互動學門及促進垮領域合作的密集工作坊。',
	keywords: '',
	openGraph: {
		title: 'OPENHCI 2023',
		description:
			'OPENHCI 2023',
		url: process.env.NEXT_PUBLIC_BASE_FETCH_URL,
		siteName: 'OPENHCI 2023 是一個專門推廣人機互動學門及促進垮領域合作的密集工作坊。',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/og.png`,
				width: 1200,
				height: 630,
			},
		],
		type: 'website',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={notoSansTC.className} suppressHydrationWarning>

				{/* <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} id="gasrc"/>
				<Script strategy="lazyOnload" id="gacode">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
						`}
				</Script> */}
				
				<main className="pt-16 md:pt-20 overflow-hidden">{children}</main>
			</body>
		</html>
	);
}
