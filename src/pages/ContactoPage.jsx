import contactoBanner from '../assets/img/contact-bg.jpg';
import './ContactoPage.css';

export const ContactoPage = () => {
  return (
    <body>
      <main className="contacto ">
        <div className="container-fluid text-center">
          <img className="img-fluid" width={1200} height={300} src={contactoBanner} />
        </div>
        <h2 className="titulo-secundario mt-5">CONTACTO</h2>
        <form className="formulario" id="formulario">
          <div className="row container">
            <div className="col-6"><label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id='name' />
            </div>
            <div className="col-6">
              <label htmlFor="phone" className="form-label">Telefono</label>
              <input type="text" className="form-control" id='phone' />
            </div>
            <div className="col-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="emai" />
            </div>
            <div className="col-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          
          <div className="form__contact justify-content-between">
                <fieldset>
                  <legend >¿Como le gustaria que lo contactemos?</legend>
                  <div className='d-flex justify-content-between'>
                    <label htmlFor="radio-email"><input type="radio" name="contacto" value="email" id="radio-email" />Email</label>
                    <label htmlFor="radio-telefono"><input type="radio" name="contacto" value="telefono"
                      id="radio-telefono" />Teléfono</label>
                    <label htmlFor="radio-whatsapp"><input type="radio" name="contacto" value="whatsapp" id="radio-whatsapp" />WhatsApp</label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>¿En cual horario prefiere ser atendido?</legend>
                  <select>
                    <option>Mañana</option>
                    <option>Tarde</option>
                    <option>Noche</option>
                  </select>
                </fieldset>
          </div>
          <div className="form-check form-switch mt-3">
            <input className="form-check-input" type="checkbox" role="switch" id="newsChecked" />
            <label className="form-check-label" htmlFor="newsChecked">¿Le gustaria recibir novedades de la Barbería Scissors?</label>
          </div>

          <div className='d-md-flex justify-content-md-center mt-3'>
            <button className='btn btn-secondary col-4 '>Enviar</button>
          </div>
        </form>
        <div className="horarios">
          <h2>Nuestros horarios</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lunes</td>
              <td>08hs-20hs</td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>08hs-20hs</td>
            </tr>
            <tr>
              <td>Miercoles</td>
              <td>08hs-20hs</td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>08hs-20hs</td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>08hs-20hs</td>
            </tr>
            <tr>
              <td>Sabado</td>
              <td>08hs-20hs</td>
            </tr>
          </tbody>
        </table>
      </main>
    </body >
  )
}
