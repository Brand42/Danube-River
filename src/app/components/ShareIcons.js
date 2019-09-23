import React, {Component} from "react";
import PropTypes from "prop-types";
import {asset} from "../core/utils";
import LazyImage from "./LazyImage";
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ShareIcons extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="Byline__share">
        Share:

        <CopyToClipboard text={this.props.url} className="Byline__share-button">
          <span>
            <LazyImage src={asset('assets/img/social/link.svg')} alt="Copy to clipboard"/>
          </span>
        </CopyToClipboard>

        <EmailShareButton url={this.props.url} subject={this.props.title} className="Byline__share-button">
          <LazyImage src={asset('assets/img/social/email.svg')} alt="Share on Facebook"/>
        </EmailShareButton>

        <TwitterShareButton url={this.props.url} title={this.props.title} className="Byline__share-button">
          <LazyImage src={asset('assets/img/social/twitter.svg')} alt="Share on Twitter"/>
        </TwitterShareButton>

        <FacebookShareButton url={this.props.url} quote={this.props.title} className="Byline__share-button">
          <LazyImage src={asset('assets/img/social/facebook.svg')} alt="Share on Facebook"/>
        </FacebookShareButton>

      </div>
    );
  }
}
