import { Noto_Sans_TC } from 'next/font/google';
import classnames from 'classnames';

const notoSansTC = Noto_Sans_TC({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

import styles from './styles.module.scss';

const Button = ({ className, onClick, children, variant = 'normal' }) => {
	return (
		<button
			className={classnames(
				notoSansTC.className,
				'text-lg md:text-lg px-4 md:px-6 py-1 md:py-2 font-medium md:font-bold',
				styles.button,
				styles[variant],
				className
			)}
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
