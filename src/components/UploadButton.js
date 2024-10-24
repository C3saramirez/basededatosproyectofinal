// src/components/UploadButton.js
import React from 'react';

const UploadButton = () => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    // Aquí iría la lógica para subir el archivo
    alert(`Subiendo archivo: ${file.name}`);
  };

  return (
    <div className="mb-4">
      <input type="file" onChange={handleUpload} className="border p-2 rounded" />
    </div>
  );
};

export default UploadButton;
