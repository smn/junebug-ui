import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setChannels, addChannel, removeChannel} from '../app/core';
import CHANNEL_FIXTURE from './fixtures';

describe('application logic', () => {

  describe('setChannels', () => {

    it('adds the channels to the state', () => {
      const state = Map();
      const channels = List.of(CHANNEL_FIXTURE);
      const nextState = setChannels(state, channels);
      expect(nextState).to.equal(Map({
        channels: List.of(CHANNEL_FIXTURE)
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const channels = [CHANNEL_FIXTURE];
      const nextState = setChannels(state, channels);
      expect(nextState).to.equal(Map({
        channels: List.of(CHANNEL_FIXTURE)
      }));
    });

  });

  describe('addChannel', () => {
    it('should add a single channel', () => {
      const state = Map({
        channels: List.of((CHANNEL_FIXTURE))
      });
      const new_channel = Map(CHANNEL_FIXTURE).update(
          'label', label => 'New Channel')
      const nextState = addChannel(state, new_channel);
      expect(nextState).to.equal(Map({
        channels: List.of(CHANNEL_FIXTURE, new_channel)
      }));
    });
  });

  describe('removeChannel', () => {
    it('should remove a single channel', () => {
      const state = Map({
        channels: List.of((CHANNEL_FIXTURE))
      });
      const nextState = removeChannel(state, CHANNEL_FIXTURE);
      expect(nextState).to.equal(Map({
        channels: List.of()
      }));
    });
  });
});
