import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function NewMessageForm({ onSubmit }) {
    const [messageValue, setMessageValue] = useState("")
    
    let { receiverId } = useParams();
    receiverId = parseInt(receiverId);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Add the message
        onSubmit(messageValue, receiverId)

        // Clear the form
        setMessageValue("")
    }

    return (
        <form>
            <textarea className='form-control' value={messageValue} onChange={(event) => setMessageValue(event.target.value)} />
            <button className="btn btn-success" onClick={handleSubmit}>Send</button>
        </form>
    )
}
