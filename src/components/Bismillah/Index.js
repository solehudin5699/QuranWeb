import React, { createRef, useState } from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
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
  play: {
    fontSize: '12px',
    marginLeft: '-10px',
  },
}));
export default function Index({ ayat }) {
  const classes = useStyles();
  let refToAudio = createRef();
  const [isPlay, setPlay] = useState(false);
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
                {isPlay ? (
                  <PauseCircleOutlineIcon fontSize="large" color="primary" />
                ) : (
                  <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
                )}
              </IconButton>
              <Typography className={classes.play} color="primary">
                {isPlay ? 'Pause' : 'Play'}
              </Typography>
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
          ref={refToAudio}
          src={ayat.audio.secondary[0]}
          onPlay={() => setPlay(true)}
          onPause={() => setPlay(false)}
          onEnded={() => setPlay(false)}
        />
      </div>
    </div>
  );
}
