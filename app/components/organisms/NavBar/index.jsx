"use client"

import React, { useState, useEffect } from "react";

import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import { Aldrich } from 'next/font/google';

import Button from '@/components/atoms/Button';

import styles from './styles.module.scss';
import Logo from '../../../../public/logo_nav.png';
import AltLogo from '../../../../public/tai_logo.png';

const MIN_WIDTH = 970;

const aldrich = Aldrich({
	weight: ['400'],
	subsets: ['latin'],
});

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const [width, setWidth] = useState(0);

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

  return (
    <div>
      <div className="flex items-center justify-between px-4 pl-0 fixed top-0 left-0 right-0 h-16 md:h-20 bg-black z-10">
        <div className="flex flex-row items-center space-x-1">
          <Link href="/">
            <Image src={Logo} alt="taichi-logo" className="h-12 md:h-16 w-auto ml-4 mr-2"/>
          </Link>
          |
          <Link href="https://taichi2023.taiwanchi.org/" target="_blank">
            <Image src={AltLogo} alt="alt-logo" className="h-3 md:h-5 w-auto ml-3" />
          </Link>
        </div>
        <div>
        {
          width > MIN_WIDTH ? (
            <nav className="flex flex-row items-center">
              <Link href="/#工作坊介紹">
                <div className={classnames(aldrich.className, 'text-white md:text-base font-regular mx-2 tracking-wider')}>工作坊介紹</div>
              </Link>
              <Link href="/#活動資訊">
                <div className={classnames(aldrich.className, 'text-white md:text-base font-regular mx-2 tracking-wider')}>活動資訊</div>
              </Link>
              <Link href="/#FAQ">
                <div className={classnames(aldrich.className, 'text-white md:text-base font-regular mx-2 tracking-wider')}>FAQ</div>
              </Link>
              <Link href="/#歷屆作品">
                <div className={classnames(aldrich.className, 'text-white md:text-base font-regular mx-2 tracking-wider')}>歷屆作品</div>
              </Link>
              <Link href="/#組織成員">
                <div className={classnames(aldrich.className, 'text-white md:text-base font-regular mx-2 tracking-wider')}>組織成員</div>
              </Link>
              <Link href="https://forms.gle/5MLgwDqqC18mdhJX6" target="_blank">
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
          <Link href="/#工作坊介紹" onClick={() => {setNavActive(false)}}>
            <div className={classnames(aldrich.className, 'text-white md:text-base font-regular tracking-wider')}>工作坊介紹</div>
          </Link>
          <Link href="/#活動資訊" onClick={() => {setNavActive(false)}}>
            <div className={classnames(aldrich.className, 'text-white md:text-base font-regular tracking-wider')}>活動資訊</div>
          </Link>
          <Link href="/#FAQ" onClick={() => {setNavActive(false)}}>
            <div className={classnames(aldrich.className, 'text-white md:text-base font-regular tracking-wider')}>FAQ</div>
          </Link>
          <Link href="/#歷屆作品" onClick={() => {setNavActive(false)}}>
            <div className={classnames(aldrich.className, 'text-white md:text-base font-regular tracking-wider')}>歷屆作品</div>
          </Link>
          <Link href="/#組織成員" onClick={() => {setNavActive(false)}}>
            <div className={classnames(aldrich.className, 'text-white md:text-base font-regular tracking-wider')}>組織成員</div>
          </Link>
          <Link href="https://forms.gle/5MLgwDqqC18mdhJX6" target="_blank">
            <Button className="">立即報名</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;