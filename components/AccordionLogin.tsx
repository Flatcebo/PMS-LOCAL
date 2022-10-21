// id,password true,false setting
// login button design

import { Router, useRouter } from "next/router";
import { useState } from "react";

import styled, { keyframes } from "styled-components";

const LoginAccordion = () => {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const [PressEnter, setPressEnter] = useState(true);

  // const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   setPressEnter;
  //   if (e.key === "Enter")
  //     if (confirm("자동 로그인 설정하시겠습니까?") == true) {
  //       router.push("/main");
  //     } else {
  //       router.push("/main");
  // }

  // console.log(e.currentTarget.value);
  // };

  // const onClickIn = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   if (confirm("자동 로그인 설정하시겠습니까?") == true) {
  //     router.push("/main");
  //   } else {
  //     router.push("/main");
  //   }
  // };

  return (
    <div className="grid justify-center">
      <label className="">
        <span>
          <IdInput>
            <input
              type="id"
              placeholder="Enter ID"
              className="flex py-3 px-5 border-hidden  text-[white] border bg-[#f7f7f700] my-3 hover:bg-[#ffffff1e]"
            />
          </IdInput>
        </span>
      </label>
      <PsInput>
        <input
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
          // onKeyDown={onKeyDownEnter
          className="py-3 px-5 bg-[#f7f7f700] text-[white] mb-2 hover:bg-[#ffffff1e]"
        />
      </PsInput>

      <div className="flex justify-center">
        <OkButton>
          <button
            type="submit"
            className="text-[1.5rem] text-[#90a0de] hover:text-[#ffffff1e]"
            // onClick={onClickIn}
          >
            확인
          </button>
        </OkButton>
      </div>
    </div>
  );
};

export default LoginAccordion;

const IdInput = styled.div`
  animation-duration: 1s;
  animation-name: Idinput;

  @keyframes Idinput {
    from {
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
  }
`;
const PsInput = styled.div`
  animation-duration: 2s;
  animation-name: PsInput;

  @keyframes PsInput {
    from {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
  }
`;

const OkButton = styled.div`
  animation-duration: 3s;
  animation-name: OkButton;

  @keyframes OkButton {
    from {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
  }
`;
