import { useState } from 'react';

function QuoteForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    origen: '',
    destino: '',
    peso: '',
    tipo_paquete: '',
    mensaje: ''
  });

  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setResultado('');

      const response = await fetch('http://localhost:3000/api/cotizaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          peso: Number(formData.peso)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al guardar cotización');
      }

      setResultado('Cotización enviada correctamente.');
      setFormData({
        nombre: '',
        telefono: '',
        correo: '',
        origen: '',
        destino: '',
        peso: '',
        tipo_paquete: '',
        mensaje: ''
      });
    } catch (error) {
      console.error(error);
      setResultado('No se pudo guardar la cotización.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="cotizacion" className="section">
      <div className="container">
        <div className="section-heading-block">
          <span className="section-tag">Cotización</span>
          <h2>Solicita una cotización</h2>
          <p>
            Completa tus datos para estimar tu envío y registrar tu solicitud.
          </p>
        </div>

        <div className="feature-box">
          <form className="feature-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo"
              value={formData.correo}
              onChange={handleChange}
            />

            <input
              type="text"
              name="origen"
              placeholder="Origen"
              value={formData.origen}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="destino"
              placeholder="Destino"
              value={formData.destino}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              step="0.01"
              name="peso"
              placeholder="Peso en kg"
              value={formData.peso}
              onChange={handleChange}
              required
            />

            <select
              name="tipo_paquete"
              value={formData.tipo_paquete}
              onChange={handleChange}
            >
              <option value="">Selecciona tipo de paquete</option>
              <option value="Documentos">Documentos</option>
              <option value="Caja pequeña">Caja pequeña</option>
              <option value="Caja mediana">Caja mediana</option>
              <option value="Caja grande">Caja grande</option>
            </select>

            <textarea
              name="mensaje"
              placeholder="Detalles adicionales"
              value={formData.mensaje}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Enviando...' : 'Solicitar cotización'}
            </button>
          </form>

          {resultado && <p className="result-box">{resultado}</p>}
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;