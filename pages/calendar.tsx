import PageLayout from "@components/PageLayout";
import Messenger from "@components/Organization";
import React from "react";

const Calendar = () => {
  return (
    <div className="absolute h-full w-full bg-[#9a9a9a4b]">
      <PageLayout />
      <div className="absolute top-[10.2em] w-[87.2vw] h-[83vh] left-[15rem] font-Nanum-Gothic overflow-scroll scrollbar-hide">
        <div className="absolute inset-0 left-[5px] h-[83vh] w-full">
          <div className="absolute h-[61vh] w-[31vw] left-[15px] top-[100px] outline"></div>
          <div className="absolute right-[50px] h-[600px] w-[1000px] top-[100px] outline">
            HISTORY ZONE
          </div>
        </div>
        <Messenger />
      </div>
    </div>
  );
};

export default React.memo(Calendar);
