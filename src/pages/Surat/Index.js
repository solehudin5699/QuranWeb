import React from 'react';
import { useParams } from 'react-router-dom';
import AppBar from '../../components/AppBar/Index';
import PageContent from '../../components/ContentPage/Index';

export default function Index() {
  const { surat } = useParams();
  return (
    <>
      <AppBar pageName={`Surat ${surat}`} />
      <PageContent>
        <h1>Surat : {surat}</h1>
      </PageContent>
    </>
  );
}
