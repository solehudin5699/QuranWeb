import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PageContent from '../../components/ContentPage/Index';
import AppBar from '../../components/AppBar/Index';
import QuranSuratItem from '../../components/QuranSuratItem/Index';

export default function Index() {
  return (
    <>
      <AppBar pageName={'Al-Quran'} />
      <PageContent>
        {[...Array(114)].map((_, index) => {
          return <QuranSuratItem key={index.toString()} />;
        })}
      </PageContent>
    </>
  );
}
