import React, { createRef, useState, useEffect } from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { toArabic } from 'arabic-digits';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  styleArabic: {
    fontFamily: 'MADDINA',
    fontSize: '25px',
    lineHeight: '200%',
    textAlign: 'right',
    width: '100%',
    marginTop: '10px',
  },
  play: {
    fontSize: '12px',
    marginLeft: '-10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
  },
  round: {
    borderRadius: '100%',
    padding: '1px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingBottom: '-15px',
    display: 'inline-block',
    border: '1px solid grey',
  },
}));
function NumberSurat({ number }) {
  return (
    <Chip
      color="primary"
      size="medium"
      label={number}
      style={{
        paddingLeft: '5px',
        paddingRight: '5px',
        marginRight: '15px',
      }}
    />
  );
}
export default function Index() {
  const classes = useStyles();
  const { specificSurat } = useSelector((state) => state.quran);
  const [listAyat, setListAyat] = useState('');
  useEffect(() => {
    let allAyat = '';
    if (specificSurat.verses) {
      for (let i = 0; i < specificSurat.verses.length; i++) {
        allAyat += `${specificSurat.verses[i].text.arab}${toArabic(
          specificSurat.verses[i].number.inSurah
        )}`;
      }
      setListAyat(allAyat);
    }
  }, []);
  return (
    <>
      <Card
        style={{
          marginBottom: '10px',
          borderRadius: '10px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        <CardContent>
          <p className={classes.styleArabic}>
            {specificSurat.verses.map((item) => {
              return (
                <>
                  {/* <Chip
                    color="primary"
                    size="medium"
                    label={toArabic(item.number.inSurah)}
                    style={{
                      paddingLeft: '5px',
                      paddingRight: '5px',
                      marginRight: '10px',
                      fontSize: '25px',
                    }}
                  /> */}
                  {item.text.arab}
                  <span className={classes.round}>
                    {toArabic(item.number.inSurah)}
                  </span>{' '}
                </>
              );
            })}
          </p>
        </CardContent>
      </Card>
    </>
  );
}
