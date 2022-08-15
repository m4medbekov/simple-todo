import { Layout, Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;

const HeaderTitle = () => {
  return (
    <Header style={{ height: "fit-content", backgroundColor: "#1890ff" }}>
      <Title style={{ color: "#fff", marginTop: "0.5em", display: "block" }}>Simple todo</Title>
    </Header>
  )
}

export default HeaderTitle;