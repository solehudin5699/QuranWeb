import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Toolbar,
  CssBaseline,
  SwipeableDrawer,
  Grid,
  Input,
  InputAdornment,
  Card,
  CardContent,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Book as BookIcon,
  ChevronLeft as ChevronLeftIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import { surat } from './surat';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Index';

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
    padding: theme.spacing(3),
    textAlign: 'justify',
  },
  toolbar: theme.mixins.toolbar,
}));

export default function Drawer() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [listSurat, setListSurat] = useState([]);
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    let result = surat.filter((item) =>
      item.name
        .toString()
        .toLowerCase()
        .includes(e.target.value.toString().toLowerCase())
    );
    setListSurat(result);
    console.log(listSurat);
  };
  useEffect(() => {
    setListSurat(surat);
  }, []);
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
          <Router>
            <div>
              <Route exact path="/" component={Home} />
            </div>
          </Router>
        </main>
      </React.Fragment>
    </div>
  );
}
