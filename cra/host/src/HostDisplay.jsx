import React from 'react'

export default function HostDisplay({ user }) {
  return (
    <div>
    <h1>{user.name}</h1>
    <p>Email: {user.email}</p>
    <p>Location: {user.location}</p>
    <p>Bio: {user.bio}</p>
  </div>
  )
}
