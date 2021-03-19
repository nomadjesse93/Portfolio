import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Jumbotron } from 'react-bootstrap';
import styles from './Landing.module.css';
import Modal from '../Modal/Modal';

export default function JumboTron() {
  // state = {
  //   showModal: false,
  // };

  // setShow = () => {
  //   this.setState((prevState) => ({
  //     showModal: !prevState.showModal,
  //   }));
  // };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      height: theme.spacing(40),
      backgroundColor: 'transparent',
    },
    text: {
      color: 'lightgrey',
      margin: '0',
    },
  }));

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ textAlign: 'center', height: '4rem', marginTop: '3.5rem' }}
        >
          <Typography variant='h2' className={classes.text}>
            Jesse Stupidson
          </Typography>
        </Grid>

        <Grid
          item
          xs={8}
          style={{
            textAlign: 'center',
            margin: '0 auto 4.5rem auto',
            height: '1rem',
          }}
        >
          <Typography className={classes.text} variant='h5'>
            Web Developer, Programmer, Tech Enthusiast
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

/* <Jumbotron className={styles.JumboTron}>
          <h1 id='name' className='display-3'>
            Jesse Sanderson
          </h1>
          <p className='lead'>Web Developer, Programmer, Tech Enthusiast</p>
          <p className='lead'>
            <Modal setShow={this.setShow} show={this.state.showModal} />
          </p>
        </Jumbotron> */
