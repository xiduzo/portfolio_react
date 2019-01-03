import React, { Component } from "react";
import "./PortfolioItemDetailImages.scss";

import { slideshow } from "../../../../lib/slideshow";

export default class PortfolioItemDetailImages extends Component {
  state = {
    current: 0,
    title: this.props.title.replace(/\s+/g, ""),
    inTransaction: false
  };

  componentDidMount() {
    slideshow(this.state.title);
  }

  setCurrentItem = item => {
    if (!this.state.inTransaction) {
      this.setState(
        {
          current: item,
          inTransaction: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              inTransaction: false
            });
          }, 2000);
        }
      );
    }
  };

  render() {
    return (
      <section
        className={`content__item-content__images content__item-content__images--${
          this.state.title
        }`}
      >
        <nav className="nav">
          {this.props.content.map((image, index) => {
            return (
              <button
                key={index}
                className={`nav__item ${
                  this.state.current === index ? "nav__item--current" : null
                } ${this.state.inTransaction ? "nav__item--wait" : null}`}
                onClick={this.setCurrentItem.bind(null, index)}
              >
                <span className="nav__item-title">{image.title}</span>
              </button>
            );
          })}
        </nav>
        <ul className="slides">
          {this.props.content.map((image, index) => {
            return (
              <figure className="slide" key={index}>
                <div
                  className="slide__img"
                  style={{
                    background: `url(${image.src})`
                  }}
                />
                <figcaption>{image.desciption}</figcaption>
              </figure>
            );
          })}
        </ul>
      </section>
    );
  }
}
