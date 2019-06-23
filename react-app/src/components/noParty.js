import React, { Component } from "react";
import introImage from "./../img/supply_chain.png";

export default class NoParty extends Component {
  render() {
    return (
        <section className="noparty-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Who are you?!</h1>
                <img src={introImage} alt="Supply Chain by Becris from the Noun Project" />
              </div>
            </div>
          </div>
      </section>
    );
  }
}
