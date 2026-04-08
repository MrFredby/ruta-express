import { useState } from 'react';

type TrackingStatus = 'idle' | 'in-transit' | 'delivered' | 'out-for-delivery' | 'not-found' | 'invalid';

interface TrackingResult {
  code: string;
  message: string;
  status: TrackingStatus;
  location?: string;
  updatedAt?: string;
}

function TrackingForm() {
  const [trackingCode, setTrackingCode] = useState('');
  const [result, setResult] = useState<TrackingResult | null>(null);

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();

    if (!trackingCode.trim()) {
      setResult({
        code: '',
        message: 'Ingresa un número de guía válido.',
        status: 'invalid',
      });
      return;
    }

    const code = trackingCode.trim().toUpperCase();

    if (code === 'RX1001') {
      setResult({
        code,
        message: 'Tu paquete se encuentra en tránsito.',
        status: 'in-transit',
        location: 'Centro Logístico Guadalajara',
        updatedAt: 'Hoy, 11:40 AM',
      });
    } else if (code === 'RX1002') {
      setResult({
        code,
        message: 'Tu paquete ya fue entregado correctamente.',
        status: 'delivered',
        location: 'Zapopan, Jalisco',
        updatedAt: 'Hoy, 09:15 AM',
      });
    } else if (code === 'RX1003') {
      setResult({
        code,
        message: 'Tu paquete está en reparto.',
        status: 'out-for-delivery',
        location: 'Ruta local de entrega',
        updatedAt: 'Hoy, 08:10 AM',
      });
    } else {
      setResult({
        code,
        message: 'No se encontró información para esa guía.',
        status: 'not-found',
      });
    }
  }

  function getStatusLabel(status: TrackingStatus) {
    if (status === 'in-transit') return 'En tránsito';
    if (status === 'delivered') return 'Entregado';
    if (status === 'out-for-delivery') return 'En reparto';
    if (status === 'not-found') return 'No encontrado';
    if (status === 'invalid') return 'Entrada inválida';
    return 'Sin consulta';
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

          {result && (
            <div className={`tracking-result tracking-${result.status}`}>
              <div className="tracking-result-top">
                <span className="tracking-badge">{getStatusLabel(result.status)}</span>
                {result.code && <strong>Guía: {result.code}</strong>}
              </div>

              <p>{result.message}</p>

              {(result.location || result.updatedAt) && (
                <div className="tracking-meta">
                  {result.location && <span>Ubicación: {result.location}</span>}
                  {result.updatedAt && <span>Última actualización: {result.updatedAt}</span>}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TrackingForm;