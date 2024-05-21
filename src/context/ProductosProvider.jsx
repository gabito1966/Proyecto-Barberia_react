import { useEffect, useState } from "react"
import Productos from '../json/productos.json'
import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos(Productos)
    }, [])

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    )
}