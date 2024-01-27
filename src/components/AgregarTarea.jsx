import { useState } from "react"

export const AgregarTarea = () => {
    const [inputvalue, setinputvalue] = useState('')
    const onInputChange = (event) => {
        setinputvalue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputvalue)
    }
    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresa tarea nueva"
                value={inputvalue}
                onChange={onInputChange}
            />
        </form>
    )
}
