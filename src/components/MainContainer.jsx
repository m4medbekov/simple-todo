import { Layout } from 'antd';
import { useState } from 'react';
import ContentBody from './contentBody/ContentBody';
import FooterEnd from './footerEnd/FooterEnd';
import HeaderTitle from './header/Header';
import Sidebar from './siderbar/Sidebar';

const MainContainer = () => {

  const [windowWith, setWindowWidth] = useState(window.outerWidth);

  const todoList = [
    { id: 0, checked: false, text: "Доделать проект" },
    { id: 1, checked: true, text: "Посмотреть Хэллбой 2019" }
  ]

  window.addEventListener("resize", (event) => {
    setWindowWidth(event.currentTarget.outerWidth);
  });

  return (
    <>
      <Layout style={{ 
          width: windowWith <= 1024 ? "100%" : "50%", 
          margin: "auto", 
          position: "relative", 
          top: windowWith <= 1024 ? 0 : "20%",
          height: windowWith <= 1024 ? "100vh" : "none"
        }}
      >
        <HeaderTitle />
        <Layout style={{ flexDirection: windowWith <= 1024 ? "column" : "row" }}>
          <Sidebar windowWith={ windowWith } />
          <ContentBody windowWith={ windowWith } todoList={ todoList } />
        </Layout>
        <FooterEnd />
      </Layout>
    </>
  )
}

export default MainContainer