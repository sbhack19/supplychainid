import React, { Component } from "react";

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
    let sscc = this.props.sscc;
    let status = this.props.status;

    return (
      <section className="retailer-Section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {goods && goods.length ? (
                <React.Fragment>
                  <h4>Goods</h4>
                  <ul>
                    {goods.map((good, i) => {
                      return(
                        <li key={i}>
                          {good.gtin}
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
            {/* <div className="col-12">
              <button onClick={() => this.setState({packing: !packing})}>Packing</button>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
