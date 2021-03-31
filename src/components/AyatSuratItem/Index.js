import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import IconButton from '@material-ui/core/IconButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
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
  return (
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
            <IconButton>
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
  );
}
