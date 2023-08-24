import React from "react";
import StartPage from "@components/StartPage";
import type { NextPage } from "next";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import ResponsiveAll from "@components/hooks/ResponsiveAll";

// export function useIsMobile() {
//   const [isMobile, setIsMobile] = useState(false);
//   const mobile = useMediaQuery({ query: "(max-width: 767px)" });
//   useEffect(() => {
//     setIsMobile(mobile);
//   }, [mobile]);
//   return isMobile;
// }

const Home: NextPage = () => {
  // const isMobile = useIsMobile();
  // const isPc = useMediaQuery({
  //   query: "(min-width : 1024px) and (max-width : 1920px)",
  // });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 767px)",
  // });

  return (
    <div>
      <StartPage></StartPage>
    </div>

    // <div>
    //   <div
    // style={{
    //   display: "flex",
    //   flexDirection: isMobile ? "column" : "row",
    // }}
    //   >
    //     {isPc && (
    //       <p>
    //         <StartPage />
    //       </p>
    //     )}
    //   </div>
    //   <div>
    //     {isTablet && (
    //       <p>
    //         <StartPage />
    //       </p>
    //     )}
    //   </div>
    //   <div>
    //     {isMobile && (
    //       <p>
    //         <StartPage />
    //       </p>
    //     )}
    //   </div>
    // </div>
  );
};

export default Home;
