import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  containerMenu: {
    marginBottom: '10px',
    borderRadius: '15px',
    padding: '5px',
    height: '250px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: 'green',
  },
  menuItem: {
    fontFamily: 'Poppins',
    fontSize: '19px',
    color: theme.palette.primary.contrastText,
  },
}));

export default function Index() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={6} sm={4} container justify="center" align="center">
          <Card
            className={classes.containerMenu}
            onClick={() => history.push('al-quran')}
          >
            <CardContent>
              <Typography className={classes.menuItem}>Al-Qur'an</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} container justify="center" align="center">
          <Card
            className={classes.containerMenu}
            onClick={() => history.push('hadist')}
          >
            <CardContent>
              <Typography className={classes.menuItem}>Hadist</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} container justify="center" align="center">
          <Card
            className={classes.containerMenu}
            onClick={() => history.push('doa')}
          >
            <CardContent>
              <Typography className={classes.menuItem}>Do'a</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} container justify="center" align="center">
          <Card className={classes.containerMenu}>
            <CardContent>
              <Typography className={classes.menuItem}>Tahlil</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
