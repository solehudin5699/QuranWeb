import React, { createRef, useState } from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import AudioPlayer from 'react-h5-audio-player';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

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
}));
export default function Index({ ayat, surat }) {
  const classes = useStyles();
  let refAudio = [];
  let refCopy = [];
  refAudio[ayat.number.inSurah] = createRef();
  refCopy[ayat.number.inSurah] = createRef();
  const [isPlay, setPlay] = useState(false);
  const [isCopied, setCopy] = useState(false);
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
          <Grid container direction="column" spacing={0}>
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              justify="flex-start"
            >
              <Chip
                color="primary"
                size="medium"
                label={ayat.number.inSurah}
                style={{
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  marginRight: '15px',
                }}
              />
              <IconButton
                onClick={(e) =>
                  refAudio[ayat.number.inSurah].current.togglePlay(e)
                }
              >
                {isPlay ? (
                  <PauseCircleOutlineIcon fontSize="small" color="primary" />
                ) : (
                  <PlayCircleFilledWhiteIcon fontSize="small" color="primary" />
                )}
              </IconButton>
              {/* <Typography className={classes.play} color="primary">
                {isPlay ? 'Pause' : 'Play'}
              </Typography> */}
              <IconButton
                onClick={(e) => refCopy[ayat.number.inSurah].current.onClick()}
              >
                {isCopied ? (
                  <FileCopyOutlinedIcon
                    style={{ fontSize: '15px' }}
                    color="primary"
                  />
                ) : (
                  <FileCopyIcon style={{ fontSize: '15px' }} color="primary" />
                )}
              </IconButton>
              {isCopied && (
                <Typography className={classes.play} color="primary">
                  Copied
                </Typography>
              )}
            </Grid>
            <Grid container item direction="row">
              <Typography paragraph className={classes.styleArabic}>
                {ayat.text.arab}
              </Typography>
            </Grid>
            <Grid container item direction="row">
              <Typography color="primary" paragraph>
                {ayat.translation.id}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div style={{ display: 'none' }}>
        <AudioPlayer
          ref={refAudio[ayat.number.inSurah]}
          src={ayat.audio.secondary[0]}
          onPlay={() => setPlay(true)}
          onPause={() => setPlay(false)}
          onEnded={() => setPlay(false)}
        />
        <CopyToClipboard
          ref={refCopy[ayat.number.inSurah]}
          text={`QS.${surat}:${ayat.number.inSurah}\n\n${ayat.text.arab}\n\n${ayat.translation.id}
          `}
          onCopy={() => setCopy(true)}
        >
          <button>Copy to clipboard</button>
        </CopyToClipboard>
      </div>
    </>
  );
}
