'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const ImageUploader = ({ onFileSelect, maxSizeMB = 5, acceptedFormats = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'] }) => {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [imageInfo, setImageInfo] = useState(null);
  const fileInputRef = useRef(null);

  const validateFile = useCallback((file) => {
    if (!acceptedFormats.includes(file.type)) {
      throw new Error(`Invalid file type. Accepted formats: ${acceptedFormats.join(', ')}`);
    }

    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      throw new Error(`File size must be less than ${maxSizeMB}MB`);
    }

    return true;
  }, [acceptedFormats, maxSizeMB]);

  const processFile = useCallback((file) => {
    setError(null);
    setUploadProgress(0);

    try {
      validateFile(file);

      const reader = new FileReader();

      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          const progress = (e.loaded / e.total) * 100;
          setUploadProgress(progress);
        }
      };

      reader.onloadend = () => {
        setPreview(reader.result);
        setUploadProgress(100);

        const img = document.createElement('img');
        img.onload = () => {
          setImageInfo({
            width: img.width,
            height: img.height,
            size: (file.size / 1024).toFixed(2) + ' KB',
            type: file.type.split('/')[1].toUpperCase(),
          });
        };
        img.src = reader.result;
      };

      reader.onerror = () => {
        setError('Failed to read file');
        setUploadProgress(0);
      };

      reader.readAsDataURL(file);
      onFileSelect(file);
    } catch (err) {
      setError(err.message);
      setUploadProgress(0);
    }
  }, [onFileSelect, validateFile]);

  const handleFileChange = useCallback((event) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  }, [processFile]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  }, [processFile]);

  const handleRemoveImage = useCallback(() => {
    setPreview(null);
    setImageInfo(null);
    setError(null);
    setUploadProgress(0);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [onFileSelect]);

  const handlePaste = useCallback((e) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith('image/')) {
        const file = items[i].getAsFile();
        if (file) {
          processFile(file);
          break;
        }
      }
    }
  }, [processFile]);

  return (
    <div
      className="w-full"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onPaste={handlePaste}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept={acceptedFormats.join(',')}
      />

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <span className="text-xl">⚠️</span>
          <span className="text-red-700 font-medium">{error}</span>
        </div>
      )}

      {/* Image Preview */}
      {preview ? (
        <div className="space-y-4">
          {/* Preview Container */}
          <div className="relative w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
            <Image
              src={preview}
              alt="Image preview"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>

          {/* Image Info */}
          {imageInfo && (
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-semibold">{imageInfo.type}</span>
              <span className="text-gray-400">•</span>
              <span>{imageInfo.width} × {imageInfo.height}</span>
              <span className="text-gray-400">•</span>
              <span>{imageInfo.size}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Change
            </button>
            <button
              type="button"
              onClick={handleRemoveImage}
              className="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Upload Placeholder */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`w-full p-8 rounded-lg border-2 border-dashed transition-all ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 bg-gray-50 hover:border-gray-400'
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="text-4xl">📁</div>
              <span className="text-base font-semibold text-gray-900">
                Click to upload or drag and drop
              </span>
              <span className="text-sm text-gray-600">
                PNG, JPG, WebP or GIF (max. {maxSizeMB}MB)
              </span>
              <span className="text-xs text-gray-500">
                You can also paste (Ctrl+V) an image
              </span>
            </div>
          </button>

          {/* Upload Progress Bar */}
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
