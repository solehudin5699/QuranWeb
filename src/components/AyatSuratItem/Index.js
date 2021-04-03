import React, { createRef } from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import IconButton from '@material-ui/core/IconButton';
import AudioPlayer from 'react-h5-audio-player';
const useStyles = makeStyles((theme) => ({
  styleArabic: {
    fontFamily: 'Amiri Regular',
    fontSize: '25px',
    lineHeight: '200%',
    textAlign: 'right',
    width: '100%',
  },
}));
export default function Index({ ayat }) {
  const classes = useStyles();
  let refAudio = [];
  refAudio[ayat.number.inSurah] = createRef();
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
          <Grid container direction="column" spacing={2}>
            <Grid container item direction="row" alignItems="center">
              <Chip
                color="primary"
                size="medium"
                label={ayat.number.inSurah}
                style={{
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  marginRight: '5px',
                }}
              />
              <IconButton
                onClick={(e) =>
                  refAudio[ayat.number.inSurah].current.togglePlay(e)
                }
              >
                <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
              </IconButton>
              Play
            </Grid>
            <Grid container item direction="row">
              <Typography paragraph className={classes.styleArabic}>
                {ayat.text.arab}
              </Typography>
            </Grid>
            <Grid container item direction="row">
              <Typography paragraph>{ayat.translation.id}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div style={{ display: 'none' }}>
        <AudioPlayer
          ref={refAudio[ayat.number.inSurah]}
          src={ayat.audio.secondary[0]}
          // onPlay={(e) => console.log(refAudio)}
        />
      </div>
    </>
  );
}
