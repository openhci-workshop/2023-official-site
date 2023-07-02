import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import classnames from 'classnames';
import { Noto_Sans_TC, Nunito_Sans, Aldrich } from 'next/font/google';

import NavBar from '@/components/organisms/NavBar';
import SectionTitle from '@/components/molecules/SectionTitle';
import BlockTitle from '@/components/molecules/BlockTitle';
import WorkPanel from '@/components/molecules/WorkPanel';

import logo from '../public/logo_hero.png';
import cube from '../public/open_cube.png';
import styles from './styles.module.scss';

import work1 from '../public/work/work1.png';
import work2 from '../public/work/work2.png';
import work3 from '../public/work/work3.png';
import work4 from '../public/work/work4.png';
import work5 from '../public/work/work5.png';
import work6 from '../public/work/work6.png';
import work7 from '../public/work/work7.png';

const works = [
	work1,
	work2,
	work3,
	work4,
	work5,
	work6,
	work7,
]

export const metadata = {
	openGraph: {
		title: 'OPENHCI 2023',
		description:
			'OPENHCI 2023',
		url: process.env.NEXT_PUBLIC_BASE_FETCH_URL,
		siteName: 'OPENHCI 2023',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/og.png`,
				width: 1200,
				height: 630,
			},
		],
		type: 'website',
	},
	title: 'OPENHCI 2023',
	description:
		'OPENHCI 2023 是一個專門推廣人機互動學門及促進垮領域合作的密集工作坊。',
	keywords: '',
};

const notoSansTC = Noto_Sans_TC({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

const nunitoSansTC = Nunito_Sans({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
});

const aldrich = Aldrich({
	weight: ['400'],
	subsets: ['latin'],
});

async function fetchContent() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/home`, {
		next: {
			revalidate: 60,
		},
	});

	const content = await response.json();
	return content;
}

function renderHTML(type, content, indentLevel, idx = Math.random()) {
	switch (type) {
		case 'ul':
			return (
				<ul key={`${type}-${idx}`} className="list-disc" style={{ marginLeft: indentLevel * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<li
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className={classnames(
									notoSansTC.className,
									'text-xs md:text-lg text-white leading-looser font-normal'
								)}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</ul>
			);
		case 'ol':
			return (
				<ol key={`${type}-${idx}`} className="list-roman" style={{ marginLeft: indentLevel * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<li
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className={classnames(
									notoSansTC.className,
									'text-xs md:text-lg text-white leading-looser font-normal'
								)}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</ol>
			);
		case 'h2':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<h2
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className={classnames(
									notoSansTC.className,
									'text-lg md:text-2xl font-semibold leading-8 mb-1'
								)}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
		case 'h3':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<h3
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className={classnames(
									notoSansTC.className,
									'text-base md:text-3xl font-semibold leading-8 mb-5'
								)}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
		case 'h4':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<h4
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className={classnames(
									notoSansTC.className,
									styles.h4,
									'text-xs md:text-lg text-white leading-none font-black mb-8'
								)}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
		case 'h5':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<h5
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className={classnames(
									notoSansTC.className,
									'text-xs md:text-sm text-white font-normal'
								)}
								style={{ lineHeight: '2 !important' }}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
    case 'bold':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<p
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className="text-xs md:text-lg text-white leading-looser font-bold"
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
		case 'row':
			return (
				<div
					key={`${type}-${idx}`}
					className="flex flex-col md:flex-row md:justify-start md:gap-8 lg:gap-12 xl:gap-16"
					style={{ marginLeft: (indentLevel - 1) * 24 }}
				>
					{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
				</div>
			);
		case 'col':
			return (
				<div
					key={`${type}-${idx}`}
					className="flex flex-col algin-start"
					style={{ marginLeft: (indentLevel - 1) * 24 }}
				>
					{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
				</div>
			);
    case 'grid':
      return (
        <div
          key={`${type}-${idx}`}
          className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5 mb-1 last:mb-0"
          style={{ marginLeft: (indentLevel - 1) * 24 }}
        >
          {content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
        </div>
      );
    case 'name':
      return (
        <div
          key={`${type}-${idx}`}
          className="flex flex-row lg:flex-col gap-2 items-start"
          style={{ marginLeft: (indentLevel - 1) * 24 }}
        >
          {content?.map(_content => 
            typeof _content === 'string' ? (
							<p
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className="text-xs md:text-lg text-white leading-looser font-normal"
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
          )}
        </div>
      );
		case 'date':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<h2
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className={classnames(
									aldrich.className,
									'text-white font-normal text-base md:text-2xl lg:text-3xl mb-4'
								)}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
		case 'p':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<p
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className="text-xs md:text-lg text-white leading-looser font-normal"
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
		case 'button':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: indentLevel * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<button
								key={_content}
								type="button"
								dangerouslySetInnerHTML={{ __html: _content }}
								className="text-lg text-dark-gray bg-dark-yellow rounded-full leading-normal px-5 py-3"
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
		case 'timeline':
			return (
				<div className="pl-0 md:pl-0 py-0 md:py-16" key={`${type}-${idx}`}>
					<div className={classnames(
						styles.timeline,
						"flex w-full flex-col md:flex-row justify-center md:justify-between")
					}>
						<div className={classnames(styles.timelineMobile, "text-transparent md:hidden")}>.</div>
						{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
					</div>
				</div>
			);
		case 'timeline-item':
		return (
			<div className="flex flex-row-reverse md:flex-col md:space-y-4 items-center md:items-center justify-end md:justify-center py-4 md:py-0" key={`${type}-${idx}`}>
				{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
			</div>
		);
		case 'timeline-dot':
			return (
				<div className={classnames(styles.timelineDot, "mx-4 md:mx-0 text-transparent text-xs")} key={`${type}-${idx}`}>.</div>
			)
		case 'timeline-date':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24, width: "102px"}}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<h2
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className={classnames(
									aldrich.className,
									'text-lg md:text-2xl font-semibold'
								)}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			)
		default:
			return null;
	}
}

const HomePage = async () => {
	const content = await fetchContent();

	return (
		<>
			<NavBar />

			<div
				className={classnames(
						styles.heroBackdrop,
						"flex flex-col items-start py-6 md:py-12"
					)}
			>
				<div className={classnames("container w-screen mx-auto px-6 md:px-8")}>
					<Image src={logo} alt="logo" className={classnames(styles.logo, "h-auto w-full md:w-1/2 lg:w-3/7 mt-4 mb-8")} />
					<div className={
						classnames(
							"flex flex-row space-x-4 md:space-x-8 mb-8 items-start"
						)
					}>
						<Link href="https://forms.gle/ckxGwYdGASKPyw1s9" target="_blank">
							<Button className="z-0" variant="normal">
								立即報名
							</Button>
						</Link>
					</div>
				</div>
			</div>

			<Image src={cube} alt="cube" className={classnames(styles.cube, "h-auto w-1/2 md:w-1/3")} />

			<div className="container mx-auto px-6 md:px-8 py-8 md:py-24 lg:py-36">

				{/* 工作坊介紹 */}
				<section className="mb-14 md:mb-28" id="工作坊介紹">
					<SectionTitle titleZh="工作坊介紹" titleEn="" />
					{content?.slice(0, 4).map(({ title_zh, title_en, blocks }) => (
						<div
							key={title_zh+title_en}
							className={classnames(
								styles.blockBackdrop,
								'relative w-100 flex flex-col p-8 sm:px-12 sm:py-16 lg:px-20 lg:py-24 mb-8 md:mb-16 gap-4 md:gap-12'
							)}
						>
							<BlockTitle titleZh={title_zh} titleEn={title_en} />
							<div className="flex flex-col gap-8 md:gap-24">
								{blocks?.map(({ type, content, level }, idx) => renderHTML(type, content, level, idx))}
							</div>
						</div>
					))}
				</section>

				{/* 活動資訊 */}
				<section className="mb-14 md:mb-28" id="活動資訊">
					<SectionTitle titleZh="活動資訊" titleEn="" />
					{content?.slice(4, 6).map(({ title_zh, title_en, blocks }) => (
						<div
							key={title_zh+title_en}
							className={classnames(
								styles.blockBackdrop,
								'relative w-100 flex flex-col p-8 sm:px-12 sm:py-16 lg:px-20 lg:py-24 mb-8 md:mb-16 gap-4 md:gap-12'
							)}
						>
							<BlockTitle titleZh={title_zh} titleEn={title_en} />
							<div className="flex flex-col gap-8 mt-4 md:mt-12">
								{
									blocks?.map(({ type, content, level }, idx) => renderHTML(type, content, level, idx))
								}
							</div>
						</div>
					))}
				</section>

				{/* FAQ */}
				<section className="mb-14 md:mb-28" id="FAQ">
					<SectionTitle titleZh="" titleEn="FAQ" />
					{content?.slice(6, 8).map(({ title_zh, title_en, blocks }) => (
						<div
							key={title_zh+title_en}
							className={classnames(
								styles.blockBackdrop,
								'relative w-100 flex flex-col p-8 sm:px-12 sm:py-16 lg:px-20 lg:py-24 mb-8 md:mb-16 gap-4 md:gap-12'
							)}
						>
							<BlockTitle titleZh={title_zh} titleEn={title_en} />
							<div className="flex flex-col gap-8 mt-4 md:mt-12">
								{blocks?.map(({ type, content, level }, idx) => renderHTML(type, content, level, idx))}
							</div>
						</div>
					))}
				</section>

				{/* 歷屆作品 */}
				<section className="mb-14 md:mb-28" id="歷屆作品">
					<SectionTitle titleZh="歷屆作品" titleEn="" />
					{content?.slice(8,9).map(({ title_zh, title_en, blocks }) => (
						<div key={title_zh + title_en}>
							{blocks?.map(({title, url, description}, idx) => (
								<WorkPanel title={title} image={works[idx]} url={url} description={description} key={`${title}`} />
							))}
						</div>
					))}
				</section >

				{/* 組織成員 */}
				<section className="mb-14 md:mb-28" id="組織成員">
				<SectionTitle titleZh="組織成員" titleEn="" />
          {content?.slice(9,10).map(({ title_zh, title_en, blocks }) => (
						<div
							key={title_zh + title_en}
							className={classnames(
								styles.blockBackdrop,
								'relative w-100 flex flex-col p-8 sm:px-12 sm:py-16 lg:px-20 lg:py-24 mb-8 md:mb-16 gap-4 md:gap-12'
							)}
						>
							<BlockTitle titleZh={title_zh} titleEn={title_en} />
							<div className="flex flex-col gap-8 mt-4 md:mt-12">
								{blocks?.map(({ type, content, level }, idx) => renderHTML(type, content, level, idx))}
							</div>
						</div>
					))}
				</section>

				{/* footer */}
				<div className={classnames(styles.footer, "flex flex-col lg:flex-row items-center space-y-4 md:space-y-0 md:justify-between")}>
					<div className="text-xs md:text-base z-10">
						COPYRIGHT © 2023 OpenHCI
					</div>
					<div className="text-xs md:text-base text-center leading-6 z-10">
						/ <span><a href="https://www.2022.openhci.com">2022</a></span>{' '}
						/ <span><a href="https://www.2021.openhci.com">2021</a></span>{' '}
						/ <span><a href="https://www.2019.openhci.com">2019</a></span>{' '}
						/ <span><a href="https://www.2018.openhci.com">2018</a></span>{' '}
						/ <span><a href="https://www.2017.openhci.com">2017</a></span>{' '}
						/ <span><a href="https://www.2016.openhci.com">2016</a></span>{' '}
						/ <span><a href="https://www.2015.openhci.com">2015</a></span>{' '}
						/ <span><a href="https://www.2014.openhci.com">2014</a></span>{' '}
						/ <span><a href="https://www.2013.openhci.com">2013</a></span>{' '}
						/ <span><a href="https://www.2012.openhci.com">2012</a></span>{' '}
						/ <span><a href="https://www.2011.openhci.com">2011</a></span>{' '}
						/ <span><a href="https://www.2009.openhci.com">2009</a></span>{' '}
						/
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
