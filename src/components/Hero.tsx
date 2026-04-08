function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">Logística confiable y rápida</span>
          <h1>Soluciones de paquetería para envíos nacionales y empresariales</h1>
          <p>
            Rastrea tus paquetes, cotiza envíos y administra tus operaciones
            logísticas con una experiencia moderna, clara y profesional.
          </p>

          <div className="hero-buttons">
            <a href="#rastreo" className="btn btn-primary">Rastrear envío</a>
            <a href="#cotizador" className="btn btn-secondary">Cotizar ahora</a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Entrega segura y puntual</h3>
          <p>
            Cobertura nacional, seguimiento en tiempo real y soluciones adaptadas
            a empresas y clientes particulares.
          </p>

          <div className="hero-card-stats">
            <div>
              <strong>+12k</strong>
              <span>Envíos gestionados</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Entregas puntuales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;