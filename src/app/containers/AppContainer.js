import React, {Component} from "react";
import MobileDetect from "mobile-detect";
import {HashRouter as Router} from "react-router-dom";
import App from "../components/App";
import {AppContextProvider} from "../context/AppContext";
import Loading from "../components/Loading";
import Services from "../services";
import {preloadAssets} from "../core/utils";

export default class AppContainer extends Component {
  state = {
    muteVideos: true,
    loading: true,
    isMobile: false,
    lockScroll: false,
    mapComponent: null,
    screen: null,
    loadingProgress: 0,
    scrollY: 0,
    screenW: window.innerWidth,
    screenH: window.innerHeight,
  };

  #getContext = () => ({
    mapComponent: this.state.mapComponent,
    muteVideos: this.state.muteVideos,
    isMobile: this.state.isMobile,
    lockScroll: this.state.lockScroll,
    scrollY: this.state.scrollY,
    screenW: this.state.screenW,
    screenH: this.state.screenH,
    toggleMuteVideos: this.#toggleMuteVideos,
    setIsMobile: this.#setIsMobile,
    toggleLockScroll: this.#toggleLockScroll,
    setScreen: this.#setScreen,
    resetScroll: this.#resetScroll,
  });

  #toggleMuteVideos = muteVideos => this.setState({muteVideos});

  #setIsMobile = isMobile => this.setState({isMobile});

  #toggleLockScroll = lockScroll => !this.state.isMobile && this.setState({lockScroll});

  #handleScroll = async event => {
    this.state.lockScroll && event.preventDefault();
    this.state.screen !== null && await this.setState({scrollY: this.state.screen.scrollTop});
    Services.event.emit('screen.scroll', event);
  };

  #handleWheel = event => {
    this.state.lockScroll && event.preventDefault();
    Services.event.emit('screen.wheel', event);
  };

  #handleResize = async event => {
    await this.setState({screenW: window.innerWidth, screenH: window.innerHeight});
    Services.event.emit('screen.resize', event);
  };

  #setScreen = async screen => {
    this.#removeScrollListeners();
    await this.setState({screen});
    this.state.screen.addEventListener('wheel', this.#handleWheel);
    this.state.screen.addEventListener('scroll', this.#handleScroll);
  };

  #removeScrollListeners = () => {
    this.state.screen !== null && this.state.screen.removeEventListener('wheel', this.#handleWheel);
    this.state.screen !== null && this.state.screen.removeEventListener('scroll', this.#handleScroll);
  };

  #resetScroll = () => {
    if (this.state.screen !== null) {
      this.state.screen.scrollTop = 0;
    }
    this.setState({scrollY: 0});
  };

  async componentDidMount() {
    const isMobile = (new MobileDetect(window.navigator.userAgent)).mobile() !== null;
    !isMobile && await preloadAssets(progress => this.setState({loadingProgress: Math.ceil(progress)}));
    const mapComponent = await import(`../components/${isMobile ? 'MobileMap' : 'Map/index'}`);
    this.setState({loading: false, isMobile, mapComponent: mapComponent.default});
    window.addEventListener('resize', this.#handleResize);
  }

  componentWillUnmount() {
    this.#removeScrollListeners();
    window.removeEventListener('resize', this.#handleResize);
  }

  render() {
    if (this.state.loading) {
      return <Loading progress={this.state.loadingProgress} type="preload"/>;
    }

    return (
      <Router>
        <AppContextProvider value={this.#getContext()}>
          <App/>
        </AppContextProvider>
      </Router>
    );
  }
}
