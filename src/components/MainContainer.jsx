import { Layout, Typography, Input, Button, Space, Row } from 'antd';
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
                <Space>
                  <Row></Row>
                  <Button>Clear</Button>
                </Space>
              </Row>
            </Space>
          </Sider>
          <Content style={{ padding: 8 }}>Content</Content>
        </Layout>
        <Footer>
          <Title level={5}>© MRA 2022</Title>
        </Footer>
      </Layout>
    </>
  )
}

export default MainContainer