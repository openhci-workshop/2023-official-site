import classnames from 'classnames';
import Image from 'next/image';
import { Noto_Sans_TC, Nunito_Sans, Aldrich } from 'next/font/google';
import styles from './styles.module.scss';

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

const WorkPanel = ({ title, image, url, description }) => (
  <div
    className={classnames(
      styles.blockBackdrop,
      "relative w-100 flex flex-col md:flex-row px-6 md:px-12 xl:px-32 py-6 md:py-10 xl:py-20 mb-8 md:mb-16"
    )}
  >
    <div className="w-full md:w-2/5 md:mr-14 flex flex-col justify-center">
      <Image src={image} alt="logo" className="h-auto w-full mb-8 md:mb-0" />
    </div>
    <div className="w-full md:w-3/5 flex flex-col justify-center">
      <a href={url} target="_blank">
        <h2
          className={classnames(
            notoSansTC.className,
            aldrich.className,
            "text-white text-2xl md:text-4xl lg:text-4xl mb-4 md:mb-6"
          )}
        >
          <span style={{ boxShadow: "inset 0 -1px 0 #fff" }}>{title}</span>
        </h2>
      </a>
      <p
        className={classnames(
          notoSansTC.className,
          aldrich.className,
          "text-xs md:text-lg text-white leading-looser font-normal"
        )}
      >
        {description}
      </p>
    </div>
  </div>
);

export default WorkPanel;