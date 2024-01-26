import { useState } from "react"

export const AgregarTarea = () => {
    const [inputvalue, setinputvalue] = useState('')
    const onInputChange=(event)=>{
        setinputvalue(event.target.value)
    }
    return (
        <input
            type="text"
            placeholder="Ingresa tarea nueva"
            value={inputvalue}
            onChange={onInputChange}
        />
    )
}
