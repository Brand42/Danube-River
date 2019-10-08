import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import config from "../core/config";
import {asset} from "../core/utils";
import {Waypoint} from "react-waypoint";
import LazyImage from "./LazyImage";
import FormatText from "./FormatText";
import ShareIcons from "./ShareIcons";

@withRouter
export default class Footer extends Component {
  state = {
    visible: false,
  };

  #toggleVisible = visible => () => this.setState({visible});

  render = () => (
    <div className={`Footer ${this.state.visible ? 'Footer--visible' : ''}`}>
      <Waypoint onEnter={this.#toggleVisible(true)} onLeave={this.#toggleVisible(false)}/>
      <div className="Footer__title">
        <div className="type-h2">
          Dive in Deeper
        </div>
      </div>

      <div className="Footer__articles">
        {config.articles.map(article => (
          <Link key={`footer.article.${article.id}`} className="Footer__article" to={`/article/${article.id}`}>
            <div className="type-tag text-center text-uppercase">
              {article.title}
            </div>
            <div className="type-h4 text-center">
              <FormatText>{article.intro}</FormatText>
            </div>
          </Link>
        ))}
        <Link className="Footer__article" to="/about">
          <div className="type-tag text-center text-uppercase">
            The river
          </div>
          <div className="type-h4 text-center">
            More on the Danube
          </div>
        </Link>
      </div>

      <div className="Footer__wave">
        <div className="Footer__wave-top"/>
        <div className="Footer__wave-bottom"/>

        <div className="Footer__social">
          <div className="type-tag">
            Share your journey
          </div>
          <div className="type-h4">
            #LifeofaRiver
          </div>
          <div className="Footer__social-links">
            <ShareIcons url={location.href} title={document.title} noText={true} />
          </div>
        </div>

        <div className="Footer__bottom">
          <div className="Footer__bottom-main flex align-center justify-between">
            <div className="Footer__info">
              <div className="type-h4">
                THE DANUBE
              </div>
              <div className="type-h1">
                Life of a River
              </div>
            </div>

            <a href="https://europe.cgtn.com" target="_blank" className="Footer__logo">
              <LazyImage src={asset('assets/img/cgtn-logo-header-white.png')} alt="CGTN Logo"/>
            </a>
          </div>

          <div className="Footer__small">
            <div className="Footer__small-links type-p">
              <a href="https://www.cgtn.com/terms-of-use" target="_blank">
                Terms of use
              </a>
              <a href="https://www.cgtn.com/copyright" target="_blank">
                Copyright
              </a>
              <a href="https://www.cgtn.com/privacy" target="_blank">
                Privacy policy
              </a>
            </div>

            <div className="type-p">
              Copyright © 2019 CGTN. Beijing ICP prepared NO.16065310-3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
