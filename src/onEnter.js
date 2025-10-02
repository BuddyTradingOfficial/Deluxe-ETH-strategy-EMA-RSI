/**
 * Enter long when:
 *  - short EMA crossed above long EMA OR s > l
 *  - RSI < 70 (avoid overheated entries)
 */
async function onEnter(state, update) {
  if (GetNumCandles(state) < 2) return state;

  const { price, mts } = update;
  const i  = await Indicators(state);
  const iv = await IndicatorValues(state);

  const { emaS } = i;
  const l = iv.emaL;
  const s = iv.emaS;
  const r = iv.rsi;

  const amount = 0.2;

  if ((emaS.crossed(l) || s > l) && r < 70) {
    return await OpenLongPositionMarket(state, {
      mtsCreate: mts,
      amount,
      price,
      label: 'enter long'
    });
  }

  return state;
}

module.exports = onEnter;
