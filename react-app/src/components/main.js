import React, { Component } from "react";

const NoParty = (props) => {
  return (
    <section className="NoParty-Section">
        <div className="container">
          <h1>Who are you?!</h1>
        </div>
    </section>
  );
}

const Supplier = (props) => {
  return (
    <section className="Supplier-Section">
        <div className="container">
          <ul>
            <li>Collect Seeds</li>
            <li>Sell</li>
            <li>Sold (// ok from both parties)</li>
          </ul>
        </div>
    </section>
  );
}

const Producer = (props) => {
  return (
    <section className="Producer-Section">
        <div className="container">
          <ul>
            <li>Seeds received (// sends ok to supplier)</li>
            <li>Plant</li>
            <li>Crop</li>
            <li>Sell</li>
            <li>Sold (// ok from both parties)</li>
          </ul>
        </div>
    </section>
  );
}

const Processor = (props) => {
  return (
    <section className="Processor-Section">
        <div className="container">
          <ul>
            <li>CBD received (// sends ok to producer)</li>
            <li>Transform</li>
            <li>Ready to shipment</li>
            <li>Shipped (// ok from both parties)</li>
          </ul>
        </div>
    </section>
  );
}

const Distributor = (props) => {
  return (
    <section className="Distributor-Section">
        <div className="container">
          <ul>
            <li>Pick-up (// sends ok to processor)</li>
            <li>Drop</li>
            <li>Confirmed (// ok from both parties)</li>
          </ul>
        </div>
    </section>
  );
}

const Retailer = (props) => {
  return (
    <section className="Retailer-Section">
        <div className="container">
          <ul>
            <li>Shipment received (// sends ok to distributor)</li>
            <li>Handled</li>
            <li>Sold (// ok from both parties)</li>
          </ul>
        </div>
    </section>
  );
}

const Consumer = (props) => {
  return (
    <section className="Consumer-Section">
        <div className="container">
          <ul>
            <li>Buy (// sends ok to retailer)</li>
          </ul>
        </div>
    </section>
  );
}

const Tracking = (props) => {
  let log = props.log;

  return (
    <section className="tracking-section">
        <div className="container">
          <div className="row">
            {log.map((entry, i) => {
              let timeEntry = entry.eventTime.split('T');
              let date = [timeEntry[0], timeEntry[1].split('.')[0]];

              return (
                <div 
                  key={i}
                  className="tracking-entry col-12"
                >
                  <div>
                    <h2>What</h2>
                    <ul>
                      {entry.epcList.map((epc, j) => {
                        return(
                          <li key={j}>{epc.replace(/urn:epc:id:sgtin:/g,'')}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <h2>Why</h2>
                    {entry.bizStep.replace(/urn:epcglobal:cbv:bizstep:/g,'')}
                  </div>
                  <div>
                    <h2>Where</h2>
                    {entry.readPoint.replace(/urn:epc:id:sgln:/g,'')}
                  </div>
                  <div>
                    <h2>When</h2>
                    {date[0] + ' ' + date[1]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
}

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parties: ['Supplier', 'Producer', 'Processor', 'Distributor', 'Retailer', 'Consumer', 'Tracking'],
      activeParty: '',
      log: [
        {
          "isA": "ObjectEvent",
          "eventTime": "2005-04-03T20:33:31.116-06:00",
          "eventTimeZoneOffset": "-06:00",
          "epcList": [
            "urn:epc:id:sgtin:0614141.107346.2017",
            "urn:epc:id:sgtin:0614141.107346.2018"
          ],
          "action": "OBSERVE",
          "bizStep": "urn:epcglobal:cbv:bizstep:packing",
          "disposition": "urn:epcglobal:cbv:disp:in_transit",
          "readPoint": "urn:epc:id:sgln:0614141.07346.1234",
          "bizTransactionList": [
            {
              "type": "urn:epcglobal:cbv:btt:po",
              "bizTransaction": "http://transaction.acme.com/po/12345678"
            }
          ]
        },
        {
          "isA": "ObjectEvent",
          "eventTime": "2010-04-03T20:33:31.116-06:00",
          "eventTimeZoneOffset": "-06:00",
          "epcList": [
            "urn:epc:id:sgtin:0614141.107346.2019",
            "urn:epc:id:sgtin:0614141.107346.2020"
          ],
          "action": "OBSERVE",
          "bizStep": "urn:epcglobal:cbv:bizstep:loading",
          "disposition": "urn:epcglobal:cbv:disp:in_transit",
          "readPoint": "urn:epc:id:sgln:0614141.07346.1234",
          "bizTransactionList": [
            {
              "type": "urn:epcglobal:cbv:btt:po",
              "bizTransaction": "http://transaction.acme.com/po/12345678"
            }
          ]
        },
        {
          "isA": "ObjectEvent",
          "eventTime": "2015-04-03T20:33:31.116-06:00",
          "eventTimeZoneOffset": "-06:00",
          "epcList": [
            "urn:epc:id:sgtin:0614141.107346.2021",
            "urn:epc:id:sgtin:0614141.107346.2022"
          ],
          "action": "OBSERVE",
          "bizStep": "urn:epcglobal:cbv:bizstep:shipping",
          "disposition": "urn:epcglobal:cbv:disp:in_transit",
          "readPoint": "urn:epc:id:sgln:0614141.07346.1234",
          "bizTransactionList": [
            {
              "type": "urn:epcglobal:cbv:btt:po",
              "bizTransaction": "http://transaction.acme.com/po/12345678"
            }
          ]
        },
        {
          "isA": "ObjectEvent",
          "eventTime": "2020-04-03T20:33:31.116-06:00",
          "eventTimeZoneOffset": "-06:00",
          "epcList": [
            "urn:epc:id:sgtin:0614141.107346.2023",
            "urn:epc:id:sgtin:0614141.107346.2024"
          ],
          "action": "OBSERVE",
          "bizStep": "urn:epcglobal:cbv:bizstep:unpacking",
          "disposition": "urn:epcglobal:cbv:disp:in_transit",
          "readPoint": "urn:epc:id:sgln:0614141.07346.1234",
          "bizTransactionList": [
            {
              "type": "urn:epcglobal:cbv:btt:po",
              "bizTransaction": "http://transaction.acme.com/po/12345678"
            }
          ]
        },
     ]
    };
  }

  handleChangeParty = party => {
    this.setState({ activeParty: party });
  };
  
    
  render() {
    let { parties, activeParty, log } = this.state;

    return (
      <div className="App-Main">
        <section className="user-selection">
          <div className="container">
            <ul>
              {parties.map((party, i) => {
                  let active = party === activeParty;

                  return (
                    <li 
                      key={i}
                      className={active ? 'active' : ''}
                      data-value={party}
                      onClick={this.handleChangeParty.bind(this, party)}
                    >{party}</li>
                  );
                })}
            </ul>
          </div>
        </section>

        <section className="user-actions">
          <div className="container">
            {(() => {
              switch(activeParty) {
                case 'Supplier':
                  return <Supplier />;
                case 'Producer':
                  return <Producer />;
                case 'Processor':
                  return <Processor />;
                case 'Distributor':
                  return <Distributor />;
                case 'Retailer':
                  return <Retailer />;
                case 'Consumer':
                  return <Consumer />;
                case 'Tracking':
                  return <Tracking log={log} />;
                default:
                  // return <NoParty />;
                  return <Tracking log={log} />;
              }
            })()}
          </div>
        </section>
      </div>
    );
  }
}
