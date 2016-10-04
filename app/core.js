import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export const setChannels = (state, channels) => {
    return state.set('channels', List(channels));
}

export const addChannel = (state, channel) => {
    return state.update('channels', channels => channels.push(channel));
}

export const removeChannel = (state, channel) => {
    return state.update('channels', channels => channels.pop(channel));
}
