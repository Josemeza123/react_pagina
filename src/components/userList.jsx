import { useFetchData } from "../hooks/useFetchData"


export const UserList = ({ endPoint }) => {

    const { data, isLoading } = useFetchData(endPoint)

    return (
        <>
            <ul>
                {isLoading ? <p>Cargando .....</p> : endPoint == 'users' ? data.map(user => <li key={user.id}>{user.name}</li>)
                    : data.map(user => <li key={user.id}>{user.body}</li>)}
            </ul>
        </>
    )
}
