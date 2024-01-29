import { UserList } from "./components/UserList"
import { useState } from "react"

export const UserApp = () => {

    const [endPoint, setendPoint] = useState('users')

    const handleFetch = () => {
        setendPoint('comments')
    }
    return (
        <>
            <h1>Lista de Usuarios</h1>
            <UserList endPoint={endPoint} />
            <button onClick={handleFetch}>Aqui se llama a la API</button>
        </>
    )
}
