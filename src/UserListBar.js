import React from 'react'
import { NavLink } from 'react-router-dom'
import { TEST_USERS } from './TEST_DATA'

export default function UserListBar({ userList }) {

    //const filteredUsers = TEST_USERS.filter(user => based on user selection)

    return (
        <div className="bg-light p-3">
            {userList.map(user => (
                <NavLink to={"/messages/" + user.id} key={user.id} className="me-3">{user.name}</NavLink>
            ))}
        </div>
    )
}
