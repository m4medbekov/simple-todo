import { Layout, Input, Button, Space, Form } from 'antd';
import { useState } from 'react';

const { Sider } = Layout;

const Sidebar = ({ windowWith }) => {

  const [newNote, setNewNote] = useState('')

  const onNewNoteChange = (e) => {
    setNewNote(e.target.value)
  }

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
        <Form style={{ width: "100%" }}>
          <Input 
            placeholder="Type note"
            value={newNote}
            onChange={onNewNoteChange}
          />
          <Space style={{ width: "100%", marginTop: "8px" }}>
            <Button style={{ width: "100%" }}>Add</Button>
            <Button style={{ width: "100%" }}>Clear</Button>
          </Space>
        </Form>
      </Space>
    </Sider>
  )
}

export default Sidebar