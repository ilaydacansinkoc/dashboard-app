import React from "react";
import Grid from '@material-ui/core/Grid';
import {createStyles, Paper, Theme} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {DropzoneArea} from 'material-ui-dropzone';
import '../../styles/upload.scss';

const theme = createMuiTheme({
  overrides: {
    MuiGrid:{
      root:{
        justifyContent: 'center',
      },
      "spacing-xs-8":{
        width: 'calc(100% - 1px)',
        margin: '0px',
      },
    },
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    DropzoneArea: {
      marginRight: '15px',
      removeBtn:{
        right: '20px !important',
      },
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    upload__button: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    upload__button_wrapper: {
      marginTop: '30px',
      marginBottom: '-15px',
    },
    dropzone:{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-end',
    },
  }),
);

export default function UploadExcel(){
  const classes = useStyles();
  const [file, setFiles] = React.useState([]);

  const handleOnChange = (file: any) => setFiles(file);

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

            <div className={classes.dropzone}>
              <ThemeProvider theme={theme}>
                <DropzoneArea dropzoneClass={classes.DropzoneArea}   filesLimit={1}
                              onChange={() => handleOnChange(file)} showFileNames={true}
                />
              </ThemeProvider>



              <div className={classes.upload__button_wrapper}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.upload__button}
                  startIcon={<CloudUploadIcon />}
                >
                  {`Excel Yükle`}
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}