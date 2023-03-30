import React, { Component } from "react";
import "./App.css";
import Card from './Card';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h5>Company name</h5>
          <div id="header_text">
            <a id="header_text">Features</a>
            <a id="header_text">Enterprise</a>
            <a id="header_text">Support</a>
            <a id="header_text">Pricing</a>
            <button class="signup">Sign up</button>
          </div>
        </header>
        <div class="wrap">
          <div class="pricing">
            <div>
              <p class="pricing_head">Pricing</p>
              <p class="pricing_body">
                Quickly build an effective pricing table for your potential
                customers with this Bootstrap example. It's built with default
                Bootstrap components and utilities with little customization.
              </p>
            </div>
          </div>
          <div class="container">
            <div class="card_wrap">
              <Card name="Free" money="0" user="10" storage="2" support="Email" css="btn" btntext="Sign up for free"/>
              <Card name="Pro" money="15" user="20" storage="10" support="Priority email" css="btn_blue" btntext="Get started"/>
              <Card name="Enterprise" money="29" user="30" storage="15" support="Phone and email" css="btn_blue" btntext="Contact us"/>
            </div>
          </div>
        </div>
        <footer>
          <div class="footer_wrapper">
            <div class="footer_container">
              <img
                src="./images/bootstrap-solid.svg"
                alt=""
                width="24"
                height="24"
              ></img>
              <small>&copy; 2017-2018</small>
            </div>
            <div class="footer_container">
              <p class="footer_text">Features</p>
              <ul>
                <li>Cool stuff</li>
                <li>Random feature</li>
                <li>Team feature</li>
                <li>Stuff for developers</li>
                <li>Another one</li>
                <li>Last time</li>
              </ul>
            </div>
            <div class="footer_container">
              <p class="footer_text">Resources</p>
              <ul>
                <li>Resource</li>
                <li>Resource name</li>
                <li>Another resource</li>
                <li>Final resource</li>
              </ul>
            </div>
            <div class="footer_container">
              <p class="footer_text">About</p>
              <ul>
                <li>Team</li>
                <li>Locations</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
