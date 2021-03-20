import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" align="center" spacing={2}>
        <Grid item xs={6} sm={4} container justify="center" align="center">
          <Card className={classes.containerMenu}>
            <CardContent>
              <Typography>Al-Qur'an</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} container justify="center" align="center">
          <Card className={classes.containerMenu}>
            <CardContent>
              <Typography>Hadist</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} container justify="center" align="center">
          <Card className={classes.containerMenu}>
            <CardContent>
              <Typography>Do'a</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} container justify="center" align="center">
          <Card className={classes.containerMenu}>
            <CardContent>
              <Typography>Tahlil</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
