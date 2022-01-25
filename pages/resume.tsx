import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return <div><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
  <div className="absolute z-50 font-readex p-2 px-4 rounded-md right-0 text-xs sm:top-10 bg-slate-50 shadow-lg">
    <p>Scroll if not visible</p>
  </div>
<div style={{ height: '750px' }}>
    <Viewer
        fileUrl="/resume/Resume-(Akhil Raj).pdf"
        plugins={[
            defaultLayoutPluginInstance,
        ]}
    />
</div>
</Worker></div>;
}

export default Resume;
