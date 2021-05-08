import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AppBar from '../../components/AppBar/Index';
import PageContent from '../../components/ContentPage/Index';
import AyatSuratItem from '../../components/AyatSuratItem/Index';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Index';
import Bismillah from '../../components/Bismillah/Index';
import AyatMode from '../../components/AyatMode/Index';

const useStyles = makeStyles((theme) => ({
  fabAyatTafsir: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(18),
  },
  fabAyatOnly: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(10),
  },
  fabTafsirOnly: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Index() {
  const classes = useStyles();
  const [view, setView] = useState('all');
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
            <AyatMode />
            {/* {specificSurat.preBismillah && (
              <Bismillah ayat={specificSurat.preBismillah} />
            )}
            {specificSurat.verses?.map((item, index) => {
              return (
                <AyatSuratItem
                  key={index.toString()}
                  ayat={item}
                  surat={query.get('name')}
                />
              );
            })} */}
          </>
        )}
        <Fab
          aria-label={'Edit'}
          className={classes.fabAyatTafsir}
          color={'secondary'}
          onClick={() => console.log('all')}
        >
          <Typography
            style={{
              fontSize: '12px',
            }}
          >
            Semua
          </Typography>
        </Fab>
        <Fab
          aria-label={'Edit'}
          className={classes.fabAyatOnly}
          color={'secondary'}
          onClick={() => console.log('ayat')}
        >
          <Typography
            style={{
              fontSize: '12px',
            }}
          >
            Ayat
          </Typography>
        </Fab>
        <Fab
          aria-label={'Edit'}
          className={classes.fabTafsirOnly}
          color={'secondary'}
          onClick={() => console.log('tafsir')}
        >
          <Typography
            style={{
              fontSize: '12px',
            }}
          >
            Tafsir
          </Typography>
        </Fab>
      </PageContent>
    </>
  );
}
