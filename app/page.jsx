import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import classnames from 'classnames';
import { Noto_Sans_TC, Nunito_Sans, Aldrich } from 'next/font/google';

import NavBar from '@/components/organisms/NavBar';
import SectionTitle from '@/components/molecules/SectionTitle';
import BlockTitle from '@/components/molecules/BlockTitle';
import Works from '@/components/organisms/Works';
import Carousel from '@/components/organisms/Carousel';
import Select from '@/components/organisms/Select';

import logo from '../public/logo_hero.png';
import cube from '../public/open_cube.png';
import styles from './styles.module.scss';

import Threejs from './components/organisms/Motion';

const agendaItemsList = [
	{
		name: "前置 D1",
		id: "/ 前置工作坊 Day1 /"
	},
	{
		name: "前置 D2",
		id: "/ 前置工作坊 Day2 /"
	},
	{
		name: "正式 D1",
		id: "/ 正式工作坊 Day1 /"
	},
	{
		name: "正式 D2",
		id: "/ 正式工作坊 Day2 /"
	},
	{
		name: "正式 D3",
		id: "/ 正式工作坊 Day3 /"
	},
	{
		name: "正式 D4",
		id: "/ 正式工作坊 Day4 /"
	},
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
									'text-xs md:text-lg text-white leading-looser font-normal tracking-widest'
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
									'text-xs md:text-lg text-white leading-looser font-normal tracking-widest'
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
									'text-lg md:text-2xl font-semibold leading-8 mb-1 tracking-widest'
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
									'text-base md:text-3xl font-semibold leading-8 mb-5 tracking-widest'
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
									'text-xs md:text-lg text-white leading-none font-black mb-8 tracking-widest'
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
									'text-xs md:text-sm text-white font-normal tracking-widest'
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
								className="text-xs md:text-lg text-white leading-looser font-bold tracking-widest"
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
		case 'grid-center':
			return (
				<div
					key={`${type}-${idx}`}
					className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5 mb-1 last:mb-0 items-center"
					style={{ marginLeft: (indentLevel - 1) * 24 }}
				>
					{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
				</div>
			);
		case 'image':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<Image
								key={_content}
								src={"" + _content}
								alt={_content}
								width={150}
								height={150}
								className=""
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
		case 'image-platinum':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<Image
								key={_content}
								src={"" + _content}
								alt={_content}
								width={250}
								height={250}
								className=""
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			);
    case 'name':
      return (
        <div
          key={`${type}-${idx}`}
          className="flex flex-row md:flex-col gap-4 md:gap-0 items-center md:items-start mt-4"
          style={{ marginLeft: (indentLevel - 1) * 24 }}
        >
					<img src={"/staff/" + content[0].content[0] + ".jpg"} alt={content[0].content} className="w-20 sm:w-40 md:w-48 lg:w-64 rounded-xl md:rounded-3xl" />
					<div className='flex flex-col'>
          {content?.map(_content => 
            typeof _content === 'string' ? (
							<p
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className="text-xs md:text-lg text-white leading-looser font-normal tracking-widest"
							/>
						) : (
							<a key={_content} className={classnames(`${content[2] && "underline"}`)} href={content[2]?.content[0]} target="_blank" rel="noreferrer" style={content[2] && {cursor: "pointer"}}>
								{renderHTML(_content.type, _content.content, _content.level)}
							</a>
						)
					)}
					</div>
        </div>
      );
		case 'name-v':
			return (
				<div
					key={`${type}-${idx}`}
					className="flex flex-row md:flex-col gap-4 md:gap-0 items-center md:items-start mt-4"
					style={{ marginLeft: (indentLevel - 1) * 24 }}
				>
					<div className='flex flex-col'>
					{content?.map(_content => 
						typeof _content === 'string' ? (
							<p
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className="text-xs md:text-lg text-white leading-looser font-normal tracking-widest"
							/>
						) : (
							<a key={_content} className={classnames(`${content[2] && "underline"}`)} href={content[2]?.content[0]} target="_blank" rel="noreferrer" style={content[2] && {cursor: "pointer"}}>
								{renderHTML(_content.type, _content.content, _content.level)}
							</a>
						)
					)}
					</div>
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
									'text-white font-normal text-base md:text-2xl lg:text-3xl mb-4 tracking-widest'
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
								className="text-xs md:text-lg text-white leading-looser font-normal tracking-widest"
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
									'text-base md:text-2xl font-semibold tracking-widest'
								)}
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			)
		case 'agenda':
			return (
				<div key={`${type}-${idx}`} className='flex flex-col' style={{ marginLeft: (indentLevel - 1) * 24}}>
					<div className='flex flex-row justify-center w-full '>
						<Select items={agendaItemsList} />
					</div>
					<div id="agenda" className='flex flex-row gap-8 md:gap-16 overflow-x-scroll overflow-y-hidden'>
						{content?.map(_content =>
							typeof _content === 'string' ? (
								<div key={_content}>
									{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
								</div>
							) : (
								renderHTML(_content.type, _content.content, _content.level)
							)
						)}
					</div>
				</div>
			)
		case 'agenda-day':
			return (
				<div id={content[0].content[0]} key={`${type}-${idx}`} className='flex flex-col min-w-[240px] md:min-w-[480px] p-6 md:p-8 mb-2 rounded-xl md:rounded-3xl border-white border-[0.5px]' style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<div
								key={_content}
							>
								{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
							</div>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			)
		case 'agenda-day-title':
			return (
				<div key={`${type}-${idx}`} style={{ marginLeft: (indentLevel - 1) * 24}}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<p
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className="text-xs md:text-lg text-white leading-looser font-bold tracking-widest mb-2"
							/>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			)
		case 'agenda-day-col':
			return (
				<div key={`${type}-${idx}`} className='' style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<div
								key={_content}
								className='flex flex-row'
							>
								{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
							</div>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			)
		case 'agenda-day-items':
			return (
				<div key={`${type}-${idx}`} className='flex flex-row gap-2 sm:gap-4 md:gap-16' style={{ marginLeft: (indentLevel - 1) * 24}}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<div
								key={_content}
							>
								{content?.map(_content => renderHTML(_content.type, _content.content, _content.level))}
							</div>
						) : (
							renderHTML(_content.type, _content.content, _content.level)
						)
					)}
				</div>
			)
		case 'agenda-day-item':
			return (
				<div key={`${type}-${idx}`} className='min-w-[100px] md:min-w-[140px]' style={{ marginLeft: (indentLevel - 1) * 24 }}>
					{content?.map(_content =>
						typeof _content === 'string' ? (
							<p
								key={_content}
								dangerouslySetInnerHTML={{ __html: _content }}
								className="text-xs md:text-lg text-white leading-looser tracking-widest"
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
		<div className={classnames(styles.background)}>
			<NavBar />

      <div className="w-screen h-full fixed left-0 top-0 z-10">
        <Threejs />
      </div>

			<div
				className={classnames(
						styles.heroBackdrop,
						"flex flex-col items-start py-6 md:py-12 relative z-10"
					)}
          id="header"
      >
				<div className={classnames("container w-screen mx-auto px-6 md:px-8")}>
					<Image src={logo} alt="logo" className={classnames(styles.logo, "h-auto w-full md:w-1/2 lg:w-3/7 mt-4 mb-8")} />
					<div className={
						classnames(
							"flex flex-row space-x-4 md:space-x-8 mb-8 items-start"
						)
					}>
						<Link href="https://www.facebook.com/openhci/posts/pfbid023kR4E2BwuiaBcpSKsSgvqM6z7ANzp9zohhgv5y7JxzoMLgPad2hehHe8V7s41mYfl" target="_blank">
							<Button className="z-0" variant="normal">
								錄取名單
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* <Image src={cube} alt="cube" className={classnames(styles.cube, "h-auto w-1/2 md:w-1/3")} /> */}

			<div className="container mx-auto px-6 md:px-8 py-8 md:py-24 lg:py-36 relative z-20">

				{/* 工作坊介紹 */}
				<section className="mb-14 md:mb-28" id="introduction">
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

				{/* 主題演講 */}
				<section className="mb-14 md:mb-28" id="talks">
				<SectionTitle titleZh="主題演講" titleEn="" />
					<div className={classnames(styles.carousel, 'flex justify-center items-center m-24')}>
						<Carousel />
					</div>
				</section>

				{/* 活動資訊 */}
				<section className="mb-14 md:mb-28" id="about">
					<SectionTitle titleZh="活動資訊" titleEn="" />
					{content?.slice(4, 7).map(({ title_zh, title_en, blocks }) => (
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
					{content?.slice(7, 9).map(({ title_zh, title_en, blocks }) => (
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

				{/* 作品成果 */}
				<section className="mb-14 md:mb-28" id="works">
					<SectionTitle titleZh="作品成果" titleEn="" />
					<Works />
				</section >

				{/* 組織成員 */}
				<section className="mb-14 md:mb-28" id="organizers">
				<SectionTitle titleZh="組織成員" titleEn="" />
          {content?.slice(10, 11).map(({ title_zh, title_en, blocks }) => (
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
					{content?.slice(11, 12).map(({ title_zh, title_en, blocks }) => (
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

				{/* footer */}
				<div className={classnames(styles.footer, "flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:justify-start lg:px-20")}>
					<div className="text-xs md:text-base z-10 lg:w-1/3">
						COPYRIGHT © 2023 OpenHCI
					</div>
					<div className="text-xs md:text-base text-center leading-6 z-10">
						/ <span><a href="https://www.facebook.com/openhci">facebook</a></span>{' '}
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
		</div>
	);
};

export default HomePage;
