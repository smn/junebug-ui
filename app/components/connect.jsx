import React from 'react';
import ReactDOM from 'react-dom';

export class ConnectBox extends React.Component {
  render() {
    return (
      <form className="form-connect">
        <h2 className="form-connect-heading">Connect to Junebug</h2>
        <label htmlFor="inputUrl" className="sr-only">URL</label>
        <input type="url" id="inputUrl" className="form-control" placeholder="http://" required autoFocus />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Connect</button>
      </form>
    );
  }
}
