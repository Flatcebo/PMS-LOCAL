import PageLayout from "@components/PageLayout";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Popup from "reactjs-popup";
import WheelPicker from "react-simple-wheel-picker";
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import Messenger from "@components/Organization";

const data = [
  {
    id: "1",
    value: "PMS",
  },
  {
    id: "2",
    value: "APP",
  },
];

const ScoreBoard = () => {
  const [PressEnter, setPressEnter] = useState(true);

  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setPressEnter;
    if ((e.key === "Enter", e.shiftKey)) {
      return;
    } else if (e.key === "Enter") {
      {
        confirm("저장 하시겠습니까?") === true;
      }
    }
  };

  const onChangeProjects = (target: any) => {
    console.log(target);
  };

  return (
    <div className="absolute h-full w-full bg-[#9a9a9a4b]">
      <PageLayout />
      <div className="absolute w-[87.5vw] h-[83vh] left-[15rem] top-[10.2em] font-Nanum-Gothic overflow-scroll scrollbar-hide">
        <div className="absolute inset-0 h-[795px] w-[88%] b-[#171cb624]">
          <div className="absolute top-[8px] left-[13px] h-[70px] w-[84.8vw] outline outline-[#b6173f68] rounded-md ">
            <h1>MONTH</h1>
            <Popup
              trigger={
                <ProjectShoot>
                  <button className="button absolute top-[18px] right-[20px] px-[20px] pt-[3px] text-[20px] outline outline-[#5417b698] bg-[#5417b660] text-[white] rounded-full font-semibold tracking-[2px] hover:bg-[#5417b680] hover:outline-[#5417b6dd] hover:text-[#ffffff8a] focus:text-[#ffffffcf]">
                    PROJECT
                  </button>
                </ProjectShoot>
              }
              modal
            >
              <div className="absolute -top-[302px] -left-[10px] border border-x-[300px] border-y-[30px] border-[#5417b634] outline outline-[#5417b658] rounded-md ">
                <div className="absolute -top-[30px] -left-[250px] text-[30px]">
                  <div className="tracking-[3px] text-[24px] font-semibold uppercase">
                    <WheelPicker
                      data={data}
                      onChange={onChangeProjects}
                      height={59}
                      width={170}
                      titleText="Enter value same as aria-label"
                      itemHeight={50}
                      selectedID={data[0].id}
                      color="#cccccc0"
                      backgroundColor="#ffffff0"
                      focusColor="#9a9a9a0"
                      shadowColor="#9a9a9a0"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[170px]">
                    <ProgressBar1>
                      <ProgressBar
                        className="rounded-none"
                        completed={100}
                        width="380px"
                        height="60px"
                        bgColor="#5417b66f"
                        borderRadius="6px"
                      />
                    </ProgressBar1>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
          <div className="absolute top-[90px] h-[300px] w-full left-3 ">
            <h1 className="absolute px-[30px] py-[79px] outline outline-[#b6173f68] rounded-md text-[22px] leading-[26px]">
              <p>처</p>
              <p>리</p>
              <p>업</p>
              <p>무</p>
            </h1>
            <TextareaAutosize
              className="absolute left-[93px] outline outline-[#b6173f68] rounded-md text-[20px] text-opacity-40 text-center"
              style={{
                boxSizing: "border-box",
                width: "80vw",
                resize: "none",
              }}
              minRows={8.7}
              maxRows={8.7}
              placeholder="MEMO"
              // defaultValue="MEMO"
              onKeyDown={onKeyDownEnter}
            ></TextareaAutosize>
          </div>
          <div className="absolute top-[370px] h-[100px] w-full left-3">
            <h1 className="absolute px-[30px] py-[5px] outline outline-[#b6173f68] rounded-md text-[22px] leading-[26px]">
              <p>미</p>
              <p>처</p>
              <p>리</p>
              <p>업</p>
              <p>무</p>
            </h1>
            <TextareaAutosize
              className="absolute left-[93px] outline outline-[#b6173f68] rounded-md text-[20px] text-center text-opacity-40"
              style={{
                boxSizing: "border-box",
                width: "80vw",
                resize: "none",
              }}
              minRows={4.7}
              maxRows={4.7}
              placeholder="MEMO"
              // defaultValue="MEMO"
              onKeyDown={onKeyDownEnter}
            />
          </div>
          <div className="absolute top-[530px] h-[250px] w-full left-3">
            <h1 className="absolute px-[30px] py-[46px] outline outline-[#b6173f68] rounded-md text-[22px] leading-[26px]">
              <p>내</p>
              <p>일</p>
              <p>진</p>
              <p>행</p>
              <p>업</p>
              <p>무</p>
            </h1>
            <TextareaAutosize
              className="absolute left-[93px] outline outline-[#b6173f68] rounded-md text-[20px] text-opacity-40 text-center"
              style={{
                boxSizing: "border-box",
                width: "80vw",
                resize: "none",
              }}
              minRows={8.2}
              maxRows={8.2}
              placeholder="MEMO"
              // defaultValue="MEMO"
              onKeyDown={onKeyDownEnter}
            />
          </div>
        </div>
        <Messenger />
      </div>
    </div>
  );
};

export default React.memo(ScoreBoard);

const ProjectShoot = styled.div`
  animation-duration: 3s;
  animation-name: ProjectShoot;

  @keyframes ProjectShoot {
    from {
      margin-top: 100%;
      margin-left: 70%;
    }
  }
`;

const ProgressBar1 = styled.div`
  animation-duration: 3s;
  animation-name: ProgressBar1;

  @keyframes ProgressBar1 {
    from {
      margin-top: 0;
    }
  }
`;
