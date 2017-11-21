import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';

import { 
  IMG_NOTES,
  IMG_ARTIFACTS,
  IMG_INFO, 
  NOTES, 
  ARTIFACTS, 
  INFO
 } from '../constants';

const Home = (props) => {
  return (
    <div>
      <Link to={NOTES} className="Slice Slice--light">
        <img className="Slice-icon" src={IMG_NOTES} />
        <div className="Slice-heading">Notes <ArrowIcon className="Slice-forwardIcon" /></div>
        <div className="Slice-meta">facts, jottings & subjects</div>
      </Link>
      <Link to={ARTIFACTS} className="Slice">
        <img className="Slice-icon" src={IMG_ARTIFACTS} />
        <div className="Slice-heading">Artifacts <ArrowIcon className="Slice-forwardIcon" /></div>
        <div className="Slice-meta">sketches & symbols</div>
      </Link>
      <Link to={INFO} className="Slice Slice--alternate">
        <img className="Slice-icon" src={IMG_INFO} />
        <div className="Slice-heading">Info <ArrowIcon className="Slice-forwardIcon" /></div>
        <div className="Slice-meta">some lines on me</div>
      </Link>
    </div>
  );
}

export default Home;
