// modal 작업 하기
// modal이 다른 div 라서 닫아지는것 일수도 있음
// wheel picker 사용해보기
// 공지 아이콘 리스트 border-t 색 바꾸기, background color change

// 공지사항 리스트 헤더 작업하기
// 공지사항 폼 데이터 보내기

import PageLayout from "@components/PageLayout";
import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BsFillPencilFill, BsCaretDown } from "react-icons/bs";
import { FaPlus, FaFish } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import Popup from "reactjs-popup";
import Styled, { keyframes } from "styled-components";

const Notice = () => {
  return (
    <div className="relative">
      <PageLayout />
      <div>
        {/* 전체 레이아웃 */}
        <div className="absolute w-[86vw] h-[80.8vh] left-[16em] top-[11em] outline outline-[#0000ff6a]">
          {/* 공지사항 헤더 */}
          <div className="w-[86vw] h-[5.1vh] mt-[1em]">
            <h1 className="text-center text-[#0000ffb3] text-[2em] font-semibold tracking-[0.2em]">
              공 지 사 항
            </h1>
            {/* 검색창,글쓰기 */}
            <h2 className="absolute top-[0em] right-[0px] w-[20vw] h-[5.2vh] mt-[1em] grid content-center">
              <ul className="flex justify-evenly">
                <li className="">
                  <input
                    id="search"
                    type="text"
                    placeholder="SEARCH"
                    className="py-[0.5em] px-[3em] rounded-md text-center outline outline-[3px] outline-[#0000ff6a] mt-[3px]"
                  />
                  <div className="absolute top-[8px] text-[2em]">
                    <AiOutlineSearch className="text-[#0000ff6a]" />
                  </div>
                </li>
                <li className="text-[1.7em] mt-[6px]">
                  <Popup
                    trigger={
                      <button className="">
                        <BsFillPencilFill className="text-[#314bdd]" />
                      </button>
                    }
                    modal
                  >
                    <div className="relative">
                      <DivOpenModalToPencil className="absolute -top-[250px] left-[350px] w-[30vw] h-[72.3vh] px-0 py-0 outline backdrop-blur-[5px] outline-[#0000ff6a] rounded-md bg-[#0000ff29]">
                        <FormOpenModalToPencil>
                          <ul>
                            <LiOpenModalToPencil className="mt-[0.9em]">
                              <h1 className="flex justify-center ">
                                <p className="text-[22px] ml-[2.5em] font-semibold">
                                  제목
                                </p>
                                <input
                                  id="notice title"
                                  type="text"
                                  placeholder="TITLE"
                                  className="w-[24em] ml-[3.7em] px-[1em] tracking-[1px] text-center outline outline-[#0000ff6a] rounded-md"
                                />
                              </h1>
                            </LiOpenModalToPencil>
                            <LiOpenModalToPencil className="selectBox flex justify-center mt-[0.9em] ">
                              <BgCategory className="rounded-md">
                                <select
                                  name="notice category"
                                  className="select w-[8em] pl-[0.7em] py-[0.2em] outline outline-[#0000ff6a] rounded-md bg-[#0000ff28]
                                   text-[18px] tracking-[2px] text-center font-semibold cursor-pointer
                                   hover:bg-[#c300ff32]"
                                >
                                  <option
                                    disabled
                                    selected
                                    value=""
                                    className="absolute right-[2em]"
                                  >
                                    분류
                                  </option>
                                  <option value="사내공지">사내공지</option>
                                  <option value="프로젝트">프로젝트</option>
                                  <option value="설치관련">설치관련</option>
                                  <option value="어플관련">어플관련</option>
                                  <option value="웹관련">웹관련</option>
                                </select>
                              </BgCategory>

                              <span className="w-[10px]" />
                              <input
                                id="notice hashtag"
                                type="text"
                                placeholder="#NAME"
                                className="w-[24em] px-[1em] outline outline-[#0000ff6a] rounded-md"
                              />
                            </LiOpenModalToPencil>
                            <LiOpenModalToPencil className="flex justify-center mt-[1em]">
                              <TextareaAutosize
                                id="notice textarea"
                                style={{
                                  boxSizing: "border-box",
                                  width: "28vw",
                                  resize: "none",
                                  height: 500,
                                }}
                                minRows={22.7}
                                maxRows={22.7}
                                placeholder="MEMO"
                                className="outline outline-[#0000ff6a] rounded-md "
                              />
                            </LiOpenModalToPencil>
                            <li className="flex justify-end">
                              <input
                                type="submit"
                                value="등록"
                                className="px-[1em] py-[0.2em] mt-[10px] mr-[1.3em] outline outline-[#0000ff6a] rounded-md font-semibold text-[#000000]
                            bg-[#0000ff28] hover:bg-[#0000ff5a] active:bg-[#0000ff7a] hover:outline-[#0000ff90] active:outline-[#0000ffa5]
                            hover:text-[white] active:text-black"
                              />
                            </li>
                          </ul>
                        </FormOpenModalToPencil>
                      </DivOpenModalToPencil>
                    </div>
                  </Popup>
                </li>
              </ul>
            </h2>
            {/* 공지사항 리스트 */}
            <div className="mt-[2em] ml-[3.5em] w-[80vw] h-[65vh] outline">
              <div className="flex h-[65vh] text-center text-[20px]">
                <div className="absoulte top-0 w-[77em] h-[3em] outline ">
                  <ul className="">
                    <h3 className="">분류</h3>
                    <h4>게시글</h4>
                    <h5>게시자</h5>
                    <h6>게시일</h6>
                  </ul>
                  <ul className="w-[10%]">
                    <div className="">
                      <li>Hi</li>
                    </div>
                  </ul>
                  <ul className="w-[62%] outline outline-[2px] outline-[#0000002d]">
                    <li>Im</li>
                  </ul>
                  <ul className="w-[13%]">
                    <li>PDS</li>
                  </ul>
                  <ul className="w-[15%] outline outline-[2px] outline-[#0000002d]">
                    <li>2022.10.21 (금) </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Notice);

const colorChange = keyframes`
  100% {
     background-color:#0000ff85;
     color:#000000
    }
    
    50% {
      background-color:#0000ff28;
      color:#9a9a9a80
    }
    0%{
      background-color:#0000ff85;
      color:#000000
    }

`;

const BgCategory = Styled.div`{
  animation-name: Select;
  animation:${colorChange} 1.2s linear infinite;

}`;

// Div modal

const DivmodalToPencil = keyframes`
  100%{
  }
  50%{
  }
  0% {
    padding-bottom: 00px;
    margin-bottom: 00px;
    width: 00px;
    height:00px;
  }
`;

const DivOpenModalToPencil = Styled.div`{
  animation-name: DivOpenModalToPencil;
  animation:${DivmodalToPencil} 0.5s;
  position: absolute;
}`;

//  Form Modal

const FormModalToPencil = keyframes`
  100%{
  }
  50%{
  }
  0% {
    margin-bottom: 300px;
    padding-left: 600px;
    
  }
`;

const FormOpenModalToPencil = Styled.form`{
  animation-name: FormOpenModalToPencil;
  animation:${FormModalToPencil} 0.5s;
}`;

// Li Modal

const LiModalToPencil = keyframes`
  100% {
    width: 580px;
    height: -200px;
  }

  0% {
    height: 0px;
    width: 580px;
  }
`;

const LiOpenModalToPencil = Styled.li`{
  animation-name: LiOpenModalToPencil;
  animation:${LiModalToPencil} 0.5s;
}`;
