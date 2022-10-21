// sidebar hidden,icon
// bell icon add
// y.m.d.time add
// today work spin style add - db connect

import Image from "next/image";
import headerMark from "@public/headerMark.png";
import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Popup } from "reactjs-popup";
import Link from "next/link";
import { BsMegaphone, BsMegaphoneFill } from "react-icons/bs";

interface itemProps {
  name: string;
  price: number;
  content: string;
  color: string;
}

const Headers = () => {
  const [data, setData] = useState<itemProps>();
  useEffect(() => {
    (async () => {
      const item = await (await fetch(`/api/admin`)).json();
      setData(item);
    })();
  }, []);

  const [ProfileMenu, setProfileMenu] = useState(false);
  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setProfileMenu((any) => !any);
  };

  return (
    // 전체 헤더 레이아웃
    <div
      id="header"
      className="absolute w-[100vw] h-[16.7vh] px-[1em] py-[1.8em] bg-[#b6173ff7] rounded-lg
      font-Nanum-Gothic drop-shadow-md opacity-[95%] border border-l-[1em] border-y-[1em] border-[#9a9a9ac1]"
    >
      {/* 투비 로고 */}
      <div className="">
        <ul className="">
          <li className="">
            <Image
              id="tobemark"
              src={headerMark}
              alt="LOGO"
              width={50}
              height={70}
              className=""
            />
          </li>
          <div className="">
            <li className="">
              {/* PMS 이름 */}
              <h2 className="absolute top-[35px] left-[90px] text-[40px] ml-[1rem]">
                <span className="">PMS</span>
              </h2>
            </li>
            <div className="absolute right-4"></div>
          </div>
        </ul>
        {/* 공지 사항 */}
        <div className="absolute top-[1.2em] left-[16em] rounded-md">
          <div className="">
            <Popup
              trigger={
                <button className=" ">
                  <span className="animate-ping absolute right-[11.5px] top-[15px] inline-flex h-[20%] w-[35%] rounded-full bg-[#1e44ff]" />
                  <span className="relative inline-flex top-[10px] rounded-full h-3 w-3 bg-[#87cfeb63]" />
                  <span>
                    <BsMegaphoneFill className="w-9 h-9 text-[#fffbfb85] hover:text-[#ffffffb6] active:text-[#ffffffe3]" />
                  </span>
                </button>
              }
              modal
            >
              {/* 공지 사항 모달 */}
              <div className="absolute -top-[23em] -left-[42.8em] ">
                <Link href="/pagenotice">
                  <button
                    className="absolute right-[0px] -top-[1.5em] rounded-t-md rounded-br-sm px-[2em] bg-[#0c39ff2b] outline outline-[#0c39ff4f] 
                  hover:bg-[#0c39ff53] active:bg-[#0c39ff2b] hover:text-[#ffffffbb] active:text-[#000000a8] text-[20px] text-[#ffffffa1] font-semibold"
                  >
                    이동
                  </button>
                </Link>
                <div className="border w-[20em] h-[25em] outline outline-[#0c39ff4f] rounded-md backdrop-blur-[4px] flex justify-center items-center ">
                  <ul className="w-[19em] h-[24em] rounded-sm outline outline-[#0008ff59] text-center leading-[3.5em] overflow-y-scroll scrollbar-hide bg-[#ff0c0c19] ">
                    <div className="font-bold text-[20px] text-[#000000a8]">
                      <Link href="">
                        <li className="">
                          <p className="">dddddd</p>
                        </li>
                      </Link>
                      <Link href="">
                        <li>
                          <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                            dfdffd
                          </p>
                        </li>
                      </Link>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                      <li>
                        <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                          dfdffd
                        </p>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </Popup>
          </div>
        </div>
        {/* 헤더 스핀 */}
        <div className="absolute top-[28px] left-[650px] h-[70px] w-[600px] outline outline-[#cd682e6b] rounded-2xl font-Nanum-Gothic">
          <div className="text-center text-[44px] font-mono font-medium">
            커피 물주기
          </div>
        </div>
        {/* 헤더 알림 */}
        <div id="profile bell" className="absolute right-[160px] top-[22px] ">
          <button>
            <span className="animate-ping absolute right-[11.4px] top-[14px] inline-flex h-[20%] w-[35%] rounded-full bg-[#1e44ff]" />
            <span className="relative inline-flex top-[10px] rounded-full h-3 w-3 bg-[#87cfeb63]"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fffbfb85"
              className="w-9 h-9 stroke-2 hover:stroke-[#ffffffb6] focus:stroke-[#ffffffda] "
            >
              <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>
          </button>
        </div>
        {/* 헤더 프로필 */}
        <div
          id="profile image"
          className="absolute rounded-full right-12 top-12"
        >
          <Popup
            trigger={
              <button className="" onClick={onClickMenu}>
                <Image
                  src={`/../public/${data?.name}`}
                  alt="Profile"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </button>
            }
            modal
          >
            <div>
              <div>
                {" "}
                <div className="absolute -top-[22em] -right-[58em] bg-[#ff5e0070] px-[30px] py-[20px] rounded-md">
                  <div className="space-y-[1rem] flex flex-col text-center">
                    <div className="hover:text-[#ffffffbc]">
                      <Link href="/profileChange">
                        <button className="">
                          <span className="font-bold">프로필 편집</span>
                        </button>
                      </Link>
                    </div>
                    <div className="hover:text-[#ffffffbc]">
                      <Link href="/settings">
                        <button className="">
                          <span className="font-bold">설정</span>
                        </button>
                      </Link>
                    </div>
                    <div className="hover:text-[#ffffffbc]">
                      <button className="">
                        <span className="font-bold">로그아웃</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </div>
        {/* {ProfileMenu ? <ProfileAccordion /> : ""} */}
      </div>
    </div>
  );
};

export default Headers;
