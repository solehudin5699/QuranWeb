import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageContent from '../../components/ContentPage/Index';
import AppBar from '../../components/AppBar/Index';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: 'none',
    boxShadow: 'none',
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function Index(props) {
  const classes = useStyles();
  return (
    <Card
      style={{
        marginBottom: '10px',
        borderRadius: '10px',
        paddingLeft: '5px',
        paddingRight: '5px',
      }}
    >
      <CardContent>
        <Grid container direction="column" justify="space-evenly" spacing={2.5}>
          <Grid container item justify="center" alignItems="center">
            <Grid
              item
              xs={8}
              container
              justify="flex-start"
              alignItems="flex-start"
              direction="column"
            >
              <Typography>1. Al-Fatihah</Typography>
              <Typography style={{ fontSize: '12px' }}>
                Pembukaan | Makkiyah | 7 Ayat
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              container
              justify="flex-end"
              alignItems="flex-start"
            >
              <Typography
                variant="h3"
                component="h3"
                style={{
                  fontFamily: 'Amiri Regular',
                  fontSize: '25px',
                }}
              >
                الفاتحة
              </Typography>
            </Grid>
          </Grid>
          <Grid item container style={{ marginBottom: '-20px' }}>
            <Accordion style={{ boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ marginRight: '-15px' }}
              >
                <Typography
                  style={{
                    textAlign: 'right',
                    width: '100%',
                  }}
                  className={classes.heading}
                >
                  Tafsir
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph>
                  Surat Al Faatihah (Pembukaan) yang diturunkan di Mekah dan
                  terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan
                  dengan lengkap diantara surat-surat yang ada dalam Al Quran
                  dan termasuk golongan surat Makkiyyah. Surat ini disebut Al
                  Faatihah (Pembukaan), karena dengan surat inilah dibuka dan
                  dimulainya Al Quran. Dinamakan Ummul Quran (induk Al Quran)
                  atau Ummul Kitaab (induk Al Kitaab) karena dia merupakan induk
                  dari semua isi Al Quran, dan karena itu diwajibkan membacanya
                  pada tiap-tiap sembahyang. Dinamakan pula As Sab'ul matsaany
                  (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca
                  berulang-ulang dalam sholat.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
