import React, { useEffect, useState } from 'react';

const CertificateTable = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Llama a la API para obtener las constancias
    fetch('/api/certificates')
      .then((response) => response.json())
      .then((data) => setCertificates(data))
      .catch((error) => console.error('Error al cargar las constancias:', error));
  }, []);

  if (certificates.length === 0) {
    return <p>No hay constancias disponibles.</p>;
  }

  return (
    <ul>
      {certificates.map((certificate) => (
        <li key={certificate.id} className="mb-2">
          {certificate.name}
        </li>
      ))}
    </ul>
  );
};

export default CertificateTable;
