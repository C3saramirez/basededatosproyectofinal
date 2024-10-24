// src/components/DownloadButton.js
import React from 'react';

const DownloadButton = ({ certificate }) => {
  const handleDownload = () => {
    // Aquí iría la lógica para descargar el archivo
    alert(`Descargando ${certificate.name}`);
  };

  return (
    <button onClick={handleDownload} className="ml-2 bg-green-500 text-white px-2 py-1 rounded">
      Descargar
    </button>
  );
};

export default DownloadButton;
