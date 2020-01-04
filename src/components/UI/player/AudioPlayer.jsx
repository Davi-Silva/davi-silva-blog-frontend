import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AudioPlayerWrapper from 'material-ui-audio-player';
import PropTypes from 'prop-types';

const AudioPlayer = ({ audioFileUrl }) => {
  const muiTheme = createMuiTheme({});
  const useStyles = makeStyles(() => ({
    loopIcon: {
      color: '#0058e4',
      '&.selected': {
        color: '#0058e4',
      },
      '&:hover': {
        color: '#333',
      },
      '&:active': {
        color: '#333',
      },
      '&:focus': {
        color: '#333',
      },
    },
    playIcon: {
      color: '#0058e4',
      height: '25px',
      width: '25px',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        color: '#333',
      },
      '&:active': {
        color: '#333',
      },
      '&:focus': {
        color: '#333',
      },
    },
    pauseIcon: {
      color: '#0058e4',
      height: '25px',
      width: '25px',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        color: '#333',
      },
      '&:active': {
        color: '#333',
      },
      '&:focus': {
        color: '#333',
      },
    },
    volumeIcon: {
      color: '#0058e4',
      height: '25px',
      width: '25px',
      '&:hover': {
        color: '#333',
      },
      '&:active': {
        color: '#333',
      },
      '&:focus': {
        color: '#333',
      },
    },
    volumeSlider: {
      color: '#0058e4',
      height: '25px',
      width: '25px',
    },
    progressTime: {
      color: '#0058e4',
      lineHeight: '50px',
    },
    mainSlider: {
      color: '#0058e4',
      '& .MuiSlider-rail': {
        color: '#999',
        marginTop: '13px',
      },
      '& .MuiSlider-track': {
        color: '#0058e4',
        marginTop: '13px',
      },
      '& .MuiSlider-thumb': {
        color: '#0058e4',
        top: '10px',
        marginTop: '10px',
      },
    },
  }));


  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <AudioPlayerWrapper
          elevation={0}
          width="100%"
          variation="default"
          spacing={1}
          height="55px"
          order="standart"
          preload="auto"
          useStyles={useStyles}
          src={audioFileUrl}
          debug
        />
      </ThemeProvider>
    </>
  );
};

export default AudioPlayer;

AudioPlayer.propTypes = {
  audioFileUrl: PropTypes.string.isRequired,
};
