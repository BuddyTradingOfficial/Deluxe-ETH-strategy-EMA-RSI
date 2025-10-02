/**
 * Async orchestrator that BuddyTrading can call each update.
 */
const indicators    = require('./indicators');
const onEnter       = require('./onEnter');
const onUpdateLong  = require('./onUpdateLong');
const onUpdateShort = require('./onUpdateShort');

async function runBot(state, update) {
  state.indicators = indicators;

  state = await onEnter(state, update);
  state = await onUpdateLong(state, update);
  state = await onUpdateShort(state, update);

  return state;
}

module.exports = runBot;
