function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">RutaExpress</div>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#rastreo">Rastreo</a>
          <a href="#cotizador">Cotizador</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;