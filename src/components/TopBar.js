import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar({ userList }) {
  return (
    <div className="bg-light p-3">
        { userList.map(user => (
            <Link to={"/user/" + user.id} key={user.id} className="me-3">{ user.name }</Link>
        ))}
    </div>
  )
}
