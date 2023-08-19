import React from 'react';
import { Carousel } from 'antd';
import lanqiu from './篮球.mp4'
import jianshen from './健身.mp4'
import taiqiu from './台球.mp4'
import lvyou from './旅游.mp4'

const contentStyle = {
  margin: 0,
  height: '750px',
  color: '#364d79',
  lineHeight: '160px',
  textAlign: 'center'
};

function Life() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  
  return (
    <div>
      <Carousel afterChange={onChange} autoplay>
        <div>
          <h3 style={contentStyle}>
            <video src={lanqiu} controls height='750px'></video>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <video src={taiqiu} controls height='750px'></video>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <video src={lvyou} controls height='750px'></video>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <video src={jianshen} controls height='750px'></video>
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Life;