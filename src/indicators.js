/**
 * EMA + RSI indicators for BuddyTrading engine
 */
const indicators = {
  emaL: new EMA([100, 'high']),
  emaS: new EMA([10, 'low']),
  rsi:  new RSI([14, 'close'])
}

// optional colors if your viewer supports them
indicators.emaL.color = '#00ff00'
indicators.emaS.color = '#ff0000'
if (indicators.rsi) indicators.rsi.color = '#1e90ff'

module.exports = indicators
