import React, { useState } from "react";
import DetailModal from "./NoticeDetail";
import "./css/noticeRow.css";

const NoticeRow = ({ notice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <tr className="notice-page__row">
        <td className="notice-page__table-cell">{notice.date}</td>
        <td className="notice-page__table-cell">{notice.title}</td>
        <td className="notice-page__table-cell">{notice.writer}</td>
        <td className="notice-page__table-cell">
          <button
            className="notice-page__details-button"
            onClick={() => setIsModalOpen(true)}
          >
            상세보기
          </button>
        </td>
      </tr>

      {isModalOpen && (
        <DetailModal notice={notice} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default NoticeRow;
