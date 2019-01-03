import React, { Component } from "react";
import "./PortfolioItemDetailVideo.scss";

import { UIMorphingButton } from "../../../../lib/morph";

export default class PortfolioItemDetailVideo extends Component {
  state = {};

  componentDidMount() {
    new UIMorphingButton(document.querySelector(".morph-button"), {
      closeEl: ".icon-close"
    });
  }

  render() {
    return (
      <section className="content__item-content__video">
        <div className="morph-button morph-button-modal morph-button-modal-4 morph-button-fixed">
          <button type="button">
            Watch the Trailer<span>01:43</span>
          </button>
          <div className="morph-content">
            <span className="morph-clone">01:43</span>
            <div>
              <div className="content-style-video">
                <span className="icon icon-close">Close the dialog</span>
                <video controls>
                  <source src="videos/mov.mp4" type="video/mp4" />
                  <source src="videos/mov.ogg" type="video/ogg" />
                  Your browser does not support HTML5 video.
                </video>
                <div className="controls">
                  <span className="icon icon-pause">Pause</span>
                  <span className="time">00:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
