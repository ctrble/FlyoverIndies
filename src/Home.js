import React, { Component } from "react";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import Resources from "./Resources";
import CodeOfConduct from "./CodeOfConduct";
import Button from "./components/Button";
import logo from "./img/logos/text-logo.png";
import cartIcon from "./img/icons/cart.svg";
import discordIcon from "./img/icons/discord.svg";
import calendarIcon from "./img/icons/calendar.svg";
import twitterIcon from "./img/icons/twitter.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="container fi-container">
        <figure class="image is-4x3 fi-logo">
          <img src={logo} alt="Flyover Indies" />
        </figure>
        <div className="tabs is-right is-medium">
          <ul>
            <li>
              <a href="https://discord.gg/8JdcrkR">
                <span class="icon">
                  <img src={discordIcon} alt="Join our Discord" />
                </span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/FlyoverIndies">
                <span class="icon">
                  <img src={twitterIcon} alt="Find us on Twitter" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://calendar.google.com/calendar/embed?src=1o3frgsjo8jsfgreuq8d8nq9j0%40group.calendar.google.com&ctz=America%2FChicago"
                target="_blank"
              >
                <span class="icon">
                  <img src={calendarIcon} alt="Calendar of Events" />
                </span>
              </a>
            </li>
            <li>
              <a href="https://flyoverindies.threadless.com/">
                <span class="icon">
                  <img src={cartIcon} alt="Flyover Indies Shop" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <Events />
        </div>
        <div className="box">
          <About />
        </div>
        <div className="box">
          <Contact />
        </div>
        <div className="box">
          <Resources />
        </div>
        <div className="box">
          <CodeOfConduct />
        </div>
      </div>
    );
  }
}

export default Home;
