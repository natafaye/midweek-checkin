import React from 'react'

export default function MessageList({ messageList }) {
  return (
    <div>
        { messageList.map(message => (
            <div className="border p-3 m-3" key={message.id}>
                { message.text }
            </div>
        ))}
    </div>
  )
}
