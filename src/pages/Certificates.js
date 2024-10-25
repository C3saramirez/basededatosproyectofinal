import React from 'react';
import './Certificates.css';
import { Download } from 'lucide-react';

const CertificateTable = ({ certificates }) => {
  let certificateItems = [];

  // Verificar si el array certificates existe y tiene elementos
  if (certificates && certificates.length > 0) {
    for (let i = 0; i < certificates.length; i++) {
      certificateItems.push(
        <tr key={certificates[i].id}>
          <td>{certificates[i].title}</td>
          <td>{certificates[i].author}</td>
          <td>{certificates[i].year}</td>
          <td>
            <a href={certificates[i].pdfUrl} download>
              <button>
                <Download className="h-4 w-4 mr-1" />
                Download
              </button>
            </a>
          </td>
        </tr>
      );
    }
  }

  // Renderizar la tabla siempre, incluso si no hay certificados
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {certificateItems.length > 0 ? (
            certificateItems
          ) : (
            <tr>
              <td colSpan="4">No hay certificados disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateTable;
