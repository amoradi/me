import React from 'react';

const Home = (props) => {
  return (
    <div className="Home">
      info.<br /><br />
      yadda, yadda, yaddaa...
      {props.children}
    </div>
  );
}

export default Home;
