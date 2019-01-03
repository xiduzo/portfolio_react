import React, { Component } from "react";

import "./PortfolioItemPreview.scss";

class PortfolioItemPreview extends Component {
  state = {};

  render() {
    return (
      <section className="grid__item">
        <div className="grid__item-bg" />
        <div className="grid__item-wrap">
          <img
            className="grid__item-img"
            src={this.props.item.mainImage.src}
            alt={this.props.item.mainImage.desciption}
          />
        </div>
        <h2 className="grid__item-title">{this.props.item.title}</h2>
        <h3 className="grid__item-number">{this.props.item.year}</h3>
      </section>
    );
  }
}

export default PortfolioItemPreview;
