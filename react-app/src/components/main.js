import React, { Component } from 'react';
import NoParty from './noParty';
import Manufacturer from './manufacturer';
import Retailer from './retailer';
import Store from './store';
import Transportation from './transportation';

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

  /**
   * Blockchain Actions
   */
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
        }),
        () => {
          console.log(status, 'Ready to deliver');

          this.saveToBlockchain(this.epcListData(), this.goodsPerSscc()[0]['where'], status);
        }
      );
    }

    this.setState(
      { status: status},
      () => {
        console.log(status, 'Ready to send! - Saved in ' + party + ' Blockchain');

        this.saveToBlockchain(this.epcListData(), this.goodsPerSscc()[0]['where'], status);
      }
    );
  }

  handleTransportConfirmation = () => {
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

        this.saveToBlockchain(this.epcListData(), 'inMovement', 'onRoute');

        this.setState({ status: 'inRoute'});
      }
    );
  }

  handlePartyConfirmation = () => {
    console.log('Party accepted! - Save in Consortium Blockchain');

    this.saveToBlockchain(this.epcListData(), this.state.destination, 'outbound');

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
        this.setState({
          status: '',
          destination: ''
        });
      }
    );
  }

  /**
   * Helpers
   */
  saveToBlockchain = (what, where, why) => {
    fetch('http://team18.supply-chain-id.sbhack.io/recordevent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "mnemonic": "wheat divide clerk blast avoid retire avoid hammer current drastic deputy tent",
        "payload": {
          // Event Type
          "isA": "ObjectEvent",
        
          // When
          "eventTime": new Date(),
          "eventTimeZoneOffset": "+01:00",
        
          // What
          "epcList": what,
        
          // Where
          "readPoint": where,
        
          // Why
          "action": "OBSERVE",
          "bizStep": "urn:epcglobal:cbv:bizstep:" + why,
          "disposition": "",
          "bizTransactionList": []
        }
      }),
    });
  }

  epcListData = () => {
    let epcList = [];

    this.goodsPerSscc().forEach(element => {
      if(element.sscc) {
        epcList.push('urn:epc:id:' + element.gtin);
      }
    });

    return epcList;
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
    let { parties, activeParty, sscc, destination, status } = this.state;

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
                return <Store 
                          goods={this.goodsPerLocation('sgln:4012345.01003.0')}
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
              case 'Transportation':
                return <Transportation
                          goods={this.goodsPerSscc()}
                          status={status}
                          handleTransportConfirmation={this.handleTransportConfirmation}
                          handleChangeReady={this.handleChangeReady}
                        />;
              default:
                return <NoParty />;
            }
          })()}
        </section>
      </div>
    );
  }
}
