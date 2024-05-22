import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { CarritoContext } from '../context/CarritoContext';
import './NavBar.css';
import Logo from '/images/LogoBarberia.jpg';

export const NavBar = () => {
    const { listaCompras } = useContext(CarritoContext)
    return (
        <header>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-1">
                        <img className="img-fluid logo" src={Logo} />
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <h1 className="titulo">BARBERIA SCISSORS</h1>
                    </div>
                    <div className="col-5">
                        <nav className="navbar bg-body-tertiary">
                            <form className="container justify-content-start">
                                <NavLink to='/' className="btn btn-outline-light me-2" role="button">Home</NavLink>
                                <NavLink to='/servicios' className="btn btn-outline-light me-2" role="button">Servicios</NavLink>
                                <NavLink to='/productos' className="btn btn-outline-light me-2" role="button">Productos</NavLink>
                                <NavLink to='/contacto' className="btn btn-outline-light me-2" role="button">Contacto</NavLink>
                                <NavLink to='/carrito' className="btn btn-outline-light me-2" role="button">
                                    <Badge badgeContent={listaCompras.length} MapsComponent color="success">
                                        <ShoppingCart size="large" />
                                    </Badge>
                                </NavLink>
                            </form>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
