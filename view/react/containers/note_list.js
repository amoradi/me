import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SearchBar from 'material-ui-search-bar'

import { fetchNotes, fetchSearchedNotes } from '../actions';
import { bindActionCreators } from 'redux';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataSource: ['you', 'seed', 'man'],
      searchText: ''
    };

    this.onHandleChange = this.handleChange.bind(this);
    this.onHandleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleChange(term) {
    this.setState({searchText: term});

    if (term) {
      this.handleSearch(term);
    } else {
      this.props.fetchNotes();
    }

  }

  handleSearch(term = this.state.searchText) {
    this.props.fetchSearchedNotes(term);
  }

  renderSearch() {
    return <SearchBar
        className='SearchBar'
        hintText='filter'
        dataSource={this.state.dataSource}
        onChange={this.onHandleChange}
        onRequestSearch={this.onHandleSearch}
        style={{
          margin: '0 auto',
          width: '100%',
          borderRadius: '0',
          boxShadow: 'none',
          position: 'relative',
          top: '5px',
          fontSize: '14px'
        }}
      />
  }

  renderList() {
    return _.map(this.props.notes, note => {
      return (
        <Link data-note-id={note._id} to={`/notes/${note.slug}`}
          key={note._id}
          className="NoteList-note NoteDetail">
            <span className="NoteDetail-name">{note.name}</span>
            <span className="NoteDetail-subjects">{note.subjects.map((sub) => {
              return sub.name }).join(` ${String.fromCharCode(183)} `)}</span>
        </Link>
      )
    })
  }

  render() {
    return (
      <div className="NoteList">
        {this.renderSearch()}
        {this.renderList()}
      </div>
    )
  }
}

export default connect(mapStateToProps, { fetchNotes, fetchSearchedNotes })(NoteList);

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}
