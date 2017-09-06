import React from 'react';
import NoteList from '../../containers/note_list';

export default class Stage extends React.Component {
  render() {
    return (
      <section className="Stage">
        <div className="Stage-wrap">
          <NoteList />
        </div>
      </section>
    );
  }
}
