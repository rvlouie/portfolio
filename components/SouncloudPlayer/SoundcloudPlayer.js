import { Component } from 'react';
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
    
    const allTracks = playlist.tracks.map((tracks, i) => {
      return (
        <button
          key={tracks.id}
          className="player__track"
          onClick={this.playTrackAtIndex.bind(this, i)}>
            <img className="player__track-image" src={tracks.artwork_url ? tracks.artwork_url : tracks.user.avatar_url} />      
            <span className="player__track-title">{tracks.title}</span>
            <span className="player__track-duration">{Timer.prettyTime(tracks.duration / 1000)}</span>
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
          </div>

          <div className="player__controls">
            <div className="player__controls-buttons">
                <h2 className="">{tracks ? tracks.title : ''}</h2>
                <PrevButton
                className="player__button"
                onPrevClick={this.prevIndex.bind(this)}
                {...this.props} />
                <PlayButton
                className="player__button player__playbutton"
                {...this.props} />
                <NextButton
                className="player__button"
                onNextClick={this.nextIndex.bind(this)}
                {...this.props} />
                <VolumeControl
                className="player__volume"
                buttonClassName="player__button player__button--volume"
                {...this.props} />
            </div>
            <div className="player__progress-container">
                <Timer className="player__progress-timer" duration={duration || 0} currentTime={currentTime} {...this.props} />
                <Progress
                className="player__progress"
                innerClassName="player__progress-inner"
                value={(currentTime / duration) * 100 || 0}
                {...this.props} />
            </div>
          </div>
        </div>
        <div className="player__track-list">
            {this.renderTrackList()}
        </div>
      </div>
    );
  }
}

export default withSoundCloudAudio(PlaylistSoundPlayer);