import React from 'react';
import { Download } from 'lucide-react';
import ResumeFile from '../../Assets/Resume.pdf';
import './Resume.css';

const PDFViewer = () => {
  return (
    <div className="pdf-container">
      {/* Main container */}
      <div className="main-card">
        {/* Download button at top */}
        <div className="button-container">
          <button 
            className="download-button"
            onClick={() => window.open(ResumeFile, '_blank')}
          >
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>

        {/* PDF preview placeholder */}
        <div className="pdf-preview">
          <object
            data={ResumeFile}
            type="application/pdf"
            className="pdf-object"
          >
            <p className="fallback-text">
              PDF cannot be displayed. Please use the download button to view the PDF.
            </p>
          </object>
        </div>

        {/* Download button at bottom */}
        <div className="button-container">
          <button 
            className="download-button"
            onClick={() => window.open(ResumeFile, '_blank')}
          >
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;