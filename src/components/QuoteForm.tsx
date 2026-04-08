import { useState } from 'react';

function TrackingForm() {
  const [trackingCode, setTrackingCode] = useState('');
  const [result, setResult] = useState('');

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();

    if (!trackingCode.trim()) {
      setResult('Ingresa un número de guía válido.');
      return;
    }

    const code = trackingCode.trim().toUpperCase();

    if (code === 'RX1001') {
      setResult('Guía RX1001: En tránsito.');
    } else if (code === 'RX1002') {
      setResult('Guía RX1002: Entregado.');
    } else if (code === 'RX1003') {
      setResult('Guía RX1003: En reparto.');
    } else {
      setResult('No se encontró información para esa guía.');
    }
  }

  return (
    <section id="rastreo" className="section">
      <div className="container">
        <div className="section-heading-block">
          <span className="section-tag">Rastreo</span>
          <h2>Consulta el estado de tu envío</h2>
          <p>
            Ingresa tu número de guía para ver el avance de tu paquete.
          </p>
        </div>

        <div className="feature-box">
          <form className="feature-form" onSubmit={handleTrack}>
            <input
              type="text"
              placeholder="Ejemplo: RX1001"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Rastrear</button>
          </form>

          {result && <p className="result-box">{result}</p>}
        </div>
      </div>
    </section>
  );
}

export default TrackingForm;