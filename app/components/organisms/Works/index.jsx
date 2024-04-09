"use client"

import React, { useState } from 'react'
import classnames from 'classnames';
import { Noto_Sans_TC, Aldrich } from 'next/font/google';
import WorkPanel from '@/components/molecules/WorkPanel';
import BlockTitle from '@/components/molecules/BlockTitle';
import YouTube from 'react-youtube';

import styles from '../../molecules/WorkPanel/styles.module.scss';

import work1 from '../../../../public/work/work1.png';
import work2 from '../../../../public/work/work2.png';
import work3 from '../../../../public/work/work3.png';
import work4 from '../../../../public/work/work4.png';
import work5 from '../../../../public/work/work5.png';
import work6 from '../../../../public/work/work6.png';
import work7 from '../../../../public/work/work7.png';

import new1 from '../../../../public/work/G1.png';
import new2 from '../../../../public/work/G2.png';
import new3 from '../../../../public/work/G3.png';
import new4 from '../../../../public/work/G4.png';
import new5 from '../../../../public/work/G5.png';
import new6 from '../../../../public/work/G6.png';
import new7 from '../../../../public/work/G7.png';

const imgs = [
  [
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
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
      "title": "SOUNDFIT",
      "url": "https://youtu.be/iw-RQiP9r-A?si=Zenfq-xRsWPM9T6s",
      "description": "工作時你會聽爵士樂、Lofi還是K-POP? 你可能會聽著KPOP做無需動腦的工作增加樂趣，當你不經意地開始動腦思考，漸漸地轉換工作狀態時卻發現KPOP變成干擾你思緒的外界資訊？好希望音樂能了解你，跟著你的工作狀態轉換歌曲? 許多研究指出，音樂與我們生理、情感和認知有強烈的連結，對我們的行為和思緒有顯著的影響。SOUNDFIT是耳罩式耳機結合Spotify外掛功能的產品，根據使用者當下的專注度、精神和生理數據，播放最適合當下工作狀態的歌曲，透過「對系統表達工作關鍵的兩種狀態」以及「系統向使用者採取生理數據」的雙向互動，增進人機與彼此的連結，打造前所未見的工作介面與體驗。"
    },
    {
      "title": "Ocean",
      "url": "https://youtu.be/-fiaPBXgkiQ?si=STF1lcL5oMk7VDjK",
      "description": "在這個資訊爭奪注意力的時代，你是否曾經禁不起手機震動和螢幕亮起的誘惑頻頻查看通知？就算開啟勿擾模式，你還是會常常看手機怕錯過重要訊息嗎？我們發現目前大學生在線下學習時常常被通知干擾，加上害怕錯過與重要他人的互動所造成的焦慮感，導致學習效率不彰。Ocean是一款結合裝置和App的藝術性產品，動態海浪代表著使用者學習時專注的狀態，而瓶中信則代表了重要聯絡人的訊息通知，不僅改造傳統手機通知呈現，更幫助FOMO大學生找回自己的時間，在資訊汪洋中不再載浮載沉，跟著學習專注航行。Follow me!"
    },
    {
      "title": "Emokit",
      "url": "https://youtu.be/vLwjWaLDqUc?si=C9MUfvzesdbUHGmG",
      "description": "「我上班不能碰手機，是要怎麼跟你說^_^？？」Emokit 嘗試以科技輔具協助年輕且忙於工作的情侶克服溝通挑戰。年輕情侶多因爲彼此工作時間落差而產生溝通阻礙，Emokit 透過裝置互相連結，讓伴侶能夠藉由桌上型裝置傳達三種情緒提示給對方，同步彼此狀態，緩解伴侶之間延遲分享造成感情疏離的痛點。Emokit 期盼連結忙碌情侶分享情緒的一面，增加親密關係的幸福感。"
    },
    {
      "title": "ALARM",
      "url": "https://youtu.be/aD4IThiSyTU?si=d9lXeXpvkZGOyOpB",
      "description": "「嘿，你有想過當你沉浸在 VR 的世界時，身邊會發生什麼事情嗎？」在虛擬實境快速發展的時代，大多數玩家為了感受與現實的不同，沉浸在虛擬世界的體驗中。但當真實世界發生突發狀況或自然災害時，如何確保安全成為了重要的議題。ALARM 是一款領先的虛擬實境緊急通知系統，專為突發狀況和自然災害而設計。讓您在體驗虛擬世界時，仍能保持與真實世界的連繫，無論是火警、地震或其他緊急狀況。它結合了最新的虛擬實境技術，能夠即時感知周遭環境的變化，並透過視覺、聽覺及觸覺三種感知，將訊息傳遞給使用者。"
    },
    {
      "title": "ImmersiTopia",
      "url": "https://youtu.be/2pds8jn4gjM?si=eRo_JMMOi4xuOIp-",
      "description": "First Time? Long Time? 第一次的體驗總是擔心受怕，頻繁的等待總是漫長。常見的數位裝置中，內容讀取／載入多是以進度條呈現，觀看者甚至會分心查看其他事務。然而，隨著虛擬實境日漸興盛，使用者在體驗時往往無法輕易將眼鏡摘下，只能焦躁地看著索然無味的畫面痴痴地等候。「ImmersiTopia」因應而生，我們嘗試塑造VR沉浸式環境。對於初次使用者，期望能減緩陌生及徬徨不安的感受，資深使用者也可轉移等待載入的焦躁情緒，增加正面情緒以讓使用者加快載入的時間感。無論你是初次踏入VR這個世界，還是早已熟悉其中，都能嘗試體驗ImmersiTopia的協助來打發時間。"
    },
    {
      "title": "Toast Mode",
      "url": "https://youtu.be/5ibimX6iY98?si=T3go5MLuy-5eh2Mo",
      "description": "你昨天有睡飽嗎？我們透過調查發現年齡介於19至25歲的年輕族群，平均比預期時間晚入睡30至180分鐘，且超過90％的人睡前使用社群媒體。這種拖延的情形可能導致睡眠不足，影響隔日精神狀態，並對健康造成長期影響。Toast Mode以烤吐司機早餐意象重新設計入睡到起床的旅程，透過捕捉早晨的情感與經驗，並將手機作為載體，融入社會意識，建立親友的睡眠習慣連結，為你建打造更健康的睡眠習慣！"
    },
    {
      "title": "Wander in Ｗonder",
      "url": "https://youtu.be/_F22Qw1quaw?si=mdvMv_nbtC_ERKxt",
      "description": "轉動把手、齒輪轉動、簧片輕彈、音樂輕輕流瀉⋯⋯，看似直覺的一連串過程，你曾想過中間的過程是如何運作的嗎？Wander in Ｗonder 是一款結合 Reality Rift 概念的手搖式音樂盒，當使用者轉動音樂盒的把手時，會連動金屬圓筒開始轉動，即使圓筒上缺少金屬針，音梳看起來仍被某物所撥動，並發出樂聲。從人對於物理現象的心理模型出發，以移除零件創造出物理現象的斷裂，促發使用者運用想像接起裂隙。"
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
          className={classnames(`hover:text-[#D165B2] hover:underline active:text-[#D165B2] active:underline ${type === 1 && "text-[#D165B2] font-bold"} text-base md:text-lg`)}
          style={{
            cursor: 'pointer'
          }}
        >
          歷屆作品
        </div>
        <div
          onClick={() => handleChangeType(0)}
          className={classnames(`hover:text-[#D165B2] hover:underline active:text-[#D165B2] active:underline ${type === 0 && "text-[#D165B2] font-bold"} text-base  md:text-lg`)}
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
      {/* <div className="flex flex-row gap-x-4 items-center justify-center mt-4 md:mt-8">
        <div>
          {active+1} / {data[type].length}
        </div>
      </div> */}
      <div className={classnames(styles.blockBackdrop, "relative flex flex-col w-full h-fit px-12 py-12 my-8 md:my-16")}>
        {/* <BlockTitle titleZh={"回顧影片"} titleEn={""} /> */}
        <div className="h-fit w-full flex flex-row items-center justify-center">
          <YouTube videoId="f0wmvoEmyag" />
        </div>
      </div>
    </div>
  )
}

export default Works