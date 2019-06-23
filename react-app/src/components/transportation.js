import React, { Component } from "react";
import transportationImage from "./../img/cbd/transportation.jpg";
import palletImage from "./../img/cbd/pallet.jpg";

export default class Transportation extends Component {
  render() {
    let goods = this.props.goods;
    let status = this.props.status;

    return (
      <section className="transportation-section">
        <div className="imageBackground" style={{backgroundImage: 'url('+ transportationImage +')'}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Goods to transport</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container data-container">
          <div className="row">
            <div className="col-12">
              {status === 'readyToShip' || status === 'inRoute' || status === 'readyToDeliver' ? (
                <React.Fragment>
                  <ul>
                    {goods.map((good, i) => {
                      return(
                        <li key={i} className='cbd-element'>
                          <img src={palletImage} alt="CBD raw oil" />
                          <div className="cbd-data">
                            <h5>{good.gtin}</h5>
                          </div>
                        </li>
                      )
                    })}
                  </ul>

                  {status === 'readyToShip' ? (
                    <button onClick={this.props.handleTransportConfirmation}>Confirm</button>
                  ) : (
                    <button onClick={this.props.handleChangeReady.bind(this, 'transportation', 'readyToDeliver')}>Ready to Deliver</button>
                  )}
                </React.Fragment>
              ) : (
                <h4>Nothing to transport</h4>
              )}
            </div>
          </div>
        </div>
    </section>
    );
  }
}
