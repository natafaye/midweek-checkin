import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MessageList from './MessageList';
import { TEST_MESSAGES, TEST_USERS } from './TEST_DATA';
import UserListBar from './UserListBar';

function App() {
  const [userList, setUserList] = useState(TEST_USERS)
  const [messageList, setMessageList] = useState(TEST_MESSAGES)

  const addMessage = (newMessageText, receiverUserId) => {
    const newMessage = {
      id: messageList[messageList.length - 1].id + 1, // hack for getting the next unique id
      text: newMessageText,
      receiverUserId: receiverUserId
    }

    setMessageList( [...messageList, newMessage] )
  }

  return (
    <div>
      <UserListBar userList={userList}/>
      <Routes>
        <Route path="/messages/:receiverId" element={<MessageList messageList={messageList} onFormSubmit={addMessage}/>}/>
      </Routes>
    </div>
  );
}

export default App;
