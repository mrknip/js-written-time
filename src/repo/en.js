module.exports = {
  baseNumbers: {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
  },
  numberElements: {
    connector: '-',
  },
  // Hard coding these as they are common enough to be used in >1 language
  formatters: {
    onTheHour: function (hours, minutes, getNumberString) {
      return getNumberString(hours) + ' o\'clock';
    },

    quarterPast: function (hours, minutes, getNumberString) {
      return 'quarter past ' + getNumberString(hours);
    },

    xPast: function (hours, minutes, getNumberString) {
      return getNumberString(minutes) + ' past ' + getNumberString(hours);
    },

    quarterTo: function (hours, minutes, getNumberString) {
      return 'quarter to ' + getNumberString(hours, { nextHour: true });
    },

    xTo: function (hours, minutes, getNumberString) {
      return getNumberString(60 - minutes) + ' to ' + getNumberString(hours, { nextHour: true });
    },

    halfPast: function (hours, minutes, getNumberString) {
      return 'half past ' + getNumberString(hours);
    },

    dayRegions: function (hours, minutes, timeString) {
      if (hours <= 12) {
        return timeString + ' in the morning';
      }

      if (hours <= 18) {
        return timeString + ' in the afternoon';
      }

      return timeString + ' in the evening';
    }
  }
};
