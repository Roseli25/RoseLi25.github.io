import React from 'react';
import { Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import picture from './猫.png';
import backvideo from './Drifing 2022 (hor).mp4';

function Start() {
  return (
    <> 
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <video autoPlay loop muted style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
          <source src={backvideo} type="video/mp4" />
        </video>
        <div style={{ marginTop: "250px" }}>
          <Avatar size={200} src={picture} />
          <div style={{ marginTop: 50 }}>
            <Link to="/Blog/Menu"> 
              <Button type="primary" style={{ width: 200, height: 55 }}>进入我的世界</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;
