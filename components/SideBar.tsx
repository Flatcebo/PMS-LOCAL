//sidebar가 17.4퍼센트 유지함 or 10.9퍼 유지

import Image from "next/image";
import headerMark from "@public/headerMark.png";
import Link from "next/link";
import React, { useState } from "react";

export default function SideBar() {
  const [colors, setColors] = useState(true);
  const onChangeColors = (e: React.MouseEvent<HTMLButtonElement>) => {
    setColors((any) => !any);
  };

  return (
    <main className="">
      {/* 부모 사이드바 */}
      <aside className="font-Nanum-Gothic ">
        {/* 자식 사이드바 */}
        <ul
          className="absolute top-[16.7vh] -left-[4px] border border-x-[1rem] border-[#9a9a9ac1] w-[12.9vw] h-[83.3vh] text-[1.3rem]
         opacity-[95%] bg-gradient-to-b from-[#b6173e] via-[#cd682ed3] to-blue-500 rounded-lg
         leading-[4rem] text-right"
        >
          {/* 사이드바 리스트 */}
          <li className="inline-block font-bold ">
            <Link href="/main">
              <button className="mt-[1rem] focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] ">
                  DASHBOARD
                </p>
              </button>
            </Link>
          </li>

          <li className="text-[1.3rem] font-bold ">
            <Link href="/project">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black]">
                  PROJECT
                </p>
              </button>
            </Link>
          </li>

          <li className="text-[1.3rem] font-bold ">
            <Link href="/calendar">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black]">
                  CALENDAR
                </p>
              </button>
            </Link>
          </li>

          <li className="text-[1.3rem] font-bold ">
            <Link href="/scoreBoard">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black]">
                  SCOREBOARD
                </p>
              </button>
            </Link>
          </li>
        </ul>

        <footer className="absolute bottom-3 left-5">
          <Image src={headerMark} alt="LOGOs" height={90} width={64}></Image>
        </footer>
      </aside>
    </main>
  );
}
