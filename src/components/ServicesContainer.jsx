import './ServicesContainer.css'


export const ServicesContainer = (props) => {
    return (
        <section className='container-fluid mt-5 servicios__section'>
            <h1 className='text-center'>Servicios:</h1>
            <hr />
            <div className="services__container">
                {props.children}
            </div>
        </section>
    )
}
