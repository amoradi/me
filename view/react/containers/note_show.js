import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MarkdownRenderer from 'react-markdown-renderer';

import { LS_NOTES_TOKEN } from '../constants';
import { fetchNote, deleteNote } from '../actions';
import _ from 'lodash';
import EditNote from '../components/navigation/logged_in_controls/edit_note';
import DeleteNote from '../components/navigation/logged_in_controls/delete_note';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';

class NoteShow extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    if (!this.props.note) {
      const { slug } = this.props.match.params;
      this.props.fetchNote(slug);
    }

    this.styleMarkDownCode();
  }

  componentDidUpdate() {
    this.styleMarkDownCode();
  }

  styleMarkDownCode() {
    window.document.querySelectorAll('pre code').forEach((i, block) => {
      window.hljs.highlightBlock(i);
    });
  }

  confirmDeletion(id) {
    if(id) {
      if (confirm("Are you sure you want to delete this note?") == true) {
        this.props.deleteNote(id, () => {
          this.props.history.push('/notes');
        });
      }
    }
  }

  render() {
    const { note } = this.props;

    if (!this.props.note) {
      return <div>Loading...</div>;
    }

    return (
      <article className="Stage-content Note">
        <Link to="/notes" className="Navigator"><BackIcon className="Navigator-icon" />notes</Link>
        <h1 className="Note-heading">{`${this.props.note.name}`}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="Note-headingMeta">
            {_.pluck(this.props.note.subjects, "name")
              .join(` ${String.fromCharCode(183)} `)}
          </span>
        </h1>
        <MarkdownRenderer
          className="Note-body"
          markdown={this.props.note.body}
        />
        { window.localStorage[LS_NOTES_TOKEN] &&
          <ul className="Note-admin">
            <li><Link className="Note-adminLink" to={`/notes/edit/${note.slug}`}>edit note</Link></li>
            <li><DeleteNote className="Note-adminLink" onClick={() => this.confirmDeletion(note._id)} /></li>
          </ul>
        }
      </article>
    );
  }
} 

function mapStateToProps({ notes }, ownProps) {
  return {
    note: notes[ownProps.match.params.slug]
  };
}

export default connect(mapStateToProps, { fetchNote, deleteNote })(NoteShow);
