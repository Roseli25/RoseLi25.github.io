// import React, { useState } from 'react';
// import { Button, Steps, theme } from 'antd';
// import Describe from './Describe'; 

// const steps = [
//   {
//     title: '第一段',
//     content: <Describe />,
//   },
//   {
//     title: '第二段',
//     content: <Describe />,
//   },
//   {
//     title: '下一段旅程',
//     content: <Describe />,
//   },
// ];

// function Road() {
//   const { token } = theme.useToken();
//   const [current, setCurrent] = useState(0);
  
//   const next = () => {
//     setCurrent(current + 1);
//   };
  
//   const prev = () => {
//     setCurrent(current - 1);
//   };
  
//   const items = steps.map((item) => ({
//     key: item.title,
//     title: item.title,
//   }));
  
//   const contentStyle = {
//     borderRadius: token.borderRadiusLG,
//     border: `1px dashed ${token.colorBorder}`,
//     marginTop: 16,
//   };

//   return (
//     <>
//       <Steps current={current} items={items} />
//       <div style={contentStyle}>{steps[current].content}</div>
//       <div
//         style={{
//           marginTop: 24,
//         }}
//       >
//         {current < steps.length - 1 && (
//           <Button type="primary" onClick={() => next()}>
//             Next
//           </Button>
//         )}
//         {current > 0 && (
//           <Button
//             style={{
//               margin: '0 8px',
//             }}
//             onClick={() => prev()}
//           >
//             Previous
//           </Button>
//         )}
//       </div>
//     </>
//   );
// }

// export default Road;

import React, { useState } from 'react';
import { Steps, Descriptions } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: '第一家',
    content: (
      <Descriptions title="郴州市千方百剂大药房有限责任公司" layout="vertical">
        <Descriptions.Item label="岗位">前端开发工程师</Descriptions.Item>
        <Descriptions.Item label="时间">2022.06-2022.9</Descriptions.Item>
        <Descriptions.Item label="工作内容">使用WordPress设计公司官网，利用HTML/CSS/JS完成前端部署并上线网站</Descriptions.Item>
      </Descriptions>
    ),
  },
  {
    title: '第二家',
    content: (
      <Descriptions title="广州市玄道科技有限公司" layout="vertical">
        <Descriptions.Item label="岗位">全栈开发实习生</Descriptions.Item>
        <Descriptions.Item label="时间">2023.06-2023.09</Descriptions.Item>
        <Descriptions.Item label="工作内容">使用React/go完成公司任务</Descriptions.Item>
      </Descriptions>
    ),
  },
  {
    title: '第三家',
    content: (
      <Descriptions title="持续更新中。。。。" layout="vertical">
      </Descriptions>
    ),
  },
];

const Road = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = currentStep => {
    setCurrentStep(currentStep);
  };

  return (
    <div>
      <Steps current={currentStep} onChange={handleStepChange}>
        {steps.map(step => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>

      <div style={{ margin: '24px 0' }}>{steps[currentStep].content}</div>
    </div>
  );
};

export default Road;