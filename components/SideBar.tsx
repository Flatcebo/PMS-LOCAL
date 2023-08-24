//sidebar가 17.4퍼센트 유지함 or 10.9퍼 유지

import Image from 'next/image'
import headerMark from '@public/headerMark.png'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SideBar() {
  const [colors, setColors] = useState(true)
  const onChangeColors = (e: React.MouseEvent<HTMLButtonElement>) => {
    setColors(any => !any)
  }

  const [sidebars, setSidebars] = useState(true)
  const onSidebar = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSidebars(any => !any)
  }

  return (
    <main className="">
      {/* 부모 사이드바 */}

      <aside className="font-Nanums font-[700] ">
        {/* 자식 사이드바 */}
        <ul
          className="absolute top-[16.7vh] -left-[4px] w-[12.9vw] h-[83.3vh] text-[1.3rem] 
         opacity-80 bg-[#1c577c4e] rounded-lg leading-[4rem] text-right shadow-xl shadow-[#00f7ff5d]
         sm:top-[13vh] sm:-left-[4px] sm:w-[25vw] sm:h-[83.3vh] sm:leading-[3rem] sm:text-[1.1rem] 
         2xl:top-[16.7vh] 2xl:-left-[4px] 2xl:w-[12.9vw] 2xl:h-[83.3vh] 2xl:leading-[4rem] 2xl:text-[1.3rem]"
        >
          {/* 사이드바 리스트 */}
          <li className="inline-block">
            <Link href="/main">
              <button className="mt-[1rem] focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] sm:tracking-[0.2em] 2xl:tracking-[0.3em]">
                  대시보드
                </p>
              </button>
            </Link>
          </li>
          <li className="sm:text-[1.1rem] 2xl:text-[1.3rem]">
            <Link href="/project">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] sm:tracking-[0.2em] 2xl:tracking-[0.3em]">
                  프로젝트
                </p>
              </button>
            </Link>
          </li>
          <li className="sm:text-[1.1rem] 2xl:text-[1.3rem]">
            <Link href="/calendar">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] sm:tracking-[0.2em] 2xl:tracking-[0.3em]">
                  캘린더
                </p>
              </button>
            </Link>
          </li>
          <li className="sm:text-[1.1rem] 2xl:text-[1.3rem]">
            <Link href="/scoreBoard">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] sm:tracking-[0.2em] 2xl:tracking-[0.3em]">
                  업무일지
                </p>
              </button>
            </Link>
          </li>
        </ul>

        <footer className="absolute bottom-3 left-5">
          {/* <Image src={headerMark} alt="LOGOs" height={90} width={64}></Image> */}
        </footer>
      </aside>
    </main>
  )
}
