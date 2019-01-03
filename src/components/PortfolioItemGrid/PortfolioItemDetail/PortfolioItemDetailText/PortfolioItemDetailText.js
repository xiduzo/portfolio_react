import React, { Component } from "react";
import "./PortfolioItemDetailText.scss";

import PortfolioItemDetailTextTooltip from "./PortfolioItemDetailTextTooltip/PortfolioItemDetailTextTooltip";

import replace from "string-replace-to-array";

export default class PortfolioItemDetailText extends Component {
  state = {
    paragraphs: [],
    tooltips: []
  };

  componentDidMount() {
    this.renderTextWithTooltips();
  }

  renderTextWithTooltips = () => {
    this.props.content.forEach(paragraph => {
      paragraph.text = [paragraph.text];
      paragraph.tooltips.forEach((tooltip, index) => {
        this.state.tooltips.push(tooltip);
        const replacer = tooltip.phrase;
        const re = new RegExp(replacer, "im");

        paragraph.text = replace(paragraph.text, re, () => {
          return (
            <PortfolioItemDetailTextTooltip
              content={tooltip}
              number={this.state.tooltips.length}
            />
          );
        });
      });
      this.state.paragraphs.push(paragraph);
    });
    this.forceUpdate();
  };

  render() {
    return (
      <section className="content__item-content__text">
        <article>
          {this.state.paragraphs.map((paragraph, index) => {
            return (
              <p key={index}>
                {paragraph.text.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })}
              </p>
            );
          })}
        </article>
        <section className="source-list">
          <ol>
            {this.state.tooltips.map((tooltip, index) => {
              return (
                <li key={index}>
                  <span>[{index + 1}]</span>
                  <a
                    href={tooltip.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tooltip.source.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </section>
      </section>
    );
  }
}
