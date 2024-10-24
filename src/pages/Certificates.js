import React from 'react';
import './Certificates.css';
import { Download } from 'lucide-react';

const CertificateTable = ({ certificates }) => {
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
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <td>{certificate.title}</td>
              <td>{certificate.author}</td>
              <td>{certificate.year}</td>
              <td>
                <a href={certificate.pdfUrl} download>
                  <button>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateTable