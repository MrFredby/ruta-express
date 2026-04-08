function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading-block">
          <span className="section-tag">Testimonios</span>
          <h2>Empresas y clientes confían en nuestra operación</h2>
          <p>
            Nuestro servicio está diseñado para brindar trazabilidad, rapidez y confianza en cada envío.
          </p>
        </div>

        <div className="testimonials-grid">
          <article className="testimonial-card">
            <p>
              “RutaExpress nos ayudó a mejorar nuestros tiempos de entrega y la experiencia de nuestros clientes.”
            </p>
            <h3>Comercial Nova</h3>
            <span>E-commerce</span>
          </article>

          <article className="testimonial-card">
            <p>
              “La plataforma de rastreo y la claridad en la operación hacen que el servicio se sienta confiable y profesional.”
            </p>
            <h3>Distribuciones Atlas</h3>
            <span>Logística regional</span>
          </article>

          <article className="testimonial-card">
            <p>
              “La atención y el seguimiento en tiempo real nos dieron más control sobre nuestros envíos empresariales.”
            </p>
            <h3>Grupo Mercurio</h3>
            <span>Operación empresarial</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;