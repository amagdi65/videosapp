import React, { useState, useEffect, Suspense, lazy, useRef } from "react";
import { Layout, Typography, Row, Col, Card, Spin , Alert} from "antd";
import axios from "axios";
import { videoData } from "./data";
import "./App.css";
import { Footer } from "antd/es/layout/layout";
const YouTube = lazy(() => import("react-youtube"));
const ScriptDisplay = lazy(() => import("./ScriptDisplay"));
const LanguageSelector = lazy(() => import("./LanguageSelector"));

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [language, setLanguage] = useState('ar');
  const audioRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    axios.post('http://localhost/videosapp/index.php/visit', { language });
  }, [language]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
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
            <Card className="audio-card">
              <div class="paragraph-container">
                <p>Soundtrack</p>
                <p className="right-text">تسجيل صوتي</p>
              </div>
              <Suspense fallback={<Spin />}>
                <audio ref={audioRef} controls className="audio-player" autoPlay>
                  <source src={videoData[language].audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </Suspense>
            </Card>
            <div className="scrollable-container">
                <Suspense fallback={<Spin />}>
                  <ScriptDisplay script={videoData[language].script} />
                </Suspense>
              </div>
              
              <Alert
                message={videoData[language].syncMessage}
                type="info"
                showIcon
                style={{ marginTop: 16 }}
              />
           
          </Col>
          <Col xs={24} md={8}>
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
