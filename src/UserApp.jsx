import { useEffect, useState } from "react"


export const UserApp = () => {

    const [users, setusers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setusers(data)
        } catch {
            console.error(error)
        }
    }
    

    useEffect(() => {
        fetchUsers()
    }, [    ])


    return (
        <>
            <h1>Lista de Usuarios</h1>
            <ul>
               {users.map(user=><li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}
