"use client";
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Button from '@/components/atoms/CarouselButton';
import classnames from 'classnames';
import { Noto_Sans_TC } from 'next/font/google';

const notoSansTC = Noto_Sans_TC({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

const Carousel = () => {
    const [contentOrder, setContentOrder] = useState([1, 2, 3, 4, 5]);
    const [direction, setDirection] = useState(null);

    const shiftLeft = () => {
        setDirection('left');
        setContentOrder(prevOrder => [prevOrder[1], prevOrder[2], prevOrder[3], prevOrder[4], prevOrder[0]]);
    };

    const shiftRight = () => {
        setDirection('right');
        setContentOrder(prevOrder => [prevOrder[4], prevOrder[0], prevOrder[1], prevOrder[2], prevOrder[3]]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.cardsWrapper}>
                <ul className={styles.cardsContainer}>
                    {contentOrder.map((order, index) => (
                        <React.Fragment key={order}>
                            {index === 2 && (
                                <div className={`${styles.button} ${styles.leftButton}`} onClick={shiftLeft}>
                                    <Button iconPath="/speakers/leftvector.png"> </Button>
                                </div>
                            )}
                            <li key={order} className={`${styles.box} ${styles[`box${order}`]}  ${direction === 'left' ? styles[`move-to-position${index + 1}-from-left`] : styles[`move-to-position${index + 1}-from-right`]}`}>
                                <img src={`/speakers/speaker${order}.jpg`} className={styles.boxImage} alt={`Speaker Photo ${order}`} />
                                <div className={classnames(notoSansTC.className, 'font-regular')}>
                                    {order === 1 && (
                                        <div className={styles.textbox}>
                                            <h5>古健樺</h5>
                                            <p>政治大學 兼任講師</p>
                                            <p>黑洞創造 創辦人</p>
                                        </div>
                                    )}
                                    {order === 2 && (
                                        <div className={styles.textbox}>
                                            <h5>曾唯哲</h5>
                                            <p>UX/UI Designer</p>
                                            <p>ViewSonic</p>
                                        </div>
                                    )}
                                    {order === 3 && (
                                        <a href="https://www.lungpancheng.tw/" target="_blank">
                                            <div className={styles.textbox}>
                                                <h5>鄭龍磻</h5>
                                                <p>國立臺灣大學資訊工程學系</p>
                                                <p>助理教授</p>
                                            </div>
                                        </a>
                                    )}
                                    {order === 4 && (
                                        <div className={styles.textbox}>
                                            <h5>梁容輝</h5>
                                            <p>國立台灣科技大學設計系</p>
                                            <p>副教授</p>
                                        </div>
                                    )}
                                    {order === 5 && (
                                        <div className={styles.textbox}>
                                            <h5>林承毅</h5>
                                            <p>林事務所 執行長</p>
                                            <p>政大傳院 兼任講師</p>
                                        </div>
                                    )}
                                </div>
                            </li>
                            {index === 2 && (
                                <div className={`${styles.button} ${styles.rightButton}`} onClick={shiftRight}>
                                    <Button iconPath="/speakers/rightvector.png"> </Button>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Carousel;
