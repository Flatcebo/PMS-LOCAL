import PageLayout from "@components/PageLayout";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProfileChanges(props: any) {
  const { printRef } = props;
  const [files, setFiles] = useState<File | null>(null);
  const [showImages, setShowImages] = useState<string[]>([]);
  const [items, setItems] = useState({});

  useEffect(() => {
    (async () => {
      const item = await (await fetch(`/api/admin`)).json();
      console.log(item);
      setItems(item);
    })();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files[0]);
    }

    const formData = new FormData();
    if (files) {
      formData.append("file", files);
    }

    const result: string = await fetch(`/api/images`, {
      method: "POST",
      body: formData,
      headers: {
        authorization:
          "Bearer zmk1g6n0xia2eq8f6pdy8rxrgwcjzs.d7iec3dk41357xcbqno59m8tnzf671pv5hz1ghtgiy33xujmk0.54da9zfdt5fgrtwr0hyb3o5loqjsqb",
      },
    })
      .then(res => res.json())
      .then(body => body.url);

    if (result) setShowImages([...showImages, result]);
  };

  const handleDelete = (idx: number) => {
    setShowImages([
      ...showImages.slice(0, idx),
      ...showImages.slice(idx + 1, showImages.length),
    ]);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="absolute h-full w-full overflow-scroll scrollbar-hide"
      ref={printRef}
    >
      <PageLayout />
      <div className="absolute top-[10.2em] w-[87.5vw] h-[83vh] left-[16rem] font-Nanums font-[700] bg-[#ffffff00] rounded-l-lg">
        <div className="absolute h-[6vh] w-[31vw] top-[10px] left-[31em] outline">
          <h1 className="text-[2.5em] text-center text-[white]">프로필 편집</h1>
        </div>
        <div className="absolute top-[150px] left-[100px] right-0 h-[30vh] w-[17vw] outline">
          {/* <div className="absolute top-[20px] left-[60px] w-[200px] h-[200px] right-0 outline">
            image
          </div>{" "} */}
          <div className="absolute bottom-[20px] left-[37px] px-[30px] outline">
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              ref={fileInputRef}
              className="h-[25vh] w-[10vw]"
            />
            {showImages.map((src, idx) => {
              return (
                <div>
                  <Image
                    src={src}
                    alt={`${src}`}
                    height={40}
                    width={40}
                    className="outline"
                  />
                  <button onClick={() => handleDelete(idx)}>X</button>{" "}
                </div>
              );
            })}
            {/* <span className="text-[1.2em]">편집</span> */}
          </div>
          {/* <div className="absolute bottom-[20px] right-[40px] px-[30px] outline"> */}
          {/* <span className="text-[1.2em]">삭제</span> */}
          {/* </div> */}
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
                type="email"
                placeholder="Enter E-mail"
                className="ml-[20px] py-[0.7em] pr-[2em] outline"
              />
            </div>
          </div>
          Zone
        </div>
        {/* <Messenger /> */}
      </div>
    </div>
  );
}
