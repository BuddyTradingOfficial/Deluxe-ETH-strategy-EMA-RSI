# Deluxe-ETH-strategy-EMA-RSI
JavaScript ETH trading bot using EMA cross with RSI filter. On BuddyTrading marketplace
```bash
# Deluxe ETH Strategy — EMA + RSI

JavaScript trading bot for ETH using EMA cross with an RSI filter. Built for BuddyTrading. Minimal, modular, and ready to extend.

## Features
* Long entry when short EMA crosses above long EMA with RSI filter
* Exit rules for long and short when signals reverse or RSI weakens
* Clean modules: indicators, onEnter, onUpdateLong, onUpdateShort, bot
* Works with BuddyTrading engine helpers

## Repository Structure
    src/
      ├── indicators.js
      ├── onEnter.js
      ├── onUpdateLong.js
      ├── onUpdateShort.js
      └── bot.js

## Usage
Add these files to your BuddyTrading strategy project. The engine provides EMA, RSI, and helper functions at runtime.

## Disclaimer
For educational use only. Not financial advice.
