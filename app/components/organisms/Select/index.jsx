"use client"

import React, { useState, useEffect } from "react";
import classnames from 'classnames';
import { Noto_Sans_TC, Aldrich } from 'next/font/google';

const notoSansTC = Noto_Sans_TC({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

const aldrich = Aldrich({
	weight: ['400'],
	subsets: ['latin'],
});

const index = ({items}) => {

  function scrollToElement(id) {
    const parent = document.getElementById('agenda');
    const element = document.getElementById(id);
    const offsetLeft = element.offsetLeft - 72;
    parent.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
  }

  return (
    <div className='grid grid-cols-3 md:flex md:flex-row text-sm md:text-base gap-y-2 gap-x-4 md:gap-8 mb-3 md:mb-6'>
      {
        items.map((item, index) => (
          <div
            key={item.name + (index+1) * 2}
            onClick={() => scrollToElement(item.id)}
            className='
              hover:text-[#D165B2]
              hover:font-bold
              hover:underline
              active:text-[#D165B2]
              active:font-bold
              active:underline
            '
            style={{
              cursor: 'pointer'
            }}
          >
            {item.name}
          </div>
        ))
      }
    </div>
  )
}

export default index