import React from 'react';
import { useParams } from 'react-router-dom';

export default function Index() {
  const { surat } = useParams();
  return (
    <div>
      <h1>Surat : {surat}</h1>
    </div>
  );
}
