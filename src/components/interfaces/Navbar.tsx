import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/Help';
import ContactsIcon from '@material-ui/icons/Contacts';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PublishIcon from '@material-ui/icons/Publish';
import FrequentlyAsked from "../pages/frequently-asked";
import HowSiteWorks from "../pages/how-site-works";
import ContactUs from "../pages/contact-us";
import UploadExcel from "../pages/upload-excel";
import {ClickAwayListener} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isFileUploadClicked, setFileUploadClicked] = React.useState(false);
  const [isHotItWorksClicked, setHowItWorksClicked] = React.useState(false);
  const [isContactUsClicked, setContactUsClicked] = React.useState(false);
  const [isFrequentlyAskedClicked, setFrequenlyAskedClicked] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleFileUploadItem = () => {
    setContactUsClicked(false);
    setFrequenlyAskedClicked(false);
    setContactUsClicked(false);
    setFileUploadClicked(true);
  };

  const handleHowItWorksItem = () => {
    setFrequenlyAskedClicked(false);
    setFileUploadClicked(false);
    setContactUsClicked(false);
    setHowItWorksClicked(true);
  };

  const handleContactUsItem = () => {
    setHowItWorksClicked(false);
    setFileUploadClicked(false);
    setFrequenlyAskedClicked(false);
    setContactUsClicked(true);
  };

  const handleFrequentlyAskedItem = () => {
    setHowItWorksClicked(false);
    setContactUsClicked(false);
    setFileUploadClicked(false);
    setFrequenlyAskedClicked(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            {`Excel Veri Görselleştiricisi`}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          <ListItem button key={'Excel Yükle'} onClick={handleFileUploadItem}>
            <ListItemIcon>
              <PublishIcon/>
            </ListItemIcon>
            <ListItemText primary={'Excel Yükle'}/>
          </ListItem>
        </List>
        <Divider/>
        <List>
          <ListItem button key={`Nasıl Kullanılır?`} onClick={handleHowItWorksItem}>
            <ListItemIcon><HelpIcon/></ListItemIcon>
            <ListItemText primary={`Nasıl Kullanılır?`}/>
          </ListItem>

          <ListItem button key={`İletişim`} onClick={handleContactUsItem}>
            <ListItemIcon><ContactsIcon/></ListItemIcon>
            <ListItemText primary={`İletişim`}/>
          </ListItem>

          <ListItem button key={`SSS`} onClick={handleFrequentlyAskedItem}>
            <ListItemIcon><BookmarksIcon/></ListItemIcon>
            <ListItemText primary={`SSS`}/>
          </ListItem>
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        onClickCapture={handleDrawerClose}
      >
        <div className={classes.drawerHeader}/>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quis que non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices.
        </Typography>
        {
          isFileUploadClicked
            ? <UploadExcel/>
            : (
              isHotItWorksClicked
                ? <HowSiteWorks/>
                : (
                  isContactUsClicked
                    ? <ContactUs/>
                    : (isFrequentlyAskedClicked && <FrequentlyAsked/>)
                )
            )
        }
      </main>
    </div>
  );
}