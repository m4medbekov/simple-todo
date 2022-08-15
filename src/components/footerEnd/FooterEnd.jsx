import { Layout, Typography } from 'antd';
const { Title } = Typography;
const { Footer } = Layout;

const FooterEnd = ({ windowWith }) => {
  return (
    <Footer style={{ position: windowWith <= 1024 ? "fixed" : "relative", bottom: 0, width: "100%", padding: "5px 50px" }}>
      <Title style={{ margin: 0 }} level={5}>© MRA 2022</Title>
    </Footer>
  )
}

export default FooterEnd