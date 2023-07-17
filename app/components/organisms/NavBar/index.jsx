"use client"

import React, { useState, useEffect } from "react";

import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import { Noto_Sans_TC, Aldrich } from 'next/font/google';

import Button from '@/components/atoms/Button';

import styles from './styles.module.scss';
import Logo from '../../../../public/logo_nav.png';
import AltLogo from '../../../../public/tai_logo.png';

const MIN_WIDTH = 1034;

const notoSansTC = Noto_Sans_TC({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

const aldrich = Aldrich({
	weight: ['400'],
	subsets: ['latin'],
});

const sections = [
  {"y": 0,  "title": ""},
  {"y": 350,  "title": "工作坊介紹"},
  {"y": 2900, "title": "主題演講"},
  {"y": 3600, "title": "活動資訊"},
  {"y": 5800, "title": "FAQ"},
  {"y": 7800, "title": "歷屆作品"},
  {"y": 12200, "title": "組織成員"}
]

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState('');

  useEffect(() => {
    const options = { passive: true };

    const scroll = (event) => {
      const { scrollY } = window;  

      let current = "";
      sections.forEach((section) => {
        if (scrollY >= section.y) {
          current = section.title;
        }
      });

      setActive(current);
    };

    document.addEventListener("scroll", scroll, options);
    () => document.removeEventListener("scroll", scroll, options);
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Initial window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function scrollToElement(id) {
    const element = document.getElementById(id); // Replace 'targetElement' with the ID of the element you want to scroll to
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  }  

  return (
    <div className='absolute'>
      <div className="flex items-center justify-between mx-auto px-2 md:px-8 fixed top-0 left-0 right-0 h-16 md:h-20 bg-black z-10">
        <div className="flex flex-row items-center space-x-1">
          <Link href="/">
            <Image src={Logo} alt="logo" className="h-10 md:h-14 w-auto ml-2 md:ml-4 mr-1 md:mr-3"/>
          </Link>
          <Link href="https://taichi2023.taiwanchi.org/" target="_blank">
            <Image src={AltLogo} alt="alt-logo" className="h-4 md:h-6 w-auto ml-0 md:ml-2 mt-1" />
          </Link>
        </div>
        <div>
        {
          width > MIN_WIDTH ? (
            <nav className="flex flex-row items-center">
              <div className={classnames(notoSansTC.className,  styles.navItem, active === '工作坊介紹' && styles.navItem_active,'text-white md:text-base font-regular mx-2 tracking-wider')} onClick={() => {scrollToElement("工作坊介紹")}}>工作坊介紹</div>
              <div className={classnames(notoSansTC.className,  styles.navItem, active === '主題演講' && styles.navItem_active,'text-white md:text-base font-regular mx-2 tracking-wider')} onClick={() => {scrollToElement("主題演講")}}>主題演講</div>
              <div className={classnames(notoSansTC.className,  styles.navItem, active === '活動資訊' && styles.navItem_active,'text-white md:text-base font-regular mx-2 tracking-wider')} onClick={() => {scrollToElement("活動資訊")}}>活動資訊</div>
              <div className={classnames(aldrich.className,     styles.navItem, active === 'FAQ' && styles.navItem_active,'text-white md:text-base font-regular mx-2 mt-1 tracking-wider')} onClick={() => {scrollToElement("FAQ")}}>FAQ</div>
              <div className={classnames(notoSansTC.className,  styles.navItem, active === '歷屆作品' && styles.navItem_active,'text-white md:text-base font-regular mx-2 tracking-wider')} onClick={() => {scrollToElement("歷屆作品")}}>歷屆作品</div>
              <div className={classnames(notoSansTC.className,  styles.navItem, active === '組織成員' && styles.navItem_active,'text-white md:text-base font-regular mx-2 tracking-wider')} onClick={() => {scrollToElement("組織成員")}}>組織成員</div>
              <Link href="https://forms.gle/ckxGwYdGASKPyw1s9" target="_blank">
                <Button className="md: mx-4">立即報名</Button>
              </Link>
            </nav>
          ) : (
            <div>
              <div className={navActive ? classnames(styles.closer): classnames(styles.nav)} onClick={() => {setNavActive(!navActive)}}>
                <div className={classnames(styles.navStrip)}></div>
                <div className={classnames(styles.navStrip)}></div>
                <div className={classnames(styles.navStrip)}></div>
              </div>
            </div>
          )
        }
        </div>
      </div>
      <div className={navActive ? classnames(styles.navOverlay): classnames(styles.navOverlay_closed)}>
        <div className="flex flex-col gap-y-10 items-center">
          <div className={classnames(notoSansTC.className,  'text-white md:text-base font-regular tracking-wider')} onClick={() => {setNavActive(false); scrollToElement("工作坊介紹");}}>工作坊介紹</div>
          <div className={classnames(notoSansTC.className,  'text-white md:text-base font-regular tracking-wider')} onClick={() => {setNavActive(false); scrollToElement("主題演講");}}>主題演講</div>
          <div className={classnames(notoSansTC.className,  'text-white md:text-base font-regular tracking-wider')} onClick={() => {setNavActive(false); scrollToElement("活動資訊");}}>活動資訊</div>
          <div className={classnames(aldrich.className,     'text-white md:text-base font-regular tracking-wider')} onClick={() => {setNavActive(false); scrollToElement("FAQ");}}>FAQ</div>
          <div className={classnames(notoSansTC.className,  'text-white md:text-base font-regular tracking-wider')} onClick={() => {setNavActive(false); scrollToElement("歷屆作品");}}>歷屆作品</div>
          <div className={classnames(notoSansTC.className,  'text-white md:text-base font-regular tracking-wider')} onClick={() => {setNavActive(false); scrollToElement("組織成員");}}>組織成員</div>
          <Link href="https://forms.gle/ckxGwYdGASKPyw1s9" target="_blank">
            <Button className="">立即報名</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;