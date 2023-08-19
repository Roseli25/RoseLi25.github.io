import React,{useState,useEffect} from 'react'

function Articles() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const Text = '博客内容持续更新中。。。。。';
    if (currentIndex < Text.length) {
      const intervalId = setInterval(() => {
        setText(prevText => prevText + Text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentIndex]);

  return <div
    style={{ fontFamily: 'Arial', fontSize: '16px', lineHeight: '2' }}
  >{text}</div>;
}

export default Articles
