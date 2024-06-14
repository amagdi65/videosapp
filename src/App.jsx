import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Layout, Typography, Row, Col, Card, Spin } from 'antd';
import axios from 'axios';
import { videoData } from './data';
import './App.css';
import { UserOutlined, GlobalOutlined } from '@ant-design/icons';

const YouTube = lazy(() => import('react-youtube'));
const ScriptDisplay = lazy(() => import('./ScriptDisplay'));
const LanguageSelector = lazy(() => import('./LanguageSelector'));

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [language, setLanguage] = useState('ar');
  const [totalUsers, setTotalUsers] = useState(0);
  const [languageUsers, setLanguageUsers] = useState({});

  useEffect(() => {
    axios.post('http://localhost/videosapp/index.php/visit', { language });
    axios.get('http://localhost/videosapp/index.php/total-users')
      .then(response => setTotalUsers(response.data.totalUsers));

    axios.get('http://localhost/videosapp/index.php/language-users')
      .then(response => setLanguageUsers(response.data));
  }, [language]);

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <a href='https://manaratalharamain.gov.sa/' style={{cursor: "pointer"}}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />

        </a>
      </Header>
      <Content className="content">
        <Row gutter={[16, 16]} className="main-row">
          <Col xs={24} md={16}>
            <Card className="video-card">
              <Title level={4} className="video-title">{videoData[language].videoTitle}</Title>
              <div className="video-container">
                <Suspense fallback={<Spin />}>
                  <YouTube videoId={videoData[language].videoId} className="youtube-video" />
                </Suspense>
              </div>
              <Suspense fallback={<Spin />}>
                <audio controls className="audio-player">
                  <source src={videoData[language].audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </Suspense>
              <Suspense fallback={<Spin />}>
                <ScriptDisplay script={videoData[language].script} />
              </Suspense>
            </Card>
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
    </Layout>
  );
}

export default App;