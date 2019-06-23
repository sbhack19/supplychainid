import React, { Component } from "react";
import introImage from "./../img/supply_chain.png";

export default class NoParty extends Component {
  render() {
    return (
        <section className="noparty-section">
          <div className="container">
            <div className="row">
              <div className="col-12 welcome-container">
                <h2>Welcome to the future</h2>
                <img src={introImage} alt="Supply Chain" />
                <h2>of CBD Supply Chain</h2>
              </div>
            </div>
          </div>
      </section>
    );
  }
}
