import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import classnames from 'classnames';
import { Noto_Sans_TC, Nunito_Sans, Aldrich } from 'next/font/google';

import NavBar from '@/components/organisms/NavBar';
import SectionTitle from '@/components/molecules/SectionTitle';
import BlockTitle from '@/components/molecules/BlockTitle';

import logo from '../public/logo_hero.png';
import cube from '../public/open_cube.png';
import styles from './styles.module.scss';

import historywork1 from '../public/history_work1.png';
import historywork2 from '../public/history_work2.png';

export const metadata = {
	title: 'OPENHCI 2023',
	description: 'OPENHCI 2023 Home Page',
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
					className="flex flex-col md:flex-row justify-between"
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
									'text-white font-normal text-sm md:text-3xl lg:text-4xl mb-4'
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
				<div className="pl-6 md:pl-8 md:pl-0 py-0 md:py-16" key={`${type}-${idx}`}>
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
				<div className="container mx-auto px-6 md:px-8">
					<Image src={logo} alt="logo" className="h-auto w-full md:w-1/2 lg:w-1/3 mt-4 mb-8"/>
					<h1 className={classnames(notoSansTC.className, 'text-white text-lg md:text-2xl font-semibold mb-8')}>
						第十三屆台灣人機互動工作坊
					</h1>
					<div className={
						classnames(
							"flex flex-row space-x-4 md:space-x-8 mb-8 items-start"
						)
					}>
						<Link href="https://forms.gle/5MLgwDqqC18mdhJX6" target="_blank">
							<Button variant="normal">
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
							key={title_en}
							className={classnames(
								styles.blockBackdrop,
								'relative w-100 flex flex-col p-8 sm:px-12 sm:py-16 lg:px-20 lg:py-24 mb-8 md:mb-16 gap-8 md:gap-12'
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
							key={title_en}
							className={classnames(
								styles.blockBackdrop,
								'relative w-100 flex flex-col px-6 md:px-12 xl:px-32 py-6 md:py-10 xl:py-20 mb-8 md:mb-16'
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
							key={title_en}
							className={classnames(
								styles.blockBackdrop,
								'relative w-100 flex flex-col px-6 md:px-12 xl:px-32 py-6 md:py-10 xl:py-20 mb-8 md:mb-16'
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
					<div
						className={classnames(
							styles.blockBackdrop,
							"relative w-100 flex flex-col md:flex-row px-6 md:px-12 xl:px-32 py-6 md:py-10 xl:py-20 mb-8 md:mb-16"
						)}
					>
						<div className="w-full md:w-2/5 md:mr-14 flex flex-col justify-center">
							<Image src={historywork1} alt="logo" className="h-auto w-full mt-4 mb-8" />
						</div>
						<div className="w-full md:w-3/5 flex flex-col justify-center">
							<a href='https://www.youtube.com/watch?v=X9Xw4hiFqlc&list=PL5Zz58VdLY59meXvFQCkwcmEQJJ97QfG2&index=2' target="_blank">
								<h2
									className={classnames(
										notoSansTC.className,
										"text-white text-2xl md:text-4xl lg:text-4xl mb-4 md:mb-6"
									)}
								>
									<span style={{ boxShadow: "inset 0 -1px 0 #fff" }}>情緒波紋</span>
								</h2>
							</a>
							<p
								className={classnames(
									notoSansTC.className,
									"leading-loose"
								)}
							>
								上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。
							</p>
						</div>
					</div>


					<div
						className={classnames(
							styles.blockBackdrop,
							"relative w-100 flex flex-col md:flex-row px-6 md:px-12 xl:px-32 py-6 md:py-10 xl:py-20 mb-8 md:mb-16"
						)}
					>
						<div className="w-full md:w-2/5 md:mr-14 flex flex-col justify-center">
							<Image src={historywork2} alt="logo" className="h-auto w-full mt-4 mb-8" />
						</div>
						<div className="w-full md:w-3/5 flex flex-col justify-center">
							<a href='https://www.youtube.com/watch?v=KylHCITJITA&list=PL5Zz58VdLY59meXvFQCkwcmEQJJ97QfG2&index=2' target="_blank">
								<h2
									className={classnames(
										notoSansTC.className,
										aldrich.className,
										"text-white text-2xl md:text-4xl lg:text-4xl mb-4 md:mb-6"
									)}
								>
									<span style={{ boxShadow: "inset 0 -1px 0 #fff" }}>抒花 Blossom</span>
								</h2>
							</a>
							<p
								className={classnames(
									notoSansTC.className,
									aldrich.className,
									"leading-loose"
								)}
							>
								抒花Blossom，是一款透過心率變化偵測居家工作者當下的壓力指數並將其視覺化，以花朵枯萎與光的變化促使工作者意識到自己的壓力狀態並走出房門曬太陽的互動裝置，讓它重新綻放的同時，也讓居家工作者休息。
							</p>
						</div>
					</div>

				</section >

				{/* 組織成員 */}
				<section className="mb-14 md:mb-28" id="組織成員">
				<SectionTitle titleZh="組織成員" titleEn="" />
          {content?.slice(8,9).map(({ title_zh, title_en, blocks }) => (
						<div
							key={title_en}
							className={classnames(
								styles.blockBackdrop,
								'relative w-100 flex flex-col px-6 md:px-12 xl:px-32 py-6 md:py-10 xl:py-20 mb-8 md:mb-16'
							)}
						>
							<BlockTitle titleZh={title_zh} titleEn={title_en} />
							<div className="flex flex-col gap-8 mt-4 md:mt-12">
								{blocks?.map(({ type, content, level }, idx) => renderHTML(type, content, level, idx))}
							</div>
						</div>
					))}
				</section>
			</div>
		</>
	);
};

export default HomePage;
