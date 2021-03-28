import React, { useEffect } from 'react';
import PageContent from '../../components/ContentPage/Index';
import AppBar from '../../components/AppBar/Index';
import QuranSuratItem from '../../components/QuranSuratItem/Index';
import { useDispatch, useSelector } from 'react-redux';
import { getListSuratAPI } from '../../redux/actions/quran';

export default function Index() {
  const dispatch = useDispatch();
  const { listSurat } = useSelector((state) => state.quran);
  const { isLoading } = useSelector((state) => state.loading);
  useEffect(() => {
    if (!listSurat.length) {
      dispatch(getListSuratAPI());
    }
  }, []);
  return (
    <>
      <AppBar pageName={'Al-Quran'} />
      <PageContent>
        {listSurat.map((surat, index) => {
          return <QuranSuratItem data={surat} key={index.toString()} />;
        })}
      </PageContent>
    </>
  );
}
