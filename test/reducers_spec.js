import {List, Map} from 'immutable';
import {expect} from 'chai';

import reducer from '../app/reducer';
import CHANNEL_FIXTURE from './fixtures';

describe('reducer', () => {

    it('has an initial state', () => {
        const action = {type: 'SET_CHANNELS', channels: [CHANNEL_FIXTURE]};
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(Map({
            channels: List.of(CHANNEL_FIXTURE)
        }));
    });

    it('handles SET_CHANNELS', () => {
        const initialState = Map({});
        const action = {type: 'SET_CHANNELS', channels: [CHANNEL_FIXTURE]};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map({
            channels: List.of(CHANNEL_FIXTURE)
        }));
    });

    it('handles ADD_CHANNEL', () => {
        const initialState = Map({
            channels: List([])
        });
        const action = {type: 'ADD_CHANNEL', channel: CHANNEL_FIXTURE};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map({
            channels: List.of(CHANNEL_FIXTURE)
        }));
    })

    it('handles REMOVE_CHANNEL', () => {
        const initialState = Map({
            channels: List.of(CHANNEL_FIXTURE)
        });
        const action = {type: 'REMOVE_CHANNEL', channel: CHANNEL_FIXTURE};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Map({
            channels: List.of()
        }));

    })

    it('can be used with reduce', () => {
        const actions = [
            {type: 'SET_CHANNELS', channels: [CHANNEL_FIXTURE]},
            {type: 'REMOVE_CHANNEL', channel: CHANNEL_FIXTURE},
            {type: 'ADD_CHANNEL', channel: CHANNEL_FIXTURE}
        ]
        const finalState = actions.reduce(reducer, Map());
        expect(finalState).to.equal(Map({
            channels: List.of(CHANNEL_FIXTURE)
        }))
    })
});
