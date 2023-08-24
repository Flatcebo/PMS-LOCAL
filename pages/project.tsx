// 시작일시는 캘린더 DB연동하기
// Popup 컴포넌트에서 에러 발생함.
// 진행자,참여자 클릭시 색 바꿀수 있는 이벤트 주기
// ------------------------------------------------------------
// 프로젝트 리스트 클릭하면 그 프로젝트에 관한 차트 등 정보 나오게 하기. (스코어보드 프로젝트 버튼이랑도 DB연동)
// 프로젝트 리스트 삭제 버튼도 만들기.
// 프로젝트 추가 폼에 프로젝트 기간 데이트 피커 보더 테두리 수정하기.
// 프로젝트 추가하는 기능 데이트 제거 기능 리렌더링 해보기

import React, { useState, useCallback, useRef } from "react";
import PageLayout from "@components/PageLayout";
import ProgressBar from "@ramonak/react-progress-bar";
import ChartDoghnut, { data } from "@components/ChartDoughnut";
import ChartLine from "@components/ChartLine";
import { MdAdd } from "react-icons/md";
import Popup from "reactjs-popup";
import DatePicker, { CalendarContainerProps } from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import { FaChevronRight } from "react-icons/fa";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import cn from "classnames";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import "react-datepicker/dist/react-datepicker.css";
import { render } from "react-dom";
import Messenger from "@components/Organization";
import Styled from "styled-components";

const Project = (props: any) => {
  const { printRef } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  interface ProjectForm {
    projectName: string;
    startDate: string;
    endDate: string;
  }
  // 프로젝트 기간 스타일
  // const MyContainer = ({ className, children }: CalendarContainerProps) => {
  //   return (
  //     <div style={{ padding: "16px", background: "#216ca585", color: "#fff" }}>
  //       <CalendarContainer className={className}>
  //         <div style={{ position: "relative" }}>{children}</div>
  //       </CalendarContainer>
  //     </div>
  //   );
  // };

  const { register, handleSubmit } = useForm<ProjectForm>();

  const onValid = async (validForm: ProjectForm) => {
    console.log(validForm);

    /*
    await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectForm: validForm,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    */
    return;
  };

  const [checked, setChecked] = useState(false);
  const onChangeChecked = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setChecked(any => !any);
  }, []);

  //프로젝트 추가

  const [names, setNames] = useState([{ id: 0, text: "" }]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1);

  const onChangeNames = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    },
    []
  );

  const onClickProjectAdd = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const nextNames = names.concat({
        id: nextId,
        text: inputText,
      });
      setNextId(nextId + 1);
      setNames(nextNames);
      setInputText("");
    },
    [names, inputText, nextId]
  );
  render;
  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

  return (
    <div className="absolute h-full w-full bg-[#9a9a9a4b]">
      <PageLayout />

      <div className="absolute w-[87.2vw] h-[83vh] left-[15rem] top-[10.2em] font-Nanum-Gothic overflow-scroll scrollbar-hide">
        <div className="absolute h-[83vh] w-[30vw] left-[5px]">
          <div
            className="absolute top-[30px] left-[15px] h-[76vh] w-[200px] text-center rounded-md bg-[#ffffffee] shadow-md
         shadow-[#1d1c1cdc]"
          >
            <h1 className="text-[24px] rounded-md ">PROJECT LIST</h1>
            <ul className="text-[18px] leading-10 ">
              {namesList}
              <li className="border-t-[3px] border-solid border-[#b6173f34] ">
                <Popup
                  trigger={
                    <button className="button pt-[7px] pb-[14px] px-[90px]">
                      <MdAdd />
                    </button>
                  }
                  modal
                >
                  <div className="absolute -top-[295px] -left-[487px] backdrop-blur-[4px] ">
                    <div className="flex border-x-[500px] border-y-[330px] rounded-xl border-[#5f17b637] ">
                      <form onSubmit={handleSubmit(onValid)}>
                        <div className="absolute top-[20px] right-[410px] ">
                          <div>
                            {/* 닫기 버튼 */}
                            {/* <button
                              className="button absolute top-[10px] -left-[380px] px-[10px] bg-[#1b2aaf27] text-[18px] text-[#ff000070] 
                            font-semibold outline outline-[#5f17b637] rounded-md hover:bg-[#0004ff48] hover:text-[#ff0000b0]"
                            >
                              닫기
                            </button> */}
                          </div>
                          <h1 className="text-[32px] font-bold text-[#1b2aafdd] ">
                            프로젝트 추가
                          </h1>
                          <div>
                            <button
                              type="submit"
                              className=" absolute top-[10px] -right-[370px] px-[10px] bg-[#1b2aaf27] text-[18px] text-[#1b74afa7]
                              font-semibold outline outline-[#5f17b637] rounded-md hover:bg-[#0004ff48] hover:text-[#1b74afe9]"
                              onClick={onClickProjectAdd}
                            >
                              추가
                            </button>
                          </div>
                        </div>
                        <div className="">
                          <div className="absolute top-[110px] left-[50px]">
                            <span className="text-[20px] font-semibold text-[#1b2aafdd] before:content-['*'] before:text-red-500">
                              프로젝트명
                            </span>

                            <input
                              {...register("projectName")}
                              type="text"
                              name="projectName"
                              placeholder="NAME"
                              className="px-[15px] py-[15px] ml-[20px] bg-[#1b2aaf27] text-[black] text-[18px] outline outline-[#5f17b637] rounded-md "
                              onChange={onChangeNames}
                            />
                          </div>
                          <div className="absolute top-[120px] left-[500px] h-[150px] w-[400px] ">
                            <span className="text-[20px] font-semibold text-[#1b2aafdd] ml-[10px] before:content-['*'] before:text-red-500">
                              프로젝트 기간
                            </span>

                            <div className="absolute top-[1px] left-[130px] ">
                              <DatePicker
                                {...register("startDate")}
                                dateFormat="yyyy/MM/dd"
                                selected={startDate}
                                onChange={(date: Date) => setStartDate(date)}
                                // calendarContainer={MyContainer}
                                className="text-center bg-[#1b2aaf27] hover:bg-[#5f17b637] w-[100px] text-[18px] ml-[20px] outline outline-[#5f17b637] rounded-md"
                              />
                            </div>
                            <div className="absolute -top-[6px] right-[117.5px]">
                              <span className="text-[25px] font-semibold text-[#1b2aafdd]">
                                ~
                              </span>
                            </div>
                            <div className="absolute top-[1px] right-[0px]">
                              <DatePicker
                                {...register("endDate")}
                                dateFormat="yyyy/MM/dd"
                                selected={endDate}
                                onChange={(date: Date) => setEndDate(date)}
                                className="text-center bg-[#1b2aaf27] hover:bg-[#5f17b637] w-[100px] text-[18px] outline outline-[#5f17b637] rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[420px] left-[150px]">
                          {/* <button
                            className="px-[15px] py-[0px] mr-[7px] text-[12px] text-[white] bg-[#ff000095] outline outline-[#1b2aafdd] rounded-md "
                            onClick={onChangeMode}
                          >
                            Click!
                          </button> */}
                          <div
                            className={cn("checkbox", { checked })}
                            onClick={onChangeChecked}
                          >
                            {checked ? (
                              <MdCheckBox />
                            ) : (
                              <MdCheckBoxOutlineBlank />
                            )}
                          </div>
                          <span className="text-[16px] font-semibold text-[#1b2aafdd]">
                            <span className="after:content-['*'] after:text-red-500">
                              진행자
                            </span>
                          </span>
                        </div>
                        <div className="absolute bottom-[420px] left-[310px]">
                          {/* <button className="px-[15px] py-[0px] mr-[7px] text-[12px] text-[white] bg-[#ffff0091] outline outline-[#1b2aafdd] rounded-md ">
                            Click!
                          </button> */}
                          <span className="text-[16px] font-semibold text-[#1b2aafdd]">
                            <span className="after:content-['*'] after:text-red-500">
                              참여자
                            </span>
                          </span>
                        </div>
                        <div className="absolute top-[260px] left-[30px] w-[937px] h-[370px] ">
                          <div className="absolute w-[150px] h-[370px] ">
                            <h1 className="text-[18px] text-center text-[#1b2aafdd] font-semibold bg-[#1b2aaf27] outline outline-[#5f17b637] rounded-md">
                              임원
                            </h1>

                            <div className="absolute -bottom-[5px] w-[150px] h-[340px] bg-[#1b2aaf16] outline outline-[#5f17b637] rounded-md overflow-y-scroll scrollbar-hide">
                              <ul className="text-center">
                                <li className="hover:bg-[#1b2aaf25]">
                                  <button className="">ㅇㅇㅇ 대표</button>
                                </li>
                                <li className="border-t-[2px] border-solid border-[#1b2aaf16] hover:bg-[#1b2aaf25]">
                                  <button>ㅁㅁㅁ 이사</button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="absolute left-[157px] w-[150px] h-[370px] ">
                            <h1 className="text-[18px] text-center text-[#1b2aafdd] font-semibold bg-[#1b2aaf27] outline outline-[#5f17b637] rounded-md">
                              관리직
                            </h1>
                            <div className="absolute -bottom-[5px] w-[150px] h-[340px] bg-[#1b2aaf16] outline outline-[#5f17b637] rounded-md overflow-y-scroll scrollbar-hide">
                              <ul className="text-center">
                                <li className="hover:bg-[#1b2aaf25]">
                                  ㅇㅇㅇ 과장
                                </li>
                                <li className="border-t-[2px] border-solid border-[#1b2aaf16] hover:bg-[#1b2aaf25]">
                                  ㅁㅁㅁ 대리
                                </li>
                              </ul>
                            </div>
                          </div>{" "}
                          <div className="absolute left-[314px] w-[150px] h-[370px]">
                            <h1 className="text-[18px] text-center text-[#1b2aafdd] font-semibold bg-[#1b2aaf27] outline outline-[#5f17b637] rounded-md">
                              일반직
                            </h1>
                            <div className="absolute -bottom-[5px] w-[150px] h-[340px] bg-[#1b2aaf16] outline outline-[#5f17b637] rounded-md overflow-y-scroll scrollbar-hide">
                              <ul className="text-center">
                                <li className="hover:bg-[#1b2aaf25]">
                                  ㅇㅇㅇ 사원
                                </li>
                                <li className="border-t-[2px] border-solid border-[#1b2aaf16] hover:bg-[#1b2aaf25]">
                                  ㅁㅁㅁ 주임
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="absolute top-[150px] right-[310px]">
                            <FaChevronRight size="48px" color="#1b2aafa1" />
                          </div>
                          <div className="absolute right-[0px] w-[200px] h-[370px] ">
                            <h1 className="text-[18px] text-center text-[#1b2aafdd] font-semibold bg-[#1b2aaf27] outline outline-[#5f17b637] rounded-md">
                              선택 완료
                            </h1>
                            <div className="absolute -bottom-[5px] w-[200px] h-[340px] bg-[#1b2aaf16] outline outline-[#5f17b637] rounded-md overflow-y-scroll scrollbar-hide">
                              <ul className="text-center">
                                <li>ㅇㅇㅇ 사원</li>
                                <li className="border-t-[2px] border-solid border-[#1b2aaf16]">
                                  ㅁㅁㅁ 주임
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Popup>
              </li>
              <li className="border-t-[3px] border-solid border-[#b6173f34]"></li>
            </ul>
          </div>
          <div className="absolute top-[30px] h-[77.2vh] w-[1420px] left-[230px]">
            <div
              className="inline-block h-[76vh] w-[400px] bg-[#ffffffee] shadow-md 
         shadow-[#1d1c1cdc] rounded-md"
            >
              <div className="h-[514px] w-[400px] rounded-md">
                <h1 className="text-center text-[28px]">MAIN CHART</h1>
                <ChartDoghnut />
              </div>

              <div className="absolute bottom-[12px] h-[260px] w-[400px] rounded-md">
                <h1 className="text-[28px] text-center -mt-[2.5px]">
                  LINE CHART
                </h1>
                <ChartLine />
                <ul>
                  <li></li>
                </ul>
              </div>
              <div
                className="absolute top-0 left-[420px] h-[76vh] w-[1000px] bg-[#ffffffee] shadow-md
         shadow-[#1d1c1cdc] rounded-md"
              >
                <div className="inline-block h-[100%] w-[150px] rounded-md text-center">
                  <h1 className="text-[20px]">People LIST</h1>

                  <ul className="text-[18px]">
                    <li>tobe</li>
                  </ul>
                </div>
                <div className="inline-block h-[100%] w-[830px] text-center ">
                  <h1 className="mb-0.5 text-[20px]">PERSONAL CHART</h1>
                  <div>
                    <ProgressBar
                      className=""
                      completed={100}
                      width="100%"
                      bgColor="#6ff06c"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Messenger />
      </div>
    </div>
  );
};

// before:content-['*'] before:text-red-500
export default React.memo(Project);

const ClosedForm = Styled.div`{
  display: none;
}`;
