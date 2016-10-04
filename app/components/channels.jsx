import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

export class Channel extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.channel.label}</td>
      </tr>
    )
  }
}

export class ChannelList extends React.Component {
  render() {
    return (
      <table className="channels-connect">
        <tbody>
        {this.props.channels.map(channel =>
          <Channel channel={channel}/>
        )}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.get('channels'),
  };
}

export const ChannelListContainer = connect(mapStateToProps)(ChannelList)
