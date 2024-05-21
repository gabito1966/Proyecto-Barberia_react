import { useEffect, useState } from 'react';
import servicioBanner from '../assets/img/servicios-bg.jpg';
import Servicios from '../json/servicios.json';
import './ServiciosComponent.css';


export const ServiciosComponent = ()=> {
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        setServicios(Servicios)
    }, [])
    return (
        <body>
            <div className='container-fluid text-center'>
                <img className='img-fluid' width={1200} height={300} src={servicioBanner} alt="Servicio banner" />
            </div>
            <div className="container mt-5 servicio">
                <h1 className='text-center'>Servicios:</h1>
                <hr />
                <div className="service">
                    {
                        servicios.map((servicio) => (
                            <div key={servicio.id} className='service__content'>
                                <div className="service__section">
                                    <img src={servicio.image} className="service__img" alt={servicio.id} />
                                    <div className="service__body">
                                        <h3 className="service__title">{servicio.title}</h3>
                                        <p className="service__description">{servicio.description}</p>
                                        <p className='service__price'><span>$</span>{servicio.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </body>
    )
}
