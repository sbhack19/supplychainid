import React, { Component } from "react";
import Manufacturer from './manufacturer';
import Retailer from './retailer';
import Transportation from './transportation';

const NoParty = (props) => {
  return (
    <section className="noparty-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Who are you?!</h1>
            </div>
          </div>
        </div>
    </section>
  );
}

const Store = (props) => {
  return (
    <section className="store-section">
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
      'parties': [
        {
          'name': 'Manufacturer',
          'location': 'sgln:4012345.01001.0'
        }, {
          'name': 'Retailer',
          'location': 'sgln:4012345.01002.0'
        }, {
          'name': 'Store',
          'location': 'sgln:4012345.01003.0'
        }, {
          'name': 'Transportation',
          'location': ''
        }, {
          'name': 'Tracking',
          'location': ''
        }
      ],
      'activeParty': '',
      'bizSteps': ['encoding', 'packing', 'accepting', 'loading', 'departing', 'arriving', 'receiving', 'cycle_counting','unpacking', 'inspecting', 'retail_selling'],
      'sscc': ['sscc:40001356.5900000001', 'sscc:40001356.5900000002', 'sscc:40001356.5900000003', 'sscc:40001356.5900000004'],
      'goods': [
        {
          'gtin': 'sgtin:4026800.10001.101',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10001.102',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10001.103',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10001.104',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10001.105',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10002.101',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10002.102',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10002.103',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10002.104',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        },
        {
          'gtin': 'sgtin:4026800.10002.105',
          'sscc': '',
          'where': 'sgln:4012345.01001.0',
        }
      ],
      'destination': '',
      'status': '', // readyToShip | inRoute | readyToDeliver
      'log': [
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

  handleChangeDestination = destination => {
    this.setState({ destination: destination.target.value })
  }

  handleChangeReady = (party, status) => {
    if(status === 'readyToDeliver') {
      this.setState(
        prevState => ({
          goods: prevState.goods.map((obj, i) =>
            obj.sscc && !obj.where 
              ? Object.assign(obj, {
                  where: this.state.destination,
                })
              : obj
          )
        })
      );
    }

    this.setState(
      { status: status},
      () => {
        console.log(status, 'Ready to send! - Save in ' + party + ' Blockchain');
      }
    );
  }

  handleTransportConfirmation = (status) => {
    this.setState(
      prevState => ({
        goods: prevState.goods.map((obj, i) =>
          obj.sscc
            ? Object.assign(obj, {
                where: '',
              })
            : obj
        )
      }),
      () => {
        console.log('Transportation accepted - Save in Consortium Blockchain');

        this.setState({ status: 'inRoute'});
      }
    );
  }

  handlePartyConfirmation = () => {
    this.setState(
      prevState => ({
        goods: prevState.goods.map((obj, i) =>
          obj.sscc && obj.where 
            ? Object.assign(obj, {
                sscc: '',
              })
            : obj
        )
      }),
      () => {
        console.log('Party accepted! - Save in Consortium Blockchain');
        this.setState({ status: ''});
      }
    );
  }

  handleChangeSscc = (good, e) => {
    let newSscc = e.target.value;

    this.setState(prevState => ({
      goods: prevState.goods.map((obj, i) =>
        good.gtin === obj.gtin
          ? Object.assign(obj, {
              sscc: newSscc,
            })
          : obj
      )
    }));
  }

  goodsPerLocation = location => {
    return this.state.goods.filter(obj => {
      return obj.where === location
    });
  }

  goodsPerSscc = () => {
    return this.state.goods.filter(obj => {
      return obj.sscc === 'sscc:40001356.5900000001' || obj.sscc === 'sscc:40001356.5900000002' || obj.sscc === 'sscc:40001356.5900000003' || obj.sscc === 'sscc:40001356.5900000004'
    })
  }

  render() {
    let { parties, activeParty, sscc, destination, status, log } = this.state;

    return (
      <div className="App-Main">
        <section className="parties-selection">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul>
                  {parties.map((party, i) => {
                      let active = party.name === activeParty;

                      return (
                        <li
                          key={i}
                          className={active ? 'active' : ''}
                          onClick={this.handleChangeParty.bind(this, party.name)}
                        >{party.name}</li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="parties-actions">
          {(() => {
            switch(activeParty) {
              case 'Manufacturer':
                return <Manufacturer 
                          goods={this.goodsPerLocation('sgln:4012345.01001.0')}
                          parties={parties}
                          activeParty={activeParty}
                          sscc={sscc}
                          destination={destination}
                          handleChangeSscc={this.handleChangeSscc}
                          handleChangeDestination={this.handleChangeDestination}
                          handleChangeReady={this.handleChangeReady}
                        />;
              case 'Transportation':
                return <Transportation
                          goods={this.goodsPerSscc()}
                          status={status}
                          handleTransportConfirmation={this.handleTransportConfirmation}
                          handleChangeReady={this.handleChangeReady}
                        />;
              case 'Retailer':
                return <Retailer 
                          goods={this.goodsPerLocation('sgln:4012345.01002.0')}
                          parties={parties}
                          activeParty={activeParty}
                          sscc={sscc}
                          destination={destination}
                          status={status}
                          handlePartyConfirmation={this.handlePartyConfirmation}
                          handleChangeSscc={this.handleChangeSscc}
                          handleChangeDestination={this.handleChangeDestination}
                          handleChangeReady={this.handleChangeReady}
                        />;
              case 'Store':
                return <Store />;
              case 'Tracking':
                return <Tracking log={log} />;
              default:
                return <NoParty />;
                // return <Manufacturer />;
            }
          })()}
        </section>
      </div>
    );
  }
}
