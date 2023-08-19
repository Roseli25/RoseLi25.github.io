import React, { useState, useEffect } from 'react';

function Menu() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const menuText = `欢迎来到我的个人网站，本站使用React框架以及Ant Design组件库。我是一名热爱技术的博主，力于分享我的学习心得、技术见解以及生活感悟。

    在我的网站中，你将会发现关于我所掌握的多样化技术栈的精彩内容。无论是前端开发还是后端编程，我都深研究并不断索创新。通过我的技术博客，你将获得最新的技术趋势、实用的开发技巧和解决问题的思路，帮助你在技术的海洋中航行自如。
    
    除了技术之外，我的网站也展示我的履历和简历。你可以了解到我的教育背景、工作经以及参与过项目。这些经历塑造了我对技术的热情和专业素养，也让我成为一个注重细节的人。
    
    然而，生活不只有代码和技术。在我的网站中，你还能探到我的生活点和兴趣爱好。我喜欢篮球、健身、电竞，这经历让我更加开视野、丰富思维通过与你分享我的生活，我希望能够激发你对活的热爱和探索的勇气。
    
    感谢你来到我的个人网站，我希望通过这个平台与你建立起诚的交流和分享。无论你技术新手还是资深开发者，无论你对技术抱有好奇还是追求高阶，我都希望够为你供有价值的内容和启发。让我们一起知识的海洋航行，共同成长，共同探索！！！！`;
    if (currentIndex < menuText.length) {
      const intervalId = setInterval(() => {
        setText(prevText => prevText + menuText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 30);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentIndex]);

  return <div
  style={{ fontFamily: 'Arial', fontSize: '16px', lineHeight: '2' }}
  >{text}</div>;
}

export default Menu;
