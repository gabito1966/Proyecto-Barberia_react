import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { ProductosContext } from '../context/ProductosContext'
import { Card } from './Card'
import './ProductosComponent.css'
import ProductoBanner from '/images/producto-bg.jpg'

export const ProductosComponent = () => {
   
    const {productos} = useContext(ProductosContext)
    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }

    return (
        <body>
            <div className='container-fluid text-center'>
                <img className='img-fluid' width={1200} height={300} src={ProductoBanner} alt="Producto banner" />
            </div>
            <div className="container mt-5 producto">
                <h1 className='text-center'>Productos:</h1>
                <hr />
                <div className='product'>
                    {productos.map(producto => (
                        <Card
                            key={producto.id}
                            image={producto.image}
                            family={producto.family}
                            title={producto.title}
                            price={producto.price}
                            handleAgregar= {()=> handleAgregar(producto)}
                            handleQuitar={() => handleQuitar(producto.id)}
                        >
                        </Card>
                    ))}
                </div>
            </div>
        </body>
    )

}

