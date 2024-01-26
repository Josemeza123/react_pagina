
const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto && '✅'}
        </li>
    )
}

export const ListadoApp = () => {
    return (
        <>
            <h1>Listado de temas del curso</h1>
            <ol>
                <Items nombre="Instalaciones necesarias" visto={true}></Items>
                <Items nombre="vite" visto={true}></Items>
                <Items nombre="variables" visto={true}></Items>
                <Items nombre="react" visto={true}></Items>
                <Items nombre="componentes" visto={true}></Items>
                <Items nombre="props" visto={true}></Items>
                <Items nombre="customHooks" visto={false}></Items>
                <Items nombre="redux" visto={false}></Items>
                <Items nombre="redux" visto={false}></Items>
            </ol>
        </>
    )
}
