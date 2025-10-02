/**
 * Exit long when:
 *  - short EMA crossed below long EMA OR s < l
 * Less strict to reduce lingering exposure in pullbacks.
 */
async function onUpdateLong(state, update) {
  const { price, mts } = update;
  const i  = await Indicators(state);
  const iv = await IndicatorValues(state);

  const { emaS } = i;
  const l = iv.emaL;
  const s = iv.emaS;

  if (emaS.crossed(l) || s < l) {
    return await ClosePositionMarket(state, {
      price,
      mtsCreate: mts,
      label: 'close long'
    });
  }

  return state;
}

module.exports = onUpdateLong;
