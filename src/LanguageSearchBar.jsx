import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { videoData } from "./data";
import "./LanguageSearchBar.css";

const { Option } = Select;

const LanguageSearchBar = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("arabic");

  useEffect(() => {
    if (videoData["arabic"]) {
      onLanguageChange("arabic");
    }
  }, [onLanguageChange]);

  const handleLanguageSelect = (value) => {
    onLanguageChange(value);
    setSelectedLanguage(value);
  };

  return (
    <div className="language-search-bar">
      <Select
        value={selectedLanguage}
        placeholder="Select a language"
        style={{ width: "100%" }}
        onChange={handleLanguageSelect}
        suffixIcon={<GlobalOutlined />}
      >
        {Object.keys(videoData).map((lang) => (
          <Option key={lang} value={lang}>
            <img
              src={videoData[lang]?.flag}
              alt={`${lang} flag`}
              className="flag-icon"
            />
            {videoData[lang]?.title}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSearchBar;
