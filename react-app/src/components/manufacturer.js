import React, { Component } from "react";
import manufacturerImage from "./../img/cbd/manufacturer.jpg";
import weedImage from "./../img/cbd/weed.jpg";

export default class Manufacturer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'packing': false
    }
  }

  render() {
    let { packing } = this.state;
    let goods = this.props.goods;
    let parties = this.props.parties;
    let activeParty = this.props.activeParty;
    let sscc = this.props.sscc;
    let destination = this.props.destination;

    return (
      <section className="manufacturer-section">
        <div className="imageBackground" style={{backgroundImage: 'url('+ manufacturerImage +')'}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Goods</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container data-container">
          <div className="row">
            <div className="col-12">
              {goods && goods.length ? (
                <ul>
                  {goods.map((good, i) => {
                    return(
                      <li key={i} className='cbd-element'>
                        <img src={weedImage} alt="CBD plant" />
                        <div className="cbd-data">
                          <h5>{good.gtin}</h5>
                          {packing && (
                            <select onChange={this.props.handleChangeSscc.bind(this, good)} value={good.sscc}>
                              <option value='' disabled>SSCC</option>
                              {sscc.map((code, j) => {
                                return(
                                  <option key={j} value={code}>{code}</option>
                                )
                              })}
                            </select>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <h4>No goods available</h4>
              )}
            </div>
            <div className="col-12">
              <button onClick={() => this.setState({packing: !packing})}>Packing</button>
            </div>
            {packing && (
              <div className="col-12">
                <h4>Destination</h4>
                <select onChange={this.props.handleChangeDestination} value={destination}>
                  <option value='' disabled>Destination</option>
                  {parties.map((party, i) => {
                    if(!party.location || party.name === activeParty) {
                      return false;
                    }

                    return(
                      <option key={i} value={party.location}>{party.name}</option>
                    )
                  })}
                </select>
                <button className="ready-btn" onClick={this.props.handleChangeReady.bind(this, 'manufacturer', 'readyToShip')}>Ready</button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
