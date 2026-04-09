import { useState } from 'react';

interface TrackingResponse {
  found: boolean;
  code?: string;
  status?: string;
  message: string;
  location?: string;
  updatedAt?: string;
}

function TrackingForm() {
  const [trackingCode, setTrackingCode] = useState('');
  const [result, setResult] = useState<TrackingResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleTrack(e: React.FormEvent) {
    e.preventDefault();

    if (!trackingCode.trim()) {
      setResult({
        found: false,
        message: 'Ingresa un número de guía válido.'
      });
      return;
    }

    const code = trackingCode.trim().toUpperCase();

    try {
      setLoading(true);
      setResult(null);

      const response = await fetch(`http://localhost:3000/api/rastreo/${code}`);
      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({
        found: false,
        message: 'No se pudo consultar la guía. Verifica que el backend esté encendido.'
      });
    } finally {
      setLoading(false);
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
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Consultando...' : 'Rastrear'}
            </button>
          </form>

          {result && (
            <div className="result-box">
              {result.code && <p><strong>Guía:</strong> {result.code}</p>}
              {result.status && <p><strong>Estatus:</strong> {result.status}</p>}
              <p>{result.message}</p>
              {result.location && <p><strong>Ruta:</strong> {result.location}</p>}
              {result.updatedAt && <p><strong>Fecha:</strong> {result.updatedAt}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TrackingForm;