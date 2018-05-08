import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './style.css'

const Loading = () => (
  <CircularProgress
    className = 'progress'
    size = {180}
  />
)

export default Loading;