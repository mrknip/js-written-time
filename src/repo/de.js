module.exports = {
  baseNumbers: {
    '0': 'null',
    '1': 'ein',
    '2': 'zwei',
    '3': 'drei',
    '4': 'vier',
    '5': 'fünf',
    '6': 'sechs',
    '7': 'sieben',
    '8': 'acht',
    '9': 'neun',
    '10': 'zehn',
    '11': 'elf',
    '12': 'zwölf',
    '13': 'dreizehn',
    '14': 'vierzehn',
    '15': 'fünfzehn',
    '16': 'sechzehn',
    '17': 'siebzehn',
    '18': 'achtzehn',
    '19': 'neunzehn',
    '20': 'zwanzig',
    '21': 'einundzwanzig',
    '22': 'zweiundzwanzig',
    '23': 'dreiundzwanzig',
    '24': 'vierundzwanzig',
    '25': 'fünfundzwanzig',
    '26': 'sechsundzwanzig',
    '27': 'siebenundzwanzig',
    '28': 'achtundzwanzig',
    '29': 'neunundzwanzig',
    '30': 'dreißig',
    '31': 'einunddreißig',
    '32': 'zweiunddreißig',
    '33': 'dreiunddreißig',
    '34': 'vierunddreißig',
    '35': 'fünfunddreißig',
    '36': 'sechsunddreißig',
    '37': 'siebenunddreißig',
    '38': 'achtunddreißig',
    '39': 'neununddreißig',
    '40': 'vierzig',
    '41': 'einundvierzig',
    '42': 'zweiundvierzig',
    '43': 'dreiundvierzig',
    '44': 'vierundvierzig',
    '45': 'fünfundvierzig',
    '46': 'sechsundvierzig',
    '47': 'siebenundvierzig',
    '48': 'achtundvierzig',
    '49': 'neunundvierzig',
    '50': 'fünfzig',
    '51': 'einundfünfzig',
    '52': 'zweiundfünfzig',
    '53': 'dreiundfünfzig',
    '54': 'vierundfünfzig',
    '55': 'fünfundfünfzig',
    '56': 'sechsundfünfzig',
    '57': 'siebenundfünfzig',
    '58': 'achtundfünfzig',
    '59': 'neunundfünfzig',
  },
  numberElements: {
    connector: '-',
  },
  // Hard coding these as they are common enough to be used in >1 language
  formatters: {
    onTheHour: function (hours, minutes, getNumberString) {
      return getNumberString(hours) + ' Uhr';
    },

    quarterPast: function (hours, minutes, getNumberString) {
      return 'Viertel nach ' + getNumberString(hours);
    },

    xPast: function (hours, minutes, getNumberString) {
      return getNumberString(minutes) + ' nach ' + getNumberString(hours);
    },

    quarterTo: function (hours, minutes, getNumberString) {
      return 'Viertel vor ' + getNumberString(hours, { nextHour: true });
    },

    xTo: function (hours, minutes, getNumberString) {
      return getNumberString(60 - minutes) + ' vor ' + getNumberString(hours, { nextHour: true });
    },

    halfPast: function (hours, minutes, getNumberString) {
      return 'Halb ' + getNumberString(hours, { nextHour: true });
    },

    dayRegions: function (hours, minutes, timeString) {
      // TODO
      return timeString;
    },

    exceptions: [
      {
        test: function (hours, minutes) {
          return minutes > 20 && minutes < 40 && minutes !== 30;
        },
        formatter: function (hours, minutes, getNumberString) {
          if (minutes < 30) {
            return getNumberString(30 - minutes) + ' vor halb ' + getNumberString(hours + 1);
          }

          return getNumberString(minutes - 30) + ' nach halb ' + getNumberString(hours + 1);
        }
      }
    ]
  }
};
