/**
 * demo2.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */

import imagesLoaded from "imagesloaded";
import Uncover from "./uncover";

export function slideshow(elem) {
  // the settings for each one of the slides uncover instances.
  const uncoverOpts = {
    // total number of slices.
    slicesTotal: 8,
    // slices color.
    slicesColor: "#F1F1F1",
    // 'vertical' || 'horizontal'.
    orientation: "horizontal",
    // 'bottom' || 'top' for vertical orientation and 'right' || 'left' for horizontal orientation.
    slicesOrigin: { show: "left", hide: "right" }
  };
  const uncoverAnimation = {
    show: {
      slices: {
        duration: 600,
        easing: "easeInOutCirc",
        delay: (_, i) => i * 50
      }
    },
    hide: {
      slices: {
        duration: 600,
        easing: "easeInOutCirc",
        delay: (_, i) => i * 50
      }
    }
  };

  class Slideshow {
    constructor(el) {
      this.DOM = { el: el };
      this.DOM.slides = Array.from(this.DOM.el.querySelectorAll(`.content__item-content__images--${elem} .slide`));
      this.slidesTotal = this.DOM.slides.length;
      this.current = 0;
      this.uncoverItems = [];
      this.DOM.slides.forEach((slide, pos) =>
        this.uncoverItems.push(
          new Uncover(slide.querySelector(".slide__img"), uncoverOpts)
        )
      );
      this.init();
    }
    init() {
      this.isAnimating = true;
      this.DOM.slides[this.current].classList.add("slide--current");
      this.uncoverItems[this.current]
        .show(true, uncoverAnimation.show)
        .then(() => (this.isAnimating = false));
    }
    navigate(pos) {
      if (
        this.isAnimating ||
        this.current === pos ||
        pos < 0 ||
        pos > this.slidesTotal - 1
      )
        return;
      this.isAnimating = true;

      this.uncoverItems[this.current]
        .hide(true, uncoverAnimation.hide)
        .then(() => {
          this.DOM.slides[this.current].classList.remove("slide--current");
          this.current = pos;

          const newItem = this.uncoverItems[this.current];
          newItem.hide();
          this.DOM.slides[this.current].classList.add("slide--current");
          newItem
            .show(true, uncoverAnimation.show)
            .then(() => (this.isAnimating = false));
        });
    }
  }

  imagesLoaded(
    document.querySelectorAll(".slide__img"),
    { background: true },
    () => {

      const slideshow = new Slideshow(document.querySelector(`.content__item-content__images--${elem} .slides`));
      const pagination = document.querySelector(`.content__item-content__images--${elem} .nav`);
      const triggers = Array.from(pagination.querySelectorAll(".nav__item"));
      triggers.forEach((trigger, pos) => {
        if (pos === 0) {
          trigger.classList.add("nav__item--current");
        }
        trigger.addEventListener("click", () => {
          if (slideshow.isAnimating) return;
          slideshow.navigate(pos);
          pagination
            .querySelector(".nav__item--current")
            .classList.remove("nav__item--current");
          trigger.classList.add("nav__item--current");
        });
      });
    }
  );
}
