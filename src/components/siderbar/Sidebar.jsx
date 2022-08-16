import { Layout, Input, Button, Space, Row, Form } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, addNotes } from '../../store/notesSlice';

const { Sider } = Layout;

const Sidebar = ({ windowWith }) => {

  const [noteText, setNoteText] = useState('')

  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.getItem('notes') && dispatch(addNotes(JSON.parse(localStorage.notes)))
  }, [dispatch])

  const onNoteTextChanged = (event) => setNoteText(event.target.value)

  const onAddNoteClicked = () => {
    if (noteText) {
      const note = {
        id: notes.notes.length, 
        checked: false, 
        text: noteText
      }

      dispatch(addNote(note))

      localStorage.setItem('notes', JSON.stringify([...notes.notes, note]))
    }
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
            value={noteText} 
            onChange={onNoteTextChanged} 
          />
          <Space style={{ width: "100%", marginTop: "8px" }}>
            <Button onClick={onAddNoteClicked} style={{ width: "100%" }}>Add</Button>
            <Button style={{ width: "100%" }}>Clear</Button>
          </Space>
        </Form>
      </Space>
    </Sider>
  )
}

export default Sidebar