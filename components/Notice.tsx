// modal 작업 하기
// modal이 다른 div 라서 닫아지는것 일수도 있음
// wheel picker 사용해보기
// 공지 아이콘 리스트 border-t 색 바꾸기, background color change

// 공지사항 리스트 헤더 작업하기
// 공지사항 폼 데이터 보내기

// setValue로 데이터 없애기 성공 기능만 성공.

import PageLayout from "@components/PageLayout";
import React, { useState, useCallback, useEffect } from "react";
import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BsFillPencilFill, BsCaretDown } from "react-icons/bs";
import { FaPlus, FaFish } from "react-icons/fa";
import Popup from "reactjs-popup";
import Styled, { keyframes } from "styled-components";
import axios from "axios";

import NoticeInput from "./NoticeInput";

interface type {
  title: string;
  categories: string;
  uploader: string;
  update: string;
  hashtag: string;
  content: string;
}
const Notice = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    getCurrentRate();
  }, []);
  const getCurrentRate = async () => {
    const response = await fetch(`/api/noticeList`);

    const data = await response.json();

    console.log(data);

    setNoticeData(data.notices);
  };

  console.log(noticeData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("");
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>로딩중 ...</div>;
  // }

  return (
    <div className="">
      <PageLayout />
      <div>
        {/* 전체 레이아웃 */}
        <div className="absolute w-[84vw] h-[80.8vh] left-[16em] top-[10.5em]">
          {/* 공지사항 헤더 */}
          <div className="w-[86vw] h-[5.1vh] mt-[1em]">
            <h1 className="text-center text-[#2c28b5] text-[2em] font-semibold tracking-[0.2em]">
              공 지 사 항
            </h1>
            <div className="absolute top-[1.5em] left-[3.5em]">
              <form>
                <input
                  id="search"
                  type="search"
                  placeholder=""
                  className="py-[0.5em] pl-[3em] pr-[2em] w-[16em] rounded-md text-center bg-[#ffffffef] mt-[3px] hover:bg-[#ffffff88] focus:bg-[#ffffffef]"
                />
              </form>
              <div className="absolute top-[7px] text-[2em]">
                <AiOutlineSearch className="text-[#0000ff6a]" />
              </div>
            </div>
            {/* 검색창,글쓰기 */}
            <h2 className="absolute top-[0em] -right-[3em] w-[20vw] h-[5.2vh] mt-[1em] grid content-center">
              <ul className="flex justify-evenly">
                <li className=""></li>
                <li></li>
                <li className="text-[1.7em] mt-[6px]">
                  <Popup
                    trigger={
                      <button className="">
                        <BsFillPencilFill
                          className="text-[#2c28b5] hover:text-[#2d28b558] active:text-[#314bdd3e]"
                          // onClick={clickPencil}
                        />
                      </button>
                    }
                    modal
                  >
                    {/* {clickPencils ? ( */}
                    <div className="relative">
                      <NoticeInput
                        name="title"
                        label="title"
                        type="title"
                        placeholder="TITLE"
                        required
                      />
                    </div>
                    {/* ) : undefined} */}
                  </Popup>
                </li>
              </ul>
            </h2>
            {/* 공지사항 리스트 */}
            <div className="mt-[2em] ml-[3.5em] w-[80vw] h-[68vh] bg-[#ffffffef] rounded-2xl">
              <div className="flex h-[65vh] text-center text-[20px]">
                <div className="absoulte top-0 w-[77em] h-[2.5em] bg-[#0000ff27] rounded-2xl">
                  <ul className="flex space-x-[30px] py-[0.6em] pl-[0.3em] text-[20px] font-bold text-[#0000ffb3]">
                    <h3 className="w-[10%] ">분류</h3>
                    <h3 className="w-[62%] pl-[0.4em]">게시글</h3>
                    <h3 className="w-[13%] pl-[1em]">게시자</h3>
                    <h3 className="w-[15%] pr-[1em]">게시일</h3>
                  </ul>
                  <div className="flex h-[62.5vh] overflow-y-scroll scrollbar-hide ">
                    <ul className="w-[10%]">
                      <div>{/* {NoticeCategories} */}</div>
                    </ul>
                    <ul className="w-[62%] outline outline-[2px] outline-[#0000002d]">
                      <div>
                        {/* {NoticeTitle}
                        {NoticeContent} */}
                      </div>
                    </ul>
                    <ul className="w-[13%]">
                      <div>{/* {NoticeUploader} */}</div>
                    </ul>
                    <ul className="w-[15%] outline outline-[2px] outline-[#0000002d]">
                      <div>{/* {NoticeUpdate} */}</div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>분류</th>
                  <th>게시글</th>
                  <th>게시자</th>
                  <th>게시일</th>
                </tr>
              </thead>
              <tbody>
                {noticeData.map(item => {
                  return (
                    <>
                      <tr>
                        <td>{item.categories}</td>
                        <td>{item.title}</td>
                        <td>{item.uploader}</td>
                        <td>{item.yymmdd}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <Organization /> */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Notice);
