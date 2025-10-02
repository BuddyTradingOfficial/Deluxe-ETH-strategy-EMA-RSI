/**
 * Exit short when:
 *  - short EMA crossed above long EMA OR s > l
 * Keeps shorts from fighting uptrends.
 */
async function onUpdateShort(state, update) {
  const { price, mts } = update;
  const i  = await Indicators(state);
  const iv = await IndicatorValues(state);

  const { emaS } = i;
  const l = iv.emaL;
  const s = iv.emaS;

  if (emaS.crossed(l) || s > l) {
    return await ClosePositionMarket(state, {
      price,
      mtsCreate: mts,
      label: 'close short'
    });
  }

  return state;
}

module.exports = onUpdateShort;
