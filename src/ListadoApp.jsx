
import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto ? '✅' : '⛔'}
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
        { id:1 ,nombre: 'Instalaciones necesarias', visto: true },
        { id:2 ,nombre: "vite", visto: true },
        { id:3 ,nombre: "variables", visto: true },
        { id:4 ,nombre: "react", visto: true },
        { id:5 ,nombre: "componentes", visto: true },
        { id:6 ,nombre: "props", visto: true },
        { id:7 ,nombre: "customHooks", visto: false },
        { id:8 ,nombre: "redux", visto: false },
    ]

    const [arreglo, setarreglo] = useState(listadoSecciones)

    const onAgregarTarea = (val) => {
        let valor=val.trim()
        if (valor<1) return
        const envio={
            id:arreglo.length+1,
            nombre:valor,
            visto:false
        }

        setarreglo([...arreglo,envio])
    }

    return (
        <>
            <h1>Listado de temas del curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea} />
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>

        </>
    )
}
