function Coverage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading-block">
          <span className="section-tag">Cobertura</span>
          <h2>Red de envíos con alcance nacional</h2>
          <p>
            Operamos con cobertura estratégica para entregas urbanas, regionales y nacionales.
          </p>
        </div>

        <div className="coverage-grid">
          <article className="coverage-card">
            <h3>Nacional</h3>
            <p>Operación en principales ciudades y rutas de distribución en todo México.</p>
          </article>

          <article className="coverage-card">
            <h3>Urbano</h3>
            <p>Entrega rápida en zonas metropolitanas con mayor frecuencia operativa.</p>
          </article>

          <article className="coverage-card">
            <h3>Empresarial</h3>
            <p>Soluciones para negocios con recolecciones programadas y trazabilidad.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Coverage;