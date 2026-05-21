import React from 'react'
import { useEffect} from 'react'

const UseEffectApi = () => {
    const [users, setUsers] = React.useState([]);
    useffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
    },[])
  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseEffectApi