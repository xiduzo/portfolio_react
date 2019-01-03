import React, { Component } from "react";
import "./PortfolioItemDetailTextTooltip.scss";

export default class PortfolioItemDetailTextTooltip extends Component {
  state = {};

  render() {
    return (
      <span className="tooltip">
        <span className="tooltip__item">
          {this.props.content.phrase}
          <span className="tooltip__item__source-number">
            [{this.props.number}]
          </span>
        </span>
        <span className="tooltip__content">
          <span className="tooltip__content__text">
            <strong>{this.props.content.phrase}</strong>
            {this.props.content.text}
            <a
              href={this.props.content.source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.content.source.text}
            </a>
          </span>
        </span>
      </span>
    );
  }
}
