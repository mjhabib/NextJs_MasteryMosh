import React from 'react';

interface PhotoIdProps {
  params: {
    id: number;
    photoId: number;
  };
}

export default function UserPhotoIdPage({
  params: { id, photoId },
}: PhotoIdProps) {
  return (
    <div>
      UserPhotoIdPage {id} and {photoId}
    </div>
  );
}
