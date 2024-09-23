import { useState } from 'react';
import doc from '../../assets/document.svg';
import uploadfile from '../../assets/upload_doc.svg';

const FileUpload = ({ filePreviews, setFilePreviews, files, setFiles }) => {
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFilePreviews = selectedFiles.map((file) => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        return URL.createObjectURL(file);
      } else {
        return file.name;
      }
    });

    setFilePreviews((prevPreviews) => [...prevPreviews, ...newFilePreviews]);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // add files
  };

  const removeFilePreview = (index) => {
    setFilePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // remove corresponding file
  };

  const isFileUploaded = filePreviews.length > 0;

  return (
    <div>
      {filePreviews.length > 0 && (
        <div className="flex select-none flex-wrap gap-4 py-3">
          {filePreviews.map((preview, index) => (
            <div key={index} className="relative">
              {preview.startsWith('blob:') ? (
                preview.includes('video') ? (
                  <video
                    src={preview}
                    controls
                    className="h-36 w-36 rounded-lg object-cover"
                  />
                ) : (
                  <img
                    src={preview}
                    alt={`Preview ${index}`}
                    className="h-36 w-36 rounded-lg object-cover"
                    draggable="false"
                  />
                )
              ) : (
                <div className="flex h-36 w-36 items-center justify-center break-all rounded-lg bg-gray-200 p-2">
                  {preview}
                </div>
              )}
              <span
                className="absolute right-1 top-1 flex h-5 w-5 cursor-pointer justify-center rounded-full bg-gray-700 align-middle text-lg leading-none text-white hover:bg-gray-900"
                onClick={() => removeFilePreview(index)}
              >
                &times;
              </span>
            </div>
          ))}

          {filePreviews.length < 3 && (
            <label
              htmlFor="uploadfile"
              className={`cursor-pointer select-none rounded-xl bg-textarea px-14 py-5 ${isFileUploaded ? 'flex' : 'hidden'}`}
            >
              <img
                src={uploadfile}
                className="w-8"
                alt="Add more files"
                draggable="false"
              />
              <input
                type="file"
                id="uploadfile"
                accept="image/*,video/*"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </label>
          )}
        </div>
      )}

      <div className={`py-3 ${isFileUploaded ? 'hidden' : 'flex'}`}>
        <label
          htmlFor="documentfile"
          className="flex cursor-pointer select-none items-center gap-2 rounded-full border-[1px] border-border-muted bg-bg-primary px-4 py-2 text-sm font-semibold text-text-secondary"
        >
          <img src={doc} alt="document" className="w-4" draggable="false" />
          <span>File</span>
        </label>
        <input
          type="file"
          className="hidden"
          id="documentfile"
          accept="image/*,video/*"
          multiple
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileUpload;
