import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  render() {
    const renderedList = this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });

    return (
      <div className="ui divided list">{renderedList}</div>
    )
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);