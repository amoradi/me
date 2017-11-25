import React from 'react';

import Slice from './slice';
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
      <Slice 
        link={NOTES}
        image={IMG_NOTES}
        text="Notes"
        bodyText="facts, jottings & subjects"
        light
      />
      <Slice 
        link={ARTIFACTS}
        image={IMG_ARTIFACTS}
        text="Artifacts"
        bodyText="sketches & symbols"
      />
      <Slice 
        link={INFO}
        image={IMG_INFO}
        text="Info"
        bodyText="some lines on me"
        alternate
      />
    </div>
  );
}

export default Home;
