import React from 'react'
import { useParams } from 'react-router-dom';
import NewMessageForm from './NewMessageForm';

export default function MessageList({ messageList, onFormSubmit }) {
    let { receiverId } = useParams();
    receiverId = parseInt(receiverId);

    const messagesToReciever = messageList.filter(message => message.receiverUserId === receiverId)

    return (
        <>
            <div>
                {messagesToReciever.map(message => (
                    <div className="border p-3 m-3" key={message.id}>
                        {message.text}
                    </div>
                ))}
            </div>
            <NewMessageForm onSubmit={onFormSubmit}/>
        </>
    )
}
