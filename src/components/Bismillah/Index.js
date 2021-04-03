import React, { createRef } from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import IconButton from '@material-ui/core/IconButton';
import AudioPlayer from 'react-h5-audio-player';
const useStyles = makeStyles((theme) => ({
  styleArabic: {
    fontFamily: 'MADDINA',
    fontSize: '25px',
    lineHeight: '200%',
    textAlign: 'right',
    width: '100%',
  },
}));
export default function Index({ ayat }) {
  const classes = useStyles();
  let refToAudio = createRef();
  return (
    <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
      <Card
        style={{
          marginBottom: '10px',
          borderRadius: '30px',
          paddingLeft: '10px',
          paddingRight: '10px',
          width: '100%',
        }}
      >
        <CardContent>
          <Grid container direction="column" spacing={0}>
            <Grid container item direction="row" alignItems="center">
              <IconButton onClick={(e) => refToAudio.current.togglePlay(e)}>
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
        <AudioPlayer ref={refToAudio} src={ayat.audio.secondary[0]} />
      </div>
    </div>
  );
}
