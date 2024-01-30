import { UserList } from "./components/UserList"
import { useState } from "react"

export const UserApp = () => {

    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => {
        setEndPoint('comments')
    }
    return (
        <>
            <h1>Lista de Usuarios</h1>
            <UserList endPoint={endPoint} />
            <button onClick={handleFetch}>Aqui se llama a la API</button>
        </>
    )
}
