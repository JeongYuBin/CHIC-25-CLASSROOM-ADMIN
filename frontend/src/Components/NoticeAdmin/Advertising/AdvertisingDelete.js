import React, { useState } from "react";
import "../../../Pages/css/Pages.css";
import "../css/noticeAdvertisingModal.css";
import AdvertisingRow from "./AdvertisingRow";

const AdvertisingDelete = ({ advertising, submit, onClose }) => {
  // 삭제할 공지글 선택 상태 관리
  const [selectedAdvertising, setSelectedAdvertising] = useState([]);

  // 공지글 선택 체크박스 생성
  const toggleSelectAdvertising = (id) => {
    setSelectedAdvertising((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
    );
  };

  if (!advertising || !Array.isArray(advertising)) return null; // advertising 배열이 넘어오지 않았거나, 배열이 아닐 경우 예외 처리

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header className="advertising-delete__header">
          <h1 className="advertising-delete__title">홍보/광고글 삭제</h1>
          <button className="modal-close" onClick={onClose}>
            ✖
          </button>
        </header>

        <div className="advertising-delete__main_div">
          <main className="advertising-delete__main">
            <table className="advertising-delete__table">
              <tbody>
                {advertising.map((advertisingItem, index) => (
                  <tr key={advertisingItem.id}>
                    <td>
                      <AdvertisingRow
                        key={index}
                        advertising={advertisingItem}
                      />
                    </td>
                    <td className="advertising-delete__td">
                      <input
                        type="checkbox"
                        checked={selectedAdvertising.includes(
                          advertisingItem.id
                        )}
                        onChange={() =>
                          toggleSelectAdvertising(advertisingItem.id)
                        }
                        className="advertising-delete__checkbox"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>

        <footer className="advertising-delete__footer">
          <button className="advertising-delete__submit" onClick={submit}>
            완료
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AdvertisingDelete;
