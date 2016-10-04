import {Map, List} from 'immutable';
import {expect} from 'chai';
import makeStore from '../app/store';
import CHANNEL_FIXTURE from './fixtures';

describe('store', () => {
    it('is a Redux store configured with the correct reducers', () => {
        const store = makeStore();
        expect(store.getState()).to.equal(Map());

        store.dispatch({
            type: 'SET_CHANNELS',
            channels: [CHANNEL_FIXTURE]
        })

        expect(store.getState()).to.equal(Map({
            channels: List.of(CHANNEL_FIXTURE)
        }));
    });
});
