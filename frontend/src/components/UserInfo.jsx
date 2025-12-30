import React from 'react'

const UserInfo = ({user, setUser}) => {
  return (
    <div className="card">
      <h2>Hi, {user.name}</h2>
      <span>email: {user.email}</span>
      <button onClick={()=>setUser()}>Log-Out</button>
    </div>
  )
}

export default UserInfo