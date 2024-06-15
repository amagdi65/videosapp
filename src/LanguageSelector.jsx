import React, { useState } from "react";
import { List, Typography, Input } from "antd";
import { videoData } from "./data";
import "./LanguageSelector.css";

const { Title } = Typography;
const { Search } = Input;

function LanguageSelector({ onLanguageChange, selectedLanguage }) {
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredLanguages = Object.keys(videoData).filter((lang) =>
    videoData[lang].title.toLowerCase().includes(filter)
  );

  return (
    <div className="language-selector">
      <div class="paragraph-container">
        <p>Choose the language</p>
        <p className="right-text">إختر اللغة</p>
      </div>
      <Search
        placeholder="Search languages"
        onChange={handleSearch}
        style={{ marginBottom: 20 }}
      />
      <List
        itemLayout="horizontal"
        dataSource={filteredLanguages}
        renderItem={(lang) => (
          <List.Item>
            <button
              className={`language-button ${
                selectedLanguage === lang ? "active" : ""
              }`}
              onClick={() => onLanguageChange(lang)}
            >
              <img
                src={videoData[lang].flag}
                alt={`${lang} flag`}
                className="flag-icon"
              />
              <span>{videoData[lang].title}</span>
            </button>
          </List.Item>
        )}
      />
    </div>
  );
}

export default LanguageSelector;
