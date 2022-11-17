import { createSlice } from "@reduxjs/toolkit"


// NOT FULLY FUNCTIONAL CODE, JUST A GENERAL IDEA

const messagesSlice = createSlice({
    initialState: {
        messageList: TEST_MESSAGES
    },
    reducers: {
        addMessage: (state, action) => {
            const newMessage = {
                id: messageList[state.messageList.length - 1].id + 1, // hack when you don't want to think about = it makes a unique id
                ...action.payload
            }

            return { messageList: [...state.messageList, newMessage] } // set it to a copy with the new array in there
        }
    }
})

