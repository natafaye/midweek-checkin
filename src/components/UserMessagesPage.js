import React from 'react'
import { useParams } from 'react-router-dom'
import MessageForm from './MessageForm'
import MessageList from './MessageList'

export default function UserMessagesPage({ messageList, onSubmitForm }) {
    let { userId } = useParams();
    userId = parseInt(userId);

    const userMessages = messageList.filter(message => message.receiverUserId === userId)

    return (
        <div>
            <MessageList messageList={userMessages} />
            <MessageForm onSubmit={onSubmitForm} userId={userId} />
        </div>
    )
}
