import {setChannels, addChannel, removeChannel, INITIAL_STATE} from './core'

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
      case 'SET_CHANNELS':
        return setChannels(state, action.channels);
    case 'ADD_CHANNEL':
        return addChannel(state, action.channel);
    case 'REMOVE_CHANNEL':
        return removeChannel(state, action.channel);
  }
  return state;
}
