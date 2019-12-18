import React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import clsx from 'clsx';
import {
  Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem,
  ListItemIcon, ListItemText, makeStyles, Theme, createStyles, Hidden
} from '@material-ui/core';
import { Menu, Help, Contacts, Bookmarks, Publish} from '@material-ui/icons';
import FrequentlyAsked from '../pages/frequently-asked';
import HowSiteWorks from '../pages/how-site-works';
import ContactUs from '../pages/contact-us';
import UploadExcel from '../pages/upload-excel';
import drawerImage from '../../resources/drawerImage1.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundImage: 'url(' + drawerImage + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      zIndex: 1
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
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

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button={true} key={'Excel Yükle'} onClick={handleFileUploadItem}>
          <ListItemIcon>
            <Publish/>
          </ListItemIcon>
          <ListItemText primary={'Excel Yükle'}/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button={true} key={`Nasıl Kullanılır?`} onClick={handleHowItWorksItem}>
          <ListItemIcon><Help/></ListItemIcon>
          <ListItemText primary={`Nasıl Kullanılır?`}/>
        </ListItem>

        <ListItem button={true} key={`İletişim`} onClick={handleContactUsItem}>
          <ListItemIcon><Contacts/></ListItemIcon>
          <ListItemText primary={`İletişim`}/>
        </ListItem>

        <ListItem button={true} key={`SSS`} onClick={handleFrequentlyAskedItem}>
          <ListItemIcon><Bookmarks/></ListItemIcon>
          <ListItemText primary={`SSS`}/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
          >
            <Menu/>
          </IconButton>
          <Typography variant="h6" noWrap={true}>
            {`Excel Veri Görselleştiricisi`}
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp={true} implementation="css">
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={open}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown={true} implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open={true}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main
        className={clsx(classes.content, {
          [classes.content]: open
        })}
        onClickCapture={handleDrawerClose}
      >
        <div className={classes.toolbar}/>
        <Typography paragraph={true}>
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
