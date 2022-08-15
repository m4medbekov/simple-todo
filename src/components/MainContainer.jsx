import { Layout, Typography, Input, Button, Space, Row, Checkbox } from 'antd';
const { Header, Footer, Content, Sider } = Layout;
const { Title } = Typography

const MainContainer = () => {
  return (
    <>
      <Layout style={{ width: "50%", margin: "auto", position: "relative", top: "20%" }}>
        <Header style={{ height: "fit-content" }}>
          <Title style={{ color: "#fff", marginTop: "0.5em", display: "block" }}>Simple todo</Title>
        </Header>
        <Layout>
          <Sider theme='light' width={300} style={{ padding: 8, borderRight: "1px solid black" }}>
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
          <Content style={{ padding: 8, backgroundColor: "#fff" }}>
            <ul style={{ listStyle: "none", padding: "0 1em" }}>
              <li style={{ 
                backgroundColor: "#f0f2f5",
                padding: "0.5em 1em",
                margin: "0 0 0.5em 0",
                fontWeight: 600,
                textAlign: "left"
               }}
              >
                <Checkbox /><span>Доделать проект</span><span>❌</span>
              </li>
              <li style={{ 
                backgroundColor: "#f0f2f5",
                padding: "0.5em 1em",
                margin: "0 0 0.5em 0",
                fontWeight: 600,
                textAlign: "left"
               }}
              >
                <Checkbox /><span>Посмотреть Хэллбой 2019</span><span>❌</span>
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