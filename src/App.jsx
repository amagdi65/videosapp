import React, { useState, useEffect, Suspense, lazy, useRef } from "react";
import { Layout, Typography, Row, Col, Card, Spin, Alert } from "antd";
import axios from "axios";
import { videoData } from "./data";
import ReactPlayer from 'react-player';
import "./App.css";
import { Footer } from "antd/es/layout/layout";

const YouTube = lazy(() => import("react-youtube"));
const ScriptDisplay = lazy(() => import("./ScriptDisplay"));
const LanguageSelector = lazy(() => import("./LanguageSelector"));
const LanguageSearchBar = lazy(() => import("./LanguageSearchBar"));

const { Header, Content } = Layout;
const { Title } = Typography;

// Loader function to dynamically import language scripts
const loadLanguage = async (language) => {
  const module = await import(`./data/${language}.js`);
  return module.script;
};

// Function to check if the current time is 12 PM or later in Saudi Arabia
const isNoonOrLaterInSaudi = () => {
  const now = new Date();
  const saudiOffset = 3 * 60; // Saudi Arabia is UTC+3
  const saudiTime = new Date(now.getTime() + (now.getTimezoneOffset() + saudiOffset) * 60000);

  const targetDate = new Date('2024-06-15T06:15:00Z');
  const saudiTargetDate = new Date(targetDate.getTime() + (saudiOffset * 60000));
  console.log(saudiTime,saudiTargetDate);
  return saudiTime >= saudiTargetDate;
};

function App() {
  const [language, setLanguage] = useState('ar');
  const [script, setScript] = useState('');
  const playerRef = useRef(null);

  useEffect(() => {
    loadLanguage(language)
      .then((loadedScript) => {
        setScript(loadedScript);
      })
      .catch((error) => console.error("Error loading language data", error));

    axios.post('https://www.wmn.gov.sa/videosback/index.php/visit', { language });
  }, [language]);

  useEffect(() => {
    if (playerRef.current) {
      if (language !== 'ar') {
        playerRef.current.setVolume(10);
      } else {
        playerRef.current.setVolume(100);
      }
    }
  }, [language]);

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
    if (language !== 'ar') {
      event.target.setVolume(10);
    } else {
      event.target.setVolume(100);
    }
    if (isNoonOrLaterInSaudi()) {
      event.target.playVideo(); // Ensure the video starts playing only if it's 12 PM or later
    }
  };

  const videoOptions = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <a
          href="https://manaratalharamain.gov.sa/"
          style={{ cursor: "pointer" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className="logo"
          />
        </a>
      </Header>
      <Content className="content">
        <Row gutter={[16, 16]} className="main-row">
          <Col xs={24} className="language-search-bar-mobile">
            <Card className="language-search-bar-card">
              <Suspense fallback={<Spin />}>
                <LanguageSearchBar
                  onLanguageChange={handleLanguageChange}
                />
              </Suspense>
            </Card>
          </Col>
          <Col xs={24} md={16}>
            <Card className="title-card">
              <Title level={2} className="video-title">
                {videoData[language].videoTitle}
              </Title>
            </Card>
            <div className="video-container">
              <Suspense fallback={<Spin />}>
                <YouTube 
                  videoId={videoData[language].videoId} 
                  opts={videoOptions} 
                  onReady={onPlayerReady} 
                  className="youtube-video" 
                />
              </Suspense>
            </div>
            {videoData[language].audio && (<Alert
              message={videoData[language].syncMessage}
              type="info"
              showIcon
              style={{ marginTop: 16 }}
            />)}
            {isNoonOrLaterInSaudi() && script && (
              <div className="scrollable-container" style={{marginBottom: '16px'}}>
                <Suspense fallback={<Spin />}>
                  <ScriptDisplay script={script} />
                </Suspense>
              </div>
            )}
            {isNoonOrLaterInSaudi() && videoData[language].audio && (
              <Card className="audio-card" style={{ marginTop: '16px' }}>
                <div className="paragraph-container">
                  <p>Soundtrack</p>
                  <p className="right-text">تسجيل صوتي</p>
                </div>
                <Suspense fallback={<Spin />}>
                  <ReactPlayer 
                    url={videoData[language].audio} 
                    playing={false} // Prevent auto-playing until 12 PM
                    controls 
                    className="audio-player" 
                    width="100%"
                    height="250px"
                  />
                </Suspense>
              </Card>
            )}
          </Col>
          <Col xs={24} md={8} className="language-selector-desktop">
            <Card className="language-selector-card">
              <Suspense fallback={<Spin />}>
                <LanguageSelector
                  onLanguageChange={handleLanguageChange}
                  selectedLanguage={language}
                />
              </Suspense>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer className="footer">
        جميع الحقوق محفوظة للهيئة العامة للعناية بشؤون الحرمين © 2024
      </Footer>
    </Layout>
  );
}

export default App;
