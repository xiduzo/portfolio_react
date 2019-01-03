import React, { Component } from "react";
import "./PortfolioItemDetail.scss";

import PortfolioItemDetailText from "./PortfolioItemDetailText/PortfolioItemDetailText";
import PortfolioItemDetailVideo from "./PortfolioItemDetailVideo/PortfolioItemDetailVideo";
import PortfolioItemDetailImage from "./PortfolioItemDetailImage/PortfolioItemDetailImage";
import PortfolioItemDetailImages from "./PortfolioItemDetailImages/PortfolioItemDetailImages";
import PortfolioItemDetailQuote from "./PortfolioItemDetailQuote/PortfolioItemDetailQuote";

class PortfolioItemDetail extends Component {
  state = {};

  render() {
    return (
      <section className="content__item">
        <div className="content__item-intro">
          <img
            className="content__item-img"
            src={this.props.item.mainImage.src}
            alt={this.props.item.mainImage.desciption}
          />
          <h2 className="content__item-title">{this.props.item.title}</h2>
        </div>
        <h3 className="content__item-subtitle">{this.props.item.subtitle}</h3>
        <div className="content__item-content">
          {this.props.item.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return (
                  <PortfolioItemDetailText key={index} content={item.content} />
                );
              case "video":
                return (
                  <PortfolioItemDetailVideo
                    key={index}
                    content={item.content}
                  />
                );
              case "image":
                return (
                  <PortfolioItemDetailImage
                    key={index}
                    content={item.content}
                  />
                );
              case "images":
                return (
                  <PortfolioItemDetailImages
                    key={index}
                    title={this.props.item.title}
                    content={item.content}
                  />
                );
              case "quote":
                return (
                  <PortfolioItemDetailQuote
                    key={index}
                    content={item.content}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </section>
    );
  }
}

export default PortfolioItemDetail;
