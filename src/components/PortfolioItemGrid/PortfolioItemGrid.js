import React, { Component } from "react";
import "./PortfolioItemGrid.scss";
import "../../style/animations/_base.scss";
import "../../style/animations/bounce.scss";

import PortfolioItemPreview from "./PortfolioItemPreview/PortfolioItemPreview";
import PortfolioItemDetail from "./PortfolioItemDetail/PortfolioItemDetail";

import { PORTFOLIO } from "../../lib/portfolio";

import { grid } from "../../lib/grid";

import IconCaretDown from '../../lib/icons/caret_down';

class PortfolioItemGrid extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55]
  };

  componentDidMount() {
    grid();
  }

  render() {
    return (
      <div>
        <div className="grid-wrap">
          <section className="grid">
            {PORTFOLIO.map((item, index) => {
              return <PortfolioItemPreview item={item} key={index} />;
            })}
          </section>
        </div>
        <div className="content">
          {PORTFOLIO.map((item, index) => {
            return <PortfolioItemDetail item={item} key={index} />;
          })}
          <button className="content__close">Close</button>
          <svg className="content__indicator icon icon--caret">
            <IconCaretDown />
          </svg>
        </div>
      </div>
    );
  }
}

export default PortfolioItemGrid;
