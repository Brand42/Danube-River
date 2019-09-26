import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player'
import LazyImage from "../components/LazyImage";
import {asset} from "../core/utils";

import {AppContext} from "../context/AppContext";
import {Waypoint} from "react-waypoint";
import Services from "../services";

@AppContext
export default class Video extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    loop: PropTypes.bool,
  };

  static defaultProps = {
    controls: true,
    autoPlay: false,
  };

  state = {
    playing: false,
    started: false
  }

  #togglePlay = playing => () => this.setState({playing});

  #toggleStarted = started => () => {
      this.setState({started});
      this.setState({playing: true});
  };

  ref = player => {
    this.player = player
  }

  componentDidMount() {
    console.log(this.props.autoPlay, this);
  }

  render() {
    return (
      <div className={`Video ${this.props.className} ${this.props.noSkin ? 'Video--no-skin' : ''}`}>

        {
          this.props.poster && !this.state.started ? <div className='video-react-big-play-button'></div> : null
        }
        {
          this.props.poster && !this.state.started ? <img src={asset(this.props.poster)} className="img-fluid Video__poster" onClick={this.#toggleStarted(true)}/> : null
        }


        <ReactPlayer
          ref={this.ref}
          url={this.props.src}
          className="video-react video-react-fluid"
          controls={this.props.controls}
          playing={this.props.autoPlay ? true : this.state.playing}
          loop={this.props.loop}

          config={{
            file: {
              attributes: { poster: this.props.poster }
            }
          }}
        />

        <Waypoint onLeave={this.#togglePlay(false)}/>
      </div>
    );
  }
}
