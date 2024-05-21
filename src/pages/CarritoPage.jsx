import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import './CarritoPage.css'


export const CarritoPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const itemsTotal = () => {
        return listaCompras.reduce((total, item) => total + item.cantidad, 0).toFixed(0)
    }

    const handleAlert = () => {
        alert(`Compraste ${itemsTotal()} items y su valor es de ${calcularTotal()} pesos`)
        
    }

    return (
        <main>
            <table className="table__cart">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody className="container">
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td><span>$</span> {item.price}</td>
                                <td className="gap-2">
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => disminuirCantidad(item.id)}
                                    > - </button>
                                    <button className="btn btn-success">{item.cantidad}</button>
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => aumentarCantidad(item.id)}
                                    >+</button>
                                </td>
                                <td><button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => eliminarCompra(item.id)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                    <div className="container">
                        <th>TOTAL: </th>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>
                    </div>

                    <div className="container">
                        <th>CANTIDAD PRODUCTOS: </th>
                        <td></td>
                        <td></td>
                        <td className="items">{itemsTotal()}</td>
                    </div>

                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-outline-success fw-bold h-100"
                    onClick={handleAlert}
                    disabled={listaCompras < 1}
                >COMPRAR</button>
            </div>
        </main>
    )
}