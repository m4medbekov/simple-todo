import { Checkbox } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'

const ContentBody = ({ windowWith, notes }) => {
  return (
    <Content style={{ padding: "8px 8px 0 8px", backgroundColor: "#fff", width: windowWith <= 1024 ? "100%" : 0 }}>
      <ul style={{ listStyle: "none", padding: 0, height: "none", overflow: windowWith <= 1024 ? "scroll" : "none" }}>
        {notes.map(element => {
          return (
            <li key={ element.id } style={{ 
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
              <Checkbox checked={element.checked} /><span style={{ width: "100%", marginLeft: "8px" }}>{element.text}</span><span>❌</span>
            </li>
          )
        })}
      </ul>
    </Content>
  )
}

export default ContentBody