import { Component } from 'react';
import PropTypes from 'prop-types';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import {
  PlayButton,
  PrevButton,
  NextButton,
  Progress,
  Timer,
  VolumeControl
} from 'react-soundplayer/components';

class PlaylistSoundPlayer extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0
    };
  }

  playTrackAtIndex(playlistIndex) {
    const { soundCloudAudio } = this.props;

    this.setState({activeIndex: playlistIndex});

    soundCloudAudio.play({ playlistIndex });
  }

  nextIndex() {
    const { playlist } = this.props;
    let { activeIndex } = this.state;

    if (activeIndex >= playlist.tracks.length - 1) {
      return;
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: ++activeIndex});
    }
  }

  prevIndex() {
    let { activeIndex } = this.state;

    if (activeIndex <= 0) {
      return;
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: --activeIndex});
    }
  }

  renderTrackList() {
    const { playlist } = this.props;

    if (!playlist) {
      return <div className="p2 center">Loading...</div>;
    }

    console.log(playlist);

    const allTracks = playlist.tracks.map((tracks, i) => {
      return (
        <button
          key={tracks.id}
          className=""
          onClick={this.playTrackAtIndex.bind(this, i)}>
          <span className="">{tracks.user.username} - {tracks.title}</span>
          <span className="">{Timer.prettyTime(tracks.duration / 1000)}</span>
        </button>
      );
    });

    return (
      <div>{allTracks}</div>
    );
  }

  render() {
    let { tracks, currentTime, duration } = this.props;

    return (
      <div className="">
        <div className="">
          <div className="">
            <h2 className="">{tracks ? tracks.user.username : ''}</h2>
            <Timer className="" duration={duration || 0} currentTime={currentTime} {...this.props} />
          </div>
          <h2 className="">{tracks ? tracks.title : ''}</h2>
          <div className="">
            <PrevButton
              className=""
              onPrevClick={this.prevIndex.bind(this)}
              {...this.props} />
            <PlayButton
              className="player__playbutton"
              {...this.props} />
            <NextButton
              className=""
              onNextClick={this.nextIndex.bind(this)}
              {...this.props} />
            <VolumeControl
              className=""
              buttonClassName=""
              {...this.props} />
            <Progress
              className=""
              innerClassName=""
              value={(currentTime / duration) * 100 || 0}
              {...this.props} />
          </div>
        </div>
        {this.renderTrackList()}
      </div>
    );
  }
}

export default withSoundCloudAudio(PlaylistSoundPlayer);