import React from 'react';
import {createStyles, makeStyles, Paper, Theme, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);

export default function ContactUs() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12}>
          <Paper className={classes.paper}>Contact Us</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
