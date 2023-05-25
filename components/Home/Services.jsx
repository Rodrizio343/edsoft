import Service from "./Service"

const Services = ({ services }) => {
  return (
    <section className="services-section section-container">
      <h2>Nuestros servicios</h2>
      <div className="content-wrapper">
        {
          services && services.map( service => (
            <Service
              key={service.id}
              name={service.name}
              detail={service.detail}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Services