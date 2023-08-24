import PageLayout from "@components/PageLayout";
import { Notice } from "@prisma/client";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface NoticeItemsResponse {
  ok: boolean;
  notices: Notice[];
}

interface type {
  title?: never | string;
  categories: string;
  uploader: string;
  update: string;
  hashtag: string;
  content: string;
}

const Practice = ({}) => {
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

  return (
    <div>
      <PageLayout />
      <div className="absolute top-[300px] left-[300px] h-[400px] w-[400px]  outline">
        <ul>
          {noticeData.map(item => {
            return (
              <>
                <li>{item.title}</li>
                <li>{item.categories}</li>
                <li>{item.id}</li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Practice;
