import React, { useState, useEffect } from 'react';
import { Avatar, Row, Col, Modal } from 'antd';
import mao from './图片/猫.png'
import wx from './图片/微信二维码.jpg'
import { WechatOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

function Resume() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const introText = '我叫李天成，湖北大学25届软件工程专业学生。这是我的个人网站，你可以通过本网站的各种信息来了解我，如果对我有兴趣，欢迎点击上方图标添加我的联系方式';
    if (currentIndex < introText.length) {
      const intervalId = setInterval(() => {
        setText(prevText => prevText + introText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentIndex]);
  const handleIconClick = (image) => {
    setModalVisible(true);
    setModalImage(image);
  };
  const handleGitClick = () => {
    window.open('https://github.com/Roseli25');
  };
  const handleMailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div>
      <Row justify="center">
        <Col span={24}>
          <div style={{ textAlign: 'center' ,marginTop:'150px'}}>
            <Avatar size={150} src={mao} />
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <WechatOutlined
              style={{ fontSize: '24px', marginRight: '16px' }}
              onClick={() => handleIconClick(wx)}
            />
            <GithubOutlined
              style={{ fontSize: '24px', marginRight: '16px' }}
              onClick={() => handleGitClick()}
            />
            <MailOutlined
              style={{ fontSize: '24px' }}
              onClick={() => handleMailClick("1310278434@qq.com")}
            />
            <Modal
              visible={modalVisible}
              onCancel={() => setModalVisible(false)}
              footer={null}
            >
              <img src={modalImage} alt="Modal" style={{ width: '100%' }} />
            </Modal>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            {text}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Resume;