import Banner from '../assets/img/barberia.jpeg'
import diferenciales from '../assets/img/diferenciales.jpg'
import utensilios from '../assets/img/utensilios.jpg'
import './MainComponent.css'


export const MainComponent = () => {
  return (
<body>
      <div className="container-fluid text-center">
        <img className="img-fluid" width={1200} height={300} src={Banner} />
      </div>
    <section className="container mt-5">
      <div className="main-principal text-center">
        <div className="principal">
          <h1 className="titulo-principal">SOBRE LA BARBERIA SCISSORS</h1>
          <img className="utensilios" src={utensilios} alt="utensilios de un barbero" />
          <p>Ubicada en el corazón de Belgrano, la <strong>Barberia Scissors</strong> trae para el mercado lo mejor para su cabello y barba. Fundada en 2022, la Barberia Scissors ya es destacada en la ciudad y conquista nuevos clientes diariamente.</p>
          <p id="mision"><em>Nuestra misión es: <strong>Proporcionar autoestima y calidad de vida a nuestros clientes</strong></em></p>
          <p>Ofrecemos profesionales experimentados que están constantemente observando los cambios y movimiento en el
            mundo de la moda, para así ofrecer a nuestros clientes las últimas tendencias. El atendimiento posee un
            padrón de excelencia y agilidad, garantizando calidad y satisfacción de nuestros clientes.</p>
        </div>
        <div className="diferenciales">
          <h2 className="titulo-principal">Diferenciales</h2>
          <div className="contenido-diferenciales">
            <ul className="lista-diferenciales">
              <li className="items">Atencion personalizada a los clientes</li>
              <li className="items">Espacio diferenciado</li>
              <li className="items">Localizacion</li>
              <li className="items">Profesionales calificados</li>
              <li className="items">Puntualidad</li>
              <li className="items">Limpieza</li>
            </ul><img className="imagen-diferenciales" src={diferenciales} />
          </div>
            
          <div className="video">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
    </body>
  )
}
