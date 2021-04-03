import React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '../../components/AppBar/Index';
import PageContent from '../../components/ContentPage/Index';
import AyatSuratItem from '../../components/AyatSuratItem/Index';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Index';
import Bismillah from '../../components/Bismillah/Index';

export default function Index() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const { specificSurat } = useSelector((state) => state.quran);
  const { isLoading } = useSelector((state) => state.loading);
  return (
    <>
      <AppBar pageName={`Surat ${query.get('name')}`} />
      <PageContent>
        {isLoading ? (
          <Loading loading={isLoading} />
        ) : (
          <>
            {specificSurat.preBismillah && (
              <Bismillah ayat={specificSurat.preBismillah} />
            )}
            {specificSurat.verses?.map((item, index) => {
              return <AyatSuratItem key={index.toString()} ayat={item} />;
            })}
          </>
        )}
      </PageContent>
    </>
  );
}
