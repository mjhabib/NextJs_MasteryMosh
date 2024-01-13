'use client';
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import React, { useState } from 'react';

interface CloudinaryResult {
  public_id: string;
}

export default function UploadPage() {
  const [publicId, setPublicId] = useState('');

  return (
    <div>
      {publicId && (
        <CldImage src={publicId} width={270} height={170} alt='success image' />
      )}
      <CldUploadWidget
        uploadPreset='wka6vg1f'
        options={{
          sources: ['local'],
          cropping: true,
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className='btn btn-primary' onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}

// Steps to setup Cloudinary
// 01. npm install cloudinary
// 02. npm install next-cloudinary
// 03. add this line to the '.env' file: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
// 04. from next-cloudinary's docs, add required components like CldUploadWidget/CldImage to the project
// 05. create an 'upload preset' in cloudinary's setting dash, and pass the preset to the component
// customize the component in 'demo.cloudinary.com/uw' and add it to the project
