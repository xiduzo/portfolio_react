import React, { Component } from "react";
import "./PortfolioItemDetailImage.scss";

import { initDwarings } from "../../../../lib/drawings";

export default class PortfolioItemDetailImage extends Component {
  state = {};

  componentDidMount() {
    initDwarings();
  }

  render() {
    return (
      <section className="content__item-content__image">
        <figure>
          <div className="drawings">
            <img
              className="illustration"
              src={this.props.content.img}
              alt={this.props.content.desciption}
            />
            <svg
              className="line-drawing"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 600"
            >
              {this.props.content.svg.map((path, index) => {
                return <path key={index} d={path} />;
              })}
            </svg>
          </div>
          <figcaption>{this.props.content.title}</figcaption>
        </figure>
      </section>
    );
  }
}
