import React, { Component } from "react";
import "./MainNavigation.scss";

export default class MainNavigation extends Component {
  state = {
    current: 'home'
  };

  setCurrentItem = item => {
    this.setState({current: item});
  }

  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className={`menu__list__item ${this.state.current === 'home' ? 'menu__list__item--current' : null}`}>
            <a href="#test" data-menuitem="home" onClick={this.setCurrentItem.bind(null, 'home')}>Home</a>
          </li>
          <li className={`menu__list__item ${this.state.current === 'about' ? 'menu__list__item--current' : null}`}>
            <a href="#test" data-menuitem="about" onClick={this.setCurrentItem.bind(null, 'about')}>About</a>
          </li>
          <li className={`menu__list__item ${this.state.current === 'contact' ? 'menu__list__item--current' : null}`}>
            <a href="#test" data-menuitem="contact" onClick={this.setCurrentItem.bind(null, 'contact')}>Contact</a>
          </li>
          <li className="menu__list__line"></li>
        </ul>
      </nav>
    );
  }
}
