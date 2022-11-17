import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TopBar from './components/TopBar'
import UserMessagesPage from './components/UserMessagesPage'
import { TEST_MESSAGES, TEST_USERS } from './TEST_DATA'

export default function App() {
  const [userList, setUserList] = useState(TEST_USERS)
  const [messageList, setMessageList] = useState(TEST_MESSAGES)

  const addMessage = (newMessageData) => { // newMessageData = { text: "fdsfds", receiverUserId: 2 }
    const newMessage = {
      id: messageList[messageList.length - 1].id + 1, // hack when you don't want to think about = it makes a unique id
      ...newMessageData
    }
    
    setMessageList( [...messageList, newMessage] ) // set it to a copy with the new message on the end
  }

  return (
    <div>
      <TopBar userList={userList}/>
      <Routes>
        <Route path="/user/:userId" element={<UserMessagesPage messageList={messageList} onSubmitForm={addMessage} />}/>
      </Routes>
    </div>
  )
}
