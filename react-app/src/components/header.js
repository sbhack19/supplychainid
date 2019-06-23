import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Supply Chain ID</h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
