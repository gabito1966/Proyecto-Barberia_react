import { useState } from "react"
import './ProductosComponent.css'


export const Card = ({ id, image, family, title, price, handleAgregar, handleQuitar }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <div key={id} className="product__content">
            <img src={image} alt={title} className="product-img" />
            <div className="product__body">
                <h3 className="product__family">{family}</h3>
                <p className="product__title">{title}</p>
                <p className="product__price">$ {price}</p>
                {added
                    ? <button
                        type="submit"
                        className="btn btn-outline-danger"
                        onClick={clickQuitar}
                    >
                        Quitar del carrito
                    </button>
                    : <button
                        type="submit"
                        className="btn btn-outline-success"
                        onClick={clickAgregar}
                    >
                        Agregar al carrito
                    </button>
                }
            </div>
        </div>
    )
}
