import { Layout, Typography, Input, Button, Space, Row, Checkbox } from 'antd';
import { useState } from 'react';
const { Header, Footer, Content, Sider } = Layout;
const { Title } = Typography

const MainContainer = () => {

  const [windowWith, setWindowWidth] = useState(window.outerWidth);

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
        <Header style={{ height: "fit-content", backgroundColor: "#1890ff" }}>
          <Title style={{ color: "#fff", marginTop: "0.5em", display: "block" }}>Simple todo</Title>
        </Header>
        <Layout style={{ flexDirection: windowWith <= 1024 ? "column" : "row" }}>
          <Sider 
              theme='light'
              width={windowWith <= 1024 ? "100%" : "300px"}
              style={{ 
                padding: 8, 
                borderRight: windowWith <= 1024 ? "none" : "1px solid black"
              }}
            >
              {/* test */}
            <Space direction='vertical' style={{ width: "100%" }}>
              <Row>
                <Input placeholder="Basic usage" />
              </Row>
              <Row>
                <Space style={{ width: "100%" }}>
                  <Button style={{ width: "100%" }}>Add</Button>
                  <Button style={{ width: "100%" }}>Clear</Button>
                </Space>
              </Row>
            </Space>
          </Sider>
          <Content style={{ padding: "8px 8px 0 8px", backgroundColor: "#fff", width: windowWith <= 1024 ? "100%" : 0 }}>
            <ul style={{ listStyle: "none", padding: 0, height: "none", overflow: windowWith <= 1024 ? "scroll" : "none" }}>
              <li style={{ 
                backgroundColor: "#f0f2f5",
                padding: "0.5em 1em",
                margin: "0 0 0.5em 0",
                fontWeight: 600,
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
               }}
              >
                <Checkbox /><span style={{ width: "100%", marginLeft: "8px" }}>Доделать проект</span><span>❌</span>
              </li>
              <li style={{ 
                backgroundColor: "#f0f2f5",
                padding: "0.5em 1em",
                margin: "0 0 0.5em 0",
                fontWeight: 600,
                textAlign: "left",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
               }}
              >
                <Checkbox /><span style={{ width: "100%", marginLeft: "8px" }}>Посмотреть Хэллбой 2019</span><span>❌</span>
              </li>
            </ul>
          </Content>
        </Layout>
        <Footer>
          <Title level={5}>© MRA 2022</Title>
        </Footer>
      </Layout>
    </>
  )
}

export default MainContainer