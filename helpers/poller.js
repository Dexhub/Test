const fs = require('fs');
const path = require('path');

const PropertiesReader = require('properties-reader');

let property = PropertiesReader(path.resolve(__dirname, '../timer.properties'));


let time;

class PollExchange {
  constructor() {
    time = property.get('delay');

    fs.watch(path.resolve(__dirname, '../timer.properties'), 'utf-8', (eventType, filename) => {
      property = PropertiesReader(path.resolve(__dirname, '../timer.properties'));
      time = property.get('delay');
    });
  }

  invokePoller() {
    setTimeout(() => {
      this.invokePoller();
    }, time);
  }

  changePollTime(delay) {
    time = delay;
  }

}
module.exports = new PollExchange();
