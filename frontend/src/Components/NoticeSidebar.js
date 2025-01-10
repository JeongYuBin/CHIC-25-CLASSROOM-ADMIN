import { Link } from "react-router-dom";
import "./css/sidebar.css";
import { useState, useEffect } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  const links = [
    {
      id: "notice-link",
      to: "/Home/Notice",
      text: "공지사항",
    },
    {
      id: "advertising-link",
      to: "/Home/Advertising",
      text: "광고/홍보",
    },
  ];

  return (
    <div>
      <button
        className={`sidebar-toggle-btn ${isOpen ? "hidden" : ""}`}
        onClick={toggleSidebar}
        aria-label="사이드바 열기"
      >
        ☰
      </button>

      <div
        className={`sidebar-container ${isOpen ? "open" : "closed"}`}
        onClick={toggleSidebar}
      >
        <aside
          id="sidebar"
          className="sidebar"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={toggleSidebar}
            className="sidebar-close"
            aria-label="사이드바 닫기"
          >
            X 닫기
          </button>
          <ul id="sidebar-links" className="sidebar-links">
            {links.map((link) => (
              <li key={link.id}>
                <Link id={link.id} to={link.to}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;