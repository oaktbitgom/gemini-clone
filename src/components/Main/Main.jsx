import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Dev님, 안녕하세요</span>
          </p>
          <div>무엇을 도와드릴까요?</div>
        </div>
        <div className="cards">
          <div className="card">
            <p>기술 발전</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>외국어 문장</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>언어 학습 계획</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>제품의 장단점</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="여기에 프롬프트 입력" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini가 인물 등에 관한 부정확한 정보를 표시할 수 있으므로 대답을
            재확인하세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
