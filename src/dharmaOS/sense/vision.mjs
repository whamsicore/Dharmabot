import React, { useCallback } from 'react';
import html2canvas from 'html2canvas';
import { fileSystemInterface } from '../action/terminal.mjs';

const useScreenshot = () => {
  const takeScreenshotAndUpload = useCallback(() => {
    html2canvas(document.body).then(canvas => {
      canvas.toBlob(blob => {
        const formData = new FormData();
        formData.append('screenshot', blob, 'screenshot.png');
        
        // Assuming the existence of an API endpoint to handle the upload
        fetch('/api/upload/screenshot', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          console.log('Screenshot uploaded successfully', data);
          // Optionally, save the screenshot file path to the vision directory
          const visionDirectoryPath = '/vision/screenshot.png'; // Example path
          fileSystemInterface.createFile(visionDirectoryPath, blob)
            .then(message => console.log(message))
            .catch(error => console.error(error));
        })
        .catch(error => {
          console.error('Error uploading screenshot', error);
        });
      });
    });
  }, []);

  return { takeScreenshotAndUpload };
};

export { useScreenshot };
