import { Layout, Input, Button, Space, Row } from 'antd';
const { Sider } = Layout;

const Sidebar = ({ windowWith }) => {
  return (
    <Sider 
        theme='light'
        width={windowWith <= 1024 ? "100%" : "300px"}
        style={{ 
          padding: 8, 
          borderRight: windowWith <= 1024 ? "none" : "1px solid black"
        }}
      >
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
  )
}

export default Sidebar