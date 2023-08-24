import React, { useRef } from "react";
import ProfileChanges from "@components/ProfileChanges";
import ReactToPrint from "react-to-print";
import { BsWindowSidebar } from "react-icons/bs";

// const SimpleComponent = (props: any) => {

//   return (
//     <div >
//       <div className="h-[10rem] w-[5rem] outline">aass</div>
//       <ProfileChanges  />
//     </div>
//   );
// };
const ProfileChange = (props: any) => {
  const { printRef } = props;
  const componentRef = useRef(null);
  return (
    <div ref={printRef}>
      <ReactToPrint
        trigger={() => <button>프린트하기</button>}
        content={() => componentRef.current}
      />

      <ProfileChanges printRef={componentRef} />
    </div>
  );
};

export default React.memo(ProfileChange);
