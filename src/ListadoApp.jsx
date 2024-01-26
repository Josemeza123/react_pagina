
import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto && '✅'}
        </li>
    )
}

const addTask = () => {
    arreglo.push({ nombre: "nuevo", visto: false })
}

export const ListadoApp = () => {

    const addTask = () => {
        setarreglo([...arreglo, { nombre: "nuevo", visto: false }])
    }

    let listadoSecciones = [
        { nombre: 'Instalaciones necesarias', visto: true },
        { nombre: "vite", visto: true },
        { nombre: "variables", visto: true },
        { nombre: "react", visto: true },
        { nombre: "componentes", visto: true },
        { nombre: "props", visto: true },
        { nombre: "customHooks", visto: false },
        { nombre: "redux", visto: false },
    ]

    const [arreglo, setarreglo] = useState(listadoSecciones)
    return (
        <>
            <h1>Listado de temas del curso</h1>
            <AgregarTarea/>
            <ol>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>

        </>
    )
}
