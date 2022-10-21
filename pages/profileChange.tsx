import React from "react";
import Messenger from "@components/Organization";
import PageLayout from "@components/PageLayout";

const ProfileChange = () => {
  return (
    <div className="absolute h-full w-full bg-[#9a9a9a4b]">
      <PageLayout />
      <div className="absolute w-[87.5%] h-[82.8%] left-[15.5em] top-[10.4em] outline">
        <div className="absolute h-[65px] w-[600px] top-[10px] left-[500px] outline">
          <h1 className="text-[2.5em] text-center">프로필 편집</h1>
        </div>
        <div className="absolute top-[150px] left-[100px] right-0 h-[30vh] w-[17vw] outline">
          <div className="absolute top-[20px] left-[60px] w-[200px] h-[200px] right-0 outline">
            image
          </div>
          <div className="absolute bottom-[20px] left-[37px] px-[30px] outline">
            <span className="text-[1.2em]">편집</span>
          </div>
          <div className="absolute bottom-[20px] right-[40px] px-[30px] outline">
            <span className="text-[1.2em]">삭제</span>
          </div>
        </div>
        <div
          id="personal zone"
          className="absolute left-[450px] h-[30vh] w-[37vw] top-[150px] outline"
        >
          <div id="name zone" className="absolute top-[50px] left-[30px]">
            <span className="text-[1.2em]">NAME</span>
            <input
              type="text"
              placeholder="Enter Name"
              className="ml-[20px] py-[0.7em] outline"
            />
          </div>
          <div
            id="class zone"
            className="absolute top-[44px] left-[350px] w-[12vw] h-[6vh] outline"
          >
            <div id="profile class" className="">
              <span className="absolute top-[15px] left-[20px] text-[1.2em]">
                CLASS
              </span>
            </div>
            <div className="absolute top-[15px] left-[110px]">
              <div className="text-[1.2em]">CCCCCCC</div>
            </div>
          </div>
          <div
            id="e-mail zone"
            className="absolute top-[150px] left-[20px] w-[15.5vw] h-[6vh] outline"
          >
            <div className="absolute top-[6px] left-[8px]">
              <span className="text-[1.2em]">e-mail</span>
              <input
                type="text"
                placeholder="Enter E-mail"
                className="ml-[20px] py-[0.7em] pr-[2em] outline"
              />
            </div>
          </div>
          Zone
        </div>
        <Messenger />
      </div>
    </div>
  );
};

export default React.memo(ProfileChange);
