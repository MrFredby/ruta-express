function Faq() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading-block">
          <span className="section-tag">Preguntas frecuentes</span>
          <h2>Información útil para tus envíos</h2>
          <p>
            Resolvemos algunas de las dudas más comunes de clientes y empresas.
          </p>
        </div>

        <div className="faq-list">
          <article className="faq-card">
            <h3>¿Cómo rastreo mi paquete?</h3>
            <p>Ingresa tu número de guía en la sección de rastreo para consultar su estado.</p>
          </article>

          <article className="faq-card">
            <h3>¿Puedo solicitar recolección a domicilio?</h3>
            <p>Sí, contamos con servicio de recolección programada en zonas disponibles.</p>
          </article>

          <article className="faq-card">
            <h3>¿Manejan envíos empresariales?</h3>
            <p>Sí, ofrecemos soluciones para negocios con volumen alto y atención personalizada.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Faq;