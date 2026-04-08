function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-heading-block">
          <span className="section-tag">Servicios</span>
          <h2>Soluciones pensadas para cada tipo de envío</h2>
          <p>
            Ofrecemos opciones flexibles para particulares, negocios y operaciones logísticas de mayor escala.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <h3>Envío estándar</h3>
            <p>Ideal para entregas nacionales con costo eficiente y cobertura amplia.</p>
          </article>

          <article className="service-card">
            <h3>Envío exprés</h3>
            <p>Servicio rápido para paquetes urgentes con mayor prioridad de traslado.</p>
          </article>

          <article className="service-card">
            <h3>Recolección a domicilio</h3>
            <p>Solicita recolección desde tu ubicación para agilizar el proceso logístico.</p>
          </article>

          <article className="service-card">
            <h3>Soluciones empresariales</h3>
            <p>Opciones para negocios con alto volumen, seguimiento y atención personalizada.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;