import React, { Component } from "react";
import retailerImage from "./../img/cbd/retailer.jpg";
import rawOilImage from "./../img/cbd/raw-oil.jpg";

export default class Retailer extends Component {
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
    let status = this.props.status;
    let destination = this.props.destination;

    return (
      <section className="retailer-Section">
        <div className="imageBackground" style={{backgroundImage: 'url('+ retailerImage +')'}}>
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
                <React.Fragment>
                  <ul>
                    {goods.map((good, i) => {
                      return(
                        <li key={i} className='cbd-element'>
                          <img src={rawOilImage} alt="CBD raw oil" />
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
                  {status === 'readyToDeliver' ? (
                    <button onClick={this.props.handlePartyConfirmation}>Confirm</button>
                  ) : (
                    <button onClick={() => this.setState({packing: !packing})}>Packing</button>
                  )}
                </React.Fragment>
              ) : (
                <h4>No goods available</h4>
              )}
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
