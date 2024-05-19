import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu"
          src={assets.menu_icon}
          alt="menu_icon"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>새 채팅</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">최근</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message_icon" />
              <p>안녕하세요, Bard입니다!</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="buttom-item recent-entry">
          <img src={assets.question_icon} alt="qeustion_icon" />
          {extended ? <p>도움말</p> : null}
        </div>
        <div className="buttom-item recent-entry">
          <img src={assets.history_icon} alt="activity_icon" />
          {extended ? <p>활동</p> : null}
        </div>
        <div className="buttom-item recent-entry">
          <img src={assets.setting_icon} alt="settings_icon" />
          {extended ? <p>설정</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
