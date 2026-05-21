import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Signup</h1>
        <label htmlFor="name">Name</label>
        <input type="text" 
         name="name"
          placeholder='Enter your name'
           />
           <label htmlFor="email">Email</label>
        <input type="email" 
         name="email"
            placeholder='Enter your email'
            />
            <label htmlFor="password">Password</label>
        <input type="password" 
         name="password"
          placeholder='Enter your password'
           />
    </div>
  )
}       


export default Signup