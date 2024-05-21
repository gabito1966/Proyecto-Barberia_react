import './ProductosContainer.css'


export const ProductosContainer = (props) => {
  return (
    <section className='container-fluid mt-5 productos__section'>
        <h1 className='text-center'>Productos:</h1>
        <hr />
      <div className="products__container">
        {props.children}
      </div>
    </section>
  )
}
