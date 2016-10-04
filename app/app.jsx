import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ConnectBox } from './connect.jsx';

var state = {
  "channels": [{
    "status": {
      "status": null,
      "inbound_message_rate": 0,
      "submitted_event_rate": 0,
      "delivery_failed_rate": 0,
      "components": {},
      "rejected_event_rate": 0,
      "outbound_message_rate": 0,
      "delivery_pending_rate": 0,
      "delivery_succeeded_rate": 0
    },
    "type": "vumigo",
    "label": "NDOH - PMTCT - QA - *120*4216*30#",
    "amqp_queue": "jsbox_pmtct_qa",
    "config": {
      "web_port": 9007,
      "access_token": "XXX",
      "web_path": "/api-path",
      "base_url": "https://www.example.com/",
      "account_key": "XXX",
      "redis_manager": {
        "host": "redis-host",
        "db": 1,
        "port": 6379
      },
      "conversation_key": "XXXX"
    },
    "id": "5a7b4f8b-ffae-473c-a688-f9a1627db789"
  }]
}

class App extends React.Component {
  render() {
    return (
      <div id="connect" className="container">
        <ConnectBox />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
