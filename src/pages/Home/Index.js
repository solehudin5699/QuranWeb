import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  CssBaseline,
  SwipeableDrawer,
  Grid,
  Input,
  InputAdornment,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  Menu as MenuIcon,
  Book as BookIcon,
  ChevronLeft as ChevronLeftIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { surat } from '../../surat';

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgb(71, 93, 235, 1)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inputSearch: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: theme.spacing(0, 0, 0, 1),
  },
  drawer: {
    width: 270,
    flexShrink: 0,
    height: '100%',
  },
  drawerPaper: {
    width: 270,
  },
  searchBox: {
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgb(71, 93, 235, 0.5)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 0, 0, 1),
    margin: 0,
    zIndex: 100,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  search: {
    marginRight: theme.spacing(0),
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1.5),
    textAlign: 'justify',
  },
  toolbar: theme.mixins.toolbar,
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

export default function Drawer() {
  const classes = useStyles();
  const location = useLocation();
  console.log(location);
  const [drawer, setDrawer] = useState(false);
  const [listSurat, setListSurat] = useState([]);
  const handleSearch = (e) => {
    let result = surat.filter((item) =>
      item.name
        .toString()
        .toLowerCase()
        .includes(e.target.value.toString().toLowerCase())
    );
    setListSurat(result);
  };
  useEffect(() => {
    setListSurat(surat);
  }, []);
  const history = useHistory();
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawer(true)}
              edge="start"
              className={classes.menuButton}
              style={{ outline: 'none' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Mari Baca Al-Quran
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          open={drawer}
          onClose={() => setDrawer(false)}
          onOpen={() => setDrawer(true)}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.searchBox}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              style={{ flex: 0.9 }}
            >
              <Input
                placeholder="Cari surat"
                className={classes.inputSearch}
                disableUnderline
                onChange={(e) => handleSearch(e)}
                endAdornment={
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: 'rgb(71, 93, 235, 1)' }} />
                  </InputAdornment>
                }
              />
            </Grid>
            <IconButton
              onClick={() => setDrawer(false)}
              style={{ color: '#000000', outline: 'none', flex: 0.1 }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          {/* <Divider /> */}
          <List>
            {listSurat.map((item, index) => (
              <ListItem button onClick={() => console.log(item.number)}>
                <ListItemIcon>
                  <BookIcon style={{ color: 'rgb(71, 93, 235, 1)' }} />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={6} sm={4} container justify="center" align="center">
              <Card
                className={classes.containerMenu}
                onClick={() => history.push('al-quran')}
              >
                <CardContent>
                  <Typography className={classes.menuItem}>
                    Al-Qur'an
                  </Typography>
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
        </main>
      </React.Fragment>
    </div>
  );
}
