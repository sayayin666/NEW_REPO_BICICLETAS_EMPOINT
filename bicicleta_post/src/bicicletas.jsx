import { useEffect, useState } from "react"

function Bicicletas() {
    const [marca,setMarca]=useState("")
    const [color,setColor]=useState("")
    const [precio,setPrecio]=useState(0)
    const [datos, setDatos]=useState([])
    async function guardar(e) {
        e.preventDefault() // <-- funcion para no recargar la pagina / siempre y cuando lo pongo cuando voy a almacenar
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/bicicletas', { // no es necesario guardar el await con una constante, porque no tiene valores en "response" <-- en el "Thunder"
            method:'POST',
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
            body:JSON.stringify({marca:marca, color:color, precio_alquiler:precio}) // campo: "marca", dato: "marca <-- esa es de la variable de estado", respetando el orden que se coloque en el body
        })
    }
    useEffect(() => {
        listado()
    }, [])
    async function listado() {
        const dats = await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/bicicletas', { // no es necesario guardar el await con una constante, porque no tiene valores en "response" <-- en el "Thunder"
            method:'GET',
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
            },
    })
    const resps = await dats.json() // para mostrar
    setDatos(resps)// para guardar 
}

    return(
        <div>
            <h1>guardar bicicletas</h1>
            <form onSubmit={guardar}>
                <input placeholder="escriba la marca" required onChange={(e) => setMarca(e.target.value)}></input>
                <marca></marca>
                <input placeholder="esciba el color" required onChange={(e) => setColor(e.target.value)}></input>
                <input placeholder="escriba el precio" required onChange={(e) => setPrecio(e.target.value)}></input>
                <button type="submit">Guardar</button>
            </form>
            <h1>listado de bicicletas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Marca</th>
                        <th>Color</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((d) => (
                        <tr>
                            <td>{d.id}</td>
                            <td>{d.marca}</td>
                            <td>{d.color}</td>
                            <td>{d.precio_alquiler}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Bicicletas
/*
se usa useState cuando debo almacenar cada input dentro de nuestro html
cuando sale error 404 es porque algun "empoint" no esta bien escrito
*/