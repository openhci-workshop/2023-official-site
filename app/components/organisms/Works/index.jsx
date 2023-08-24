"use client"

import React, { useState } from 'react'
import classnames from 'classnames';
import { Noto_Sans_TC, Aldrich } from 'next/font/google';
import WorkPanel from '@/components/molecules/WorkPanel';

import work1 from '../../../../public/work/work1.png';
import work2 from '../../../../public/work/work2.png';
import work3 from '../../../../public/work/work3.png';
import work4 from '../../../../public/work/work4.png';
import work5 from '../../../../public/work/work5.png';
import work6 from '../../../../public/work/work6.png';
import work7 from '../../../../public/work/work7.png';

const imgs = [
  [
    work1
  ],
	[
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
  ]
]

const notoSansTC = Noto_Sans_TC({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

const aldrich = Aldrich({
	weight: ['400'],
	subsets: ['latin'],
});

const data = [
  [
    {
      "title": "TBD",
      "url": "/",
      "description": "TBD"
    },
  ],
  [
    {
      "title": "情緒波紋",
      "url": "https://youtu.be/X9Xw4hiFqlc",
      "description": "上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。"
    },
    {
      "title": "抒花 Blossom",
      "url": "https://youtu.be/KylHCITJITA",
      "description": "抒花 Blossom，是一款透過心率變化偵測居家工作者當下的壓力指數並將其視覺化，以花朵枯萎與光的變化促使工作者意識到自己的壓力狀態並走出房門曬太陽的互動裝置，讓它重新綻放的同時，也讓居家工作者休息。"
    },
    {
      "title": "酷熊節約Super Cool!",
      "url": "https://youtu.be/Jjq90ARsAxA",
      "description": "高溫肆虐的氣候環境下，Cool 熊致力於整合室內所有影響體感溫度的家電，除了運用IoT連結各項電器，並用深度學習調節溫度外，還考量不同使用情境，預設多種模式，也能依據個人偏好設定最舒適的環境，期望能減少用電消暑所消耗的能源。"
    },
    {
      "title": "有影無隱",
      "url": "https://youtu.be/6QtnlHt7jvw",
      "description": "「有影無隱」是一款讓使用者以第一人稱體驗遭受跟蹤騷擾的擴增實境，透過同理概念與背景知識傳遞，邀請大眾一起來正視此議題，創造更友善安全的社會。"
    },
    {
      "title": "校園危雞",
      "url": "https://youtu.be/LCSyyrT7GcY",
      "description": "校園危雞現今校內垃圾分類場所易發生分類錯誤的問題，主因來自學生即使有環保意識，也未必瞭解該垃圾是否可回收。透過「校園危雞」限時校園巡迴賽，鼓勵各校學生正確分類垃圾類別以獲得積分，並將正確環保知識推廣於校園。"
    },
    {
      "title": "想響窗明",
      "url": "https://youtu.be/l_ptSj1hQZ4",
      "description": "想響窗明是電子窗景-WinGlow 與 App-PeerFlow 的結合，以社群迴響、場域共感、直覺回饋、習慣養成出發，邀請使用者自組社群，在 21 天內選定一項減碳任務培養減碳習慣，過程中隨著減碳行為執行成效，WinGlow 中會反映出相對應的正、負向回饋。"
    },
    {
      "title": "FooMa",
      "url": "https://youtu.be/8GKYtmXS1l8",
      "description": "我們希望讓 FooMa 成為你的冰箱管家，以最簡單、輕鬆的方式達成不浪費食物的目標！FooMa 不僅可以幫助你查看自己的冰箱庫存資訊、冰箱內食物的效期，還可以透過顏色、LineBot 訊息，提醒您盡快在有效期限內吃完食物！"
    }
  ]
]

const Works = () => {
  const [type, setType] = useState(0)
  const [active, setActive] = useState(0);

  const handleLeft = () => {
    if (active === 0) {
      setActive(data[type].length - 1);
    } else {
      setActive(active - 1);
    }
  }

  const handleRight = () => {
    if (active === data[type].length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }

  const handleChangeType = (val) => {
    setActive(0)
    setType(val)
  }

  return (
    <div>
      <div className="flex flex-row gap-x-4 items-center justify-center mb-4 md:mb-8">
        <div
          onClick={() => handleChangeType(1)}
          className='
            hover:text-[#D165B2]
            hover:underline
            active:text-[#D165B2]
            active:underline
            text-base
            md:text-lg
          '
          style={{
            cursor: 'pointer'
          }}
        >
          歷屆作品
        </div>
        <div
          onClick={() => handleChangeType(0)}
          className='
            hover:text-[#D165B2]
            hover:underline
            active:text-[#D165B2]
            active:underline
            text-base
            md:text-lg
          '
          style={{
            cursor: 'pointer'
          }}
        >
          本屆作品
        </div>
      </div>
      <WorkPanel 
        title={data[type][active].title}
        image={imgs[type][active]}
        url={data[type][active].url}
        description={data[type][active].description}
        key={data[type][active].title}
        leftFunction={handleLeft}
        rightFunction={handleRight}
      />
      <div className="flex flex-row gap-x-4 items-center justify-center mt-4 md:mt-8">
        <div>
          {active+1}/{data[type].length}
        </div>
      </div>
    </div>
  )
}

export default Works