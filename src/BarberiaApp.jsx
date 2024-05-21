import { Navigate, Route, Routes } from "react-router-dom"
import './BarberiaApp.css'
import { FooterComponent } from "./components/FooterComponent"
import { NavBar } from "./components/NavBar"
import { CarritoProvider } from "./context/CarritoProvider"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoPage } from "./pages/CarritoPage"
import { ContactoPage } from "./pages/ContactoPage"
import { HomePage } from "./pages/HomePage"
import { ProductosPage } from "./pages/ProductosPage"
import { ServiciosPage } from "./pages/ServiciosPage"

export const BarberiaApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<HomePage></HomePage>}></Route>
                        <Route path="/productos" element={<ProductosPage></ProductosPage>}></Route>
                        <Route path="/servicios" element={<ServiciosPage></ServiciosPage>}></Route>
                        <Route path="/contacto" element={<ContactoPage></ContactoPage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>} ></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
                <FooterComponent />
            </CarritoProvider>
        </ProductosProvider>
    )
}
